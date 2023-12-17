import { View, Text, Image, FlatList, TouchableOpacity, ScrollView, Dimensions, Animated, StyleSheet } from 'react-native'
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
import { LinearGradient } from 'expo-linear-gradient';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const HeghtW = width * 0.6;
const WidthW = (width - HeghtW) / 2;
const ESPACIO = 7;
const ALTURA_BACKDROP = height * 0.4;

const Main = (props) => {
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

            if (res.data.errCode === 0) {

                setSaleProduct(res.data.saleProduct)

            }
        }).catch((err) => { console.log(err) })
    }
    //sản phẩm mới nhất
    const getNewProduct = async () => {
        await axios.get(GET_NEW_PRODUCTS).then((res) => {

            if (res.data.errCode === 0) {

                setNewProduct(res.data.newProduct)

            }
        }).catch((err) => { console.log(err) })
    }
    // sản phẩm theo danh mục sản phẩm
    const getProductCate = async () => {
        await axios.get(LIST_PRODUCTS_IN_CATEGORIES).then((res) => {

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
        getNewProduct();
        getCategory();
        getHot();
        getHotSale();
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
    const showImage = (image) => {
        if (image) {

            let list = JSON.parse(image)
            let url = ""
            for (let i = 0; i < list.length; i++) {
                if (list[0]) {
                    url = list[0]
                }
            }
            return url

        }
    }
    const price = (price) => {
        let x = price;
        x = x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        return x;
    }
    handleDetailProduct = (id) => {
        navigation.navigate('ProductDetail', { id: id }, { handleDetailProduct: { handleDetailProduct } });
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
    function Backdrop({ scrollX }) {
        return (
            <View
                style={[
                    {
                        position: "absolute",
                        height: ALTURA_BACKDROP,
                        top: 0,
                        width: width,
                    },
                    StyleSheet.absoluteFillObject,
                ]}
            >
                {listNewProduct.map((imagen, index) => {
                    const inputRange = [
                        (index - 1) * HeghtW,
                        index * HeghtW,
                        (index + 1) * HeghtW,
                    ];

                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0, 1, 0],
                    });
                    return (
                        <Animated.Image
                            key={index}
                            source={{ uri: showImage(imagen.image) }}
                            style={[
                                { width: width, height: ALTURA_BACKDROP, opacity },
                                StyleSheet.absoluteFillObject,
                            ]}
                        />
                    );
                })}
                <LinearGradient
                    colors={["transparent", "white"]}
                    style={{
                        width,
                        height: ALTURA_BACKDROP,
                        position: "absolute",
                        bottom: 0,
                    }}
                />
            </View>
        );
    }
    const listProducts = (id, name) => {
        navigation.navigate('ListProducts', { id: id, name: name });
    }
    const scrollX = React.useRef(new Animated.Value(0)).current;
    return (
        <>
            <Header title={'Vemouse'} />
            <ScrollView style={{ flex: 1 }}>
                <View
                    style={{ flex: 1 }}>

                    <Backdrop scrollX={scrollX} />
                    <Animated.FlatList
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                            { useNativeDriver: true }
                        )}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        snapToAlignment="start"
                        contentContainerStyle={{
                            paddingTop: 200,
                            paddingHorizontal: WidthW,
                        }}
                        snapToInterval={HeghtW}
                        decelerationRate={0}
                        scrollEventThrottle={16}
                        data={listNewProduct}
                        keyExtractor={(item) => item}
                        renderItem={({ item, index }) => {
                            const inputRange = [
                                (index - 1) * HeghtW,
                                index * HeghtW,
                                (index + 1) * HeghtW,
                            ];

                            const scrollY = scrollX.interpolate({
                                inputRange,
                                outputRange: [0, -50, 0],
                            });
                            return (
                                <TouchableOpacity
                                    onPress={() => { handleDetailProduct(item.id) }}
                                >
                                    <View style={{ width: HeghtW }}>
                                        <Animated.View
                                            style={{
                                                marginHorizontal: ESPACIO,
                                                padding: ESPACIO,
                                                borderRadius: 34,
                                                backgroundColor: "#fff",
                                                alignItems: "center",
                                                transform: [{ translateY: scrollY }],
                                            }}
                                        >
                                            <Image source={{ uri: showImage(item.image) }} style={styles.posterImage} />
                                            <Text style={{ fontWeight: "bold", fontSize: 20, color: 'red' }}>
                                                
                                                {item.sale <= 0 ?
                                                    <Text style={{
                                                        fontSize: 18,
                                                        fontWeight: '600',
                                                        color: 'red'
                                                    }}>

                                                        {price(item.giaSanPham)}
                                                    </Text>
                                                    : <View style={{
                                                        flexDirection: 'row',

                                                        alignItems: "center"
                                                    }}>
                                                        <Text style={{
                                                            fontSize: 17,
                                                            fontWeight: '600',
                                                            color: 'red',
                                                            textAlign: 'left'

                                                        }}>

                                                            {price(item.giaSanPham - (item.giaSanPham * (item.sale / 100)))}
                                                        </Text>
                                                        <Text style={{
                                                            fontSize: 25,
                                                            marginLeft: 10,
                                                            marginRight: 10
                                                        }}>-</Text>
                                                        <Text style={{
                                                            fontSize: 15,
                                                            fontWeight: '600',
                                                            color: '#696969',
                                                            textDecorationLine: 'line-through'
                                                        }}>

                                                            {price(item.giaSanPham)}
                                                        </Text>
                                                    </View>

                                                }
                                                
                                            </Text>
                                        </Animated.View>
                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                    />
                    <View style={{ marginTop: 20 }}>

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
        </>
    )
}

export default Main;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
    posterImage: {
        width: "100%",
        height: HeghtW * 1.2,
        resizeMode: "cover",
        borderRadius: 24,
        margin: 0,
        marginBottom: 10,
    },
});