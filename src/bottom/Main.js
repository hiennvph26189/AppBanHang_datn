import { View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../common/Header';
import { products } from '../common/Product';
import MyProductItem from '../common/MyProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../redux/actions/Actions';
import axios from 'axios';
import { GET_CATEGORIES, GET_ALLPRODUCTS, LIST_HOST_SALES_PRODUCTS, LIST_HOST_ODERS_PRODUCTS, LIST_PRODUCTS_IN_CATEGORIES, GET_NEW_PRODUCTS } from '../../API';
import ItemLuotMua from '../common/ItemLuotMua'
import { useIsFocused, useNavigation } from '@react-navigation/native';

const Main = (props) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [categoryList, setCategoryList] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [listHotBuy, setListHotBuy] = useState([]);
    const [listSaleProduct, setSaleProduct] = useState([]);
    const [listNewProduct, setNewProduct] = useState([]);
    const [listCategoryProduct, setListCategoryProduct] = useState([]);

    //sản phẩm bán nhiều nhất
    const getHot = async () => {
        await axios.get(LIST_HOST_ODERS_PRODUCTS).then((res) => {
            console.log(res.data + 'hotbuy');
            if (res.data.errCode === 0) {

                setListHotBuy(res.data.hotOrdersProducts)
            }
        }).catch((err) => { console.log(err) })
    }
    //get category list
    const getCategory = async () => {
        await axios.get(GET_CATEGORIES).then((res) => {

            if (res.data.errCode === 0) {

                setCategoryList(res.data.data)
            }
        }).catch((err) => { console.log(err) })
    }
    //hot sale
    const getHotSale = async () => {
        await axios.get(LIST_HOST_SALES_PRODUCTS).then((res) => {
            console.log(res.data + ' hot sales');
            if (res.data.errCode === 0) {

                setSaleProduct(res.data.saleProduct)

            }
        }).catch((err) => { console.log(err) })
    }
    //sản phẩm mới nhất
    const getNewProduct = async () => {
        await axios.get(GET_NEW_PRODUCTS).then((res) => {
            console.log(res.data+ 'new product');
            if (res.data.errCode === 0) {

                setNewProduct(res.data.newProduct)

            }
        }).catch((err) => { console.log(err) })
    }
    // sản phẩm theo danh mục sản phẩm
    const getProductCate = async () => {
        await axios.get(LIST_PRODUCTS_IN_CATEGORIES).then((res) => {
            console.log(res.data.dataProducts + 'ca');
            if (res.data.errCode === 0) {

                setListCategoryProduct(res.data.dataProducts)

            }
        }).catch((err) => { console.log(err) })
    }
    //get tất cả sản phẩm
    const getAllProducts = async () => {
        await axios.get(GET_ALLPRODUCTS).then((res) => {
            if (res.data.errCode === 0) {

                setAllProducts(res.data.totalProducts)

            }
        }).catch((err) => { console.log(err) })
    }

    useEffect(() => {
        getCategory();
        getHot();
        getHotSale();
        getNewProduct();
        getAllProducts();
        getProductCate();

    }, [useIsFocused]);

    onRefresh = () => {
        setRefreshing(true)
        getProductCate()
        getCategory()
        getHotSale()
        getNewProduct()
        getHot()
        getAllProducts()
    }

    const addCart = () => {

        props.addCart()
    }
    listDanhSach = (id) => {
        return (
            <>
                <FlatList
                    data={allProducts.filter((p) => p.idDanhSach === id)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    extraData={id}

                    renderItem={({ item }) => {
                        return (
                            <MyProductItem
                                item={item}

                                addCart={addCart}
                            />
                        );
                    }
                    }

                />

            </>
        )
    }
    const listProducts = (id, name) => {
        navigation.navigate('ListProducts', { id: id, name: name });
    }

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Header title={'Vemouse'} />
                <Image
                    source={require('../images/banner.png')}
                    style={{
                        width: '90%',
                        height: 200,
                        borderRadius: 10,
                        alignSelf: 'center',
                        marginTop: 10,
                    }}
                />
                <View style={{ marginTop: 10 }}>
                    <FlatList data={categoryList}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    style={{
                                        padding: 10,
                                        borderWidth: 1,
                                        marginLeft: 15,
                                        borderRadius: 20,
                                    }}
                                >
                                    <Text style={{ color: '#000' }}>{item.name}</Text>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    
                    {listNewProduct && listNewProduct.length > 0 &&
                        <>
                            <View style={{
                                flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomColor: "#ccc", borderBottomWidth: 1, marginRight: 15, paddingBottom: 5,
                                marginLeft: 20,
                            }}>
                                <Text style={{
                                    color: '#000',
                                    fontSize: 16,
                                    fontWeight: '600',

                                }}>
                                    Sản phẩm mới nhất
                                </Text>


                            </View>
                            <ScrollView ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }}>
                                {listNewProduct && listNewProduct.map((item) => {
                                    return (

                                        <ItemLuotMua key={item.id}
                                            item={item}
                                            addCart={addCart}
                                        />
                                    )
                                })}

                            </ScrollView>
                        </>
                    }

                    {listHotBuy && listHotBuy.length > 0 &&
                        <>
                            <View style={{
                                flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomColor: "#ccc", borderBottomWidth: 1, marginRight: 15, paddingBottom: 5,
                                marginLeft: 20,
                            }}>
                                <Text style={{
                                    color: '#000',
                                    fontSize: 16,
                                    fontWeight: '600',

                                }}>
                                    Lượt mua nhiều nhất
                                </Text>

                                <TouchableOpacity onPress={() => { listProducts("luotMuaNhieu", "Lượt mua nhiều nhất") }} >
                                    <Text style={{ fontSize: 16, fontWeight: "600", textDecorationLine: "underline", fontStyle: "italic", color: "#3399FF" }}>Xem tất cả</Text>
                                </TouchableOpacity>
                            </View>
                            <ScrollView ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }}>
                                {listHotBuy && listHotBuy.map((item) => {
                                    return (

                                        <ItemLuotMua key={item.id}
                                            item={item}
                                            addCart={addCart}
                                        />
                                    )
                                })}

                            </ScrollView>
                        </>
                    }

                    {listSaleProduct && listSaleProduct.length > 0 &&
                        <>
                            <View style={{
                                flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomColor: "#ccc", borderBottomWidth: 1, marginRight: 15, paddingBottom: 5,
                                marginLeft: 20,
                            }}>
                                <Text style={{
                                    color: '#000',
                                    fontSize: 16,
                                    fontWeight: '600',

                                }}>
                                    Hole Sale
                                </Text>

                                <TouchableOpacity onPress={() => { listProducts("luotMuaNhieu", "Lượt mua nhiều nhất") }} >
                                    <Text style={{ fontSize: 16, fontWeight: "600", textDecorationLine: "underline", fontStyle: "italic", color: "#3399FF" }}>Xem tất cả</Text>
                                </TouchableOpacity>
                            </View>
                            <ScrollView ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }}>
                                {listSaleProduct && listSaleProduct.map((item) => {
                                    return (

                                        <ItemLuotMua key={item.id}
                                            item={item}
                                            addCart={addCart}
                                        />
                                    )
                                })}

                            </ScrollView>
                        </>
                    }

                    {listCategoryProduct && listCategoryProduct.length > 0 &&
                        <>
                            {listCategoryProduct.map((item) => (
                                <View key={item.id}>
                                    <View style={{
                                        flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomColor: "#ccc", borderBottomWidth: 1, marginRight: 15, paddingBottom: 5,
                                        marginLeft: 20,
                                    }}>
                                        <Text style={{
                                            color: '#000',
                                            fontSize: 16,
                                            fontWeight: '600',

                                        }}>
                                            {item.name}
                                        </Text>
                                        <TouchableOpacity onPress={() => { listProducts(item.id, item.name) }} >
                                            <Text style={{ fontSize: 16, fontWeight: "600", textDecorationLine: "underline", fontStyle: "italic", color: "#3399FF" }}>Xem tất cả</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }}>
                                        {item.products.map((item) => (
                                            <ItemLuotMua key={item.id} item={item}
                                                addCart={addCart}
                                            />
                                        ))}
                                    </ScrollView>
                                </View>
                            ))}
                        </>
                    }
                </View>
            </View>
        </ScrollView>
    )
}

export default Main