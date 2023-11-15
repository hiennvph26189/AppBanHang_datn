import { View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../common/Header';
import { products } from '../common/Product';
import MyProductItem from '../common/MyProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../redux/actions/Actions';
import axios from 'axios';
import { API_GETCATEGORY, API_HOT_PRODUCTS, API_HOTSALE_PRODUCTS,API_NEW_PRODUCTS } from '../../API';
import ItemLuotMua from '../common/ItemLuotMua'

const Main = () => {
    const dispatch = useDispatch();
    const [categoryList, setCategoryList] = useState([]);
    const [tShirtList, setTshirtList] = useState([]);
    const [jeansList, setJeanList] = useState([]);
    const [shoesList, setShoesList] = useState([]);
    const [jackList, setJackList] = useState([]);
    const [slipperList, setSlipperList] = useState([]);
    const [listHotBuy, setListHotBuy] = useState([]);
    const [listSaleProduct, setSaleProduct] = useState([]);
    const [listNewProduct, setNewProduct] = useState([]);

    const getHot = async () => {
        axios.get(API_HOT_PRODUCTS).then((res) => {

            if (res.data.errCode === 0) {

                setListHotBuy(res.data.hotProduct)
            }
        }).catch((err) => { console.log(err) })
    }
    const getCategory = async () => {
        axios.get(API_GETCATEGORY).then((res) => {

            if (res.data.errCode === 0) {

                setCategoryList(res.data.data)
            }
        }).catch((err) => { console.log(err) })
    }
    const getHotSale = async () => {
        axios.get(API_HOTSALE_PRODUCTS).then((res) => {
            console.log(res+"sales");
            if (res.data.errCode === 0) {

                setSaleProduct(res.data.saleProduct)
                
            }
        }).catch((err) => { console.log(err) })
    }
    const getNewProduct = async () => {
        axios.get(API_NEW_PRODUCTS).then((res) => {
            console.log(res+"sales");
            if (res.data.errCode === 0) {

                setNewProduct(res.data.newProduct)
                
            }
        }).catch((err) => { console.log(err) })
    }

    useEffect(() => {
        getCategory();
        getHot();
        getHotSale();
        getNewProduct();
        let tempCategory = [];
        products.category.map(item => {
            tempCategory.push(item);
        });
        // setCategoryList(tempCategory);
        setTshirtList(products.category[0].data);
        setJeanList(products.category[1].data);
        setShoesList(products.category[2].data);
        setJackList(products.category[3].data);
        setSlipperList(products.category[4].data);
    }, []);

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
                {listNewProduct && listNewProduct.length>0 &&
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
                                Sản phẩm mới
                            </Text>

                            {/* <TouchableOpacity onPress={() => { danhSachSabPham("luotMuaNhieu", "Lượt mua nhiều nhất") }} >
<Text style={{ fontSize: 16, fontWeight: "600", textDecorationLine: "underline", fontStyle: "italic", color: "#3399FF" }}>Xem tất cả</Text>
</TouchableOpacity> */}
                        </View>
                        <ScrollView ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }}>
                        {listNewProduct && listNewProduct.map((item) => {
                            return (

                                <ItemLuotMua key={item.id}
                                    item={item}

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

                            {/* <TouchableOpacity onPress={() => { danhSachSabPham("luotMuaNhieu", "Lượt mua nhiều nhất") }} >
            <Text style={{ fontSize: 16, fontWeight: "600", textDecorationLine: "underline", fontStyle: "italic", color: "#3399FF" }}>Xem tất cả</Text>
          </TouchableOpacity> */}
                        </View>
                        <ScrollView ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }}>
                        {listHotBuy && listHotBuy.map((item) => {
                            return (

                                <ItemLuotMua key={item.id}
                                    item={item}

                                />
                            )
                        })}

                    </ScrollView>
                    </>
                    }
                    
                    {listSaleProduct && listSaleProduct.length>0&&
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

                            {/* <TouchableOpacity onPress={() => { danhSachSabPham("luotMuaNhieu", "Lượt mua nhiều nhất") }} >
<Text style={{ fontSize: 16, fontWeight: "600", textDecorationLine: "underline", fontStyle: "italic", color: "#3399FF" }}>Xem tất cả</Text>
</TouchableOpacity> */}
                        </View>
                        <ScrollView ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }}>
                        {listSaleProduct && listSaleProduct.map((item) => {
                            return (

                                <ItemLuotMua key={item.id}
                                    item={item}

                                />
                            )
                        })}

                     </ScrollView>
                    </>
                    }
                
                    
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList style={{ flex: 1 }}
                        data={categoryList}
                        renderItem={({ item, index }) => {
                            return (
                                <View>
                                    <Text
                                        style={{
                                            marginHorizontal: 10,
                                            marginVertical: 8,
                                            fontSize: 16,
                                            color: 'black',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {item.name}
                                    </Text>
                                    <View style={{ marginTop: 20 }}>
                                        <FlatList
                                            data={tShirtList}
                                            horizontal
                                            showsHorizontalScrollIndicator={false}
                                            renderItem={({ item, index }) => {
                                                return (
                                                    <MyProductItem
                                                        item={item}
                                                        onAddToCart={add => {
                                                            dispatch(addItemToCart(item));
                                                        }} />
                                                );
                                            }}
                                        />
                                    </View>
                                </View>
                            );
                        }}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default Main