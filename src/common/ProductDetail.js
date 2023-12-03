import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions, ScrollView, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { GET_CATEGORIES, POSTCARTUSER, GET_ONE_PRODUCT } from '../../API';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import CustomHeader from '../common/CustomHeader';
import RenderHTML from 'react-native-render-html';


const images = [

    'https://loveincorporated.blob.core.windows.net/contentimages/gallery/6a985aaa-8a95-4382-97a9-91cdf96f43d3-Moraine_Lake_Dennis_Frates_Alamy_Stock_Photo.jpg',
    'https://www.eventstodayz.com/wp-content/uploads/2017/03/winter-wallpapers-2017.jpg',
    'https://images.ctfassets.net/wqkd101r9z5s/6F7zAoiaaiKCVEVlcgtvWs/99a68388fe179c5effa9f7fc6a37bbb9/Paris-1.jpg?w=1365&q=95'

];
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ProductDetail = (props) => {

    const isFocused = useIsFocused();
    const navigation = useNavigation();
    const route = props.route;
    let idProduct = route.params.id;
    const { width } = useWindowDimensions();
    const info = useSelector(state => state.Reducers.arrUser);
    const [imgActive, setImgActive] = useState(0);
    const [detailProduct, setDetailProduct] = useState({});
    const [ortherProducrs, setOrtherProducrs] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [images, setImages] = useState([]);
    const [size, setSize] = useState("");
    const [soLuong, setSoLuong] = useState(0);


    const lienHe = () => {
        navigation.navigate('Home', 1);
    }
    onRefresh = () => {
        getDetailProduct();
        loadCategory();
    }
    const getDetailProduct = async () => {
        if (idProduct) {
            await axios.get(`${GET_ONE_PRODUCT}?id=${idProduct}`).then((res) => {
                if (res.data.errCode === 0) {
                    setDetailProduct(res.data.getDetailProduct)
                    setImages(JSON.parse(res.data.getDetailProduct.image))
                    setOrtherProducrs(res.data.arProduct)
                    console.log(JSON.parse(res.data.getDetailProduct.image))
                }
            })
        }
    }
    const loadCategory = async () => {
        await axios.get(GET_CATEGORIES).then((res) => {
            if (res && res.data.errCode === 0) {
                setCategoryList(res.data.data);
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getDetailProduct();
        loadCategory();
    }, [isFocused])

    price = (price) => {
        if (price) {
            let x = price;
            x = x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
            return x;
        }
    }

    getCategory = (id) => {
        let name = ""
        if (id && categoryList) {
            categoryList.map((item) => {
                if (id == item.id) {
                    name = item.name

                }
            })
        }
        return name;
    }
    const source = {
        html: `${detailProduct.mota}`
    };
    const tangSoLuong = () => {
        let count = soLuong
        count = count + 1
        setSoLuong(count)
    }
    const giamSoLuong = () => {
        let count = soLuong
        count = count - 1
        setSoLuong(count)
    }

    return (
        <>
            <CustomHeader
                title={'Chi tiết sản phẩm'}
            />
            <View style={{ backgroundColor: "#fff" }}>
                <ScrollView>
                    <SafeAreaView>
                        <View>
                            <View style={{
                                width: 400,
                                height: 'auto',
                                borderRadius: 5,

                                paddingTop: 10,
                                paddingBottom: 10,

                                marginTop: 3,
                            }}>
                                <Text style={{
                                    textTransform: 'uppercase',
                                    marginLeft: 2,
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                }}>{detailProduct ? detailProduct.tenSp : ""}</Text>

                            </View>
                            <ScrollView
                                showsHorizontalScrollIndicator={false}
                                pagingEnabled
                                horizontal
                                style={styles.wrap}
                            >
                                {images.map((e, index) =>
                                    <Image key={e}
                                        style={styles.wrap}
                                        source={{ uri: e }}
                                    />
                                )}

                            </ScrollView>
                            <View style={styles.wrapDot}>
                                {
                                    images.map((e, index) =>
                                        <Text
                                            key={e}
                                            style={imgActive == index ? styles.dotActive : styles.dot}
                                        >●</Text>
                                    )
                                }
                            </View>
                        </View>
                        <View style={{ justifyContent: 'space-between', flexDirection: "row", alignItems: "center", padding: 5 }}>
                            {detailProduct && detailProduct.sale > 0 ?
                                <>
                                    <View style={{ flexDirection: 'row', marginLeft: 2, alignItems: "center", paddingTop: 10, paddingBottom: 10 }}>

                                        <Text style={{

                                            width: 'auto',
                                            fontWeight: 'bold',
                                            color: 'grey',
                                            fontSize: 20,
                                            textDecorationLine: 'line-through'
                                        }}>
                                            {price(detailProduct.giaSanPham)}
                                        </Text>
                                        <Text style={{ fontSize: 20, marginLeft: 5, marginRight: 5 }}>-</Text>
                                        <Text style={{

                                            width: 'auto',
                                            fontWeight: 'bold',
                                            color: 'red',
                                            fontSize: 20,
                                            marginRight: 10,
                                        }}>
                                            {price(detailProduct.giaSanPham - (detailProduct.giaSanPham * (detailProduct.sale / 100)))}
                                        </Text>
                                    </View>
                                </>
                                :
                                <View style={{ flexDirection: 'row', marginLeft: 2, marginTop: 15 }}>
                                    <Text style={{

                                        width: 'auto',
                                        fontWeight: 'bold',
                                        color: 'red',
                                        fontSize: 20,
                                        marginRight: 10,
                                    }}>
                                        {price(detailProduct.giaSanPham)}
                                    </Text>

                                </View>

                            }
                            <View style={{ marginRight: 20 }}>
                                <Text >
                                    (đã bán: {detailProduct.luotMua})
                                </Text>
                            </View>
                        </View>

                        <View>


                            <View>
                                <Text style={{
                                    fontWeight: 'bold',
                                    borderColor: 'grey',
                                    backgroundColor: 'grey',
                                    padding: 10,
                                    fontSize: 17


                                }}>Size </Text>
                                <View style={{ flexDirection: 'row', paddingLeft: 5, marginTop: 10 }}>
                                    <TouchableOpacity onPress={() => { setSize("M") }} style={{ backgroundColor: size == "M" ? "#FF6633" : "#fff", marginRight: 20, borderWidth: 1, borderRadius: 5, padding: 7, flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ textAlign: 'center' }}>Size: M</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { setSize("L") }} style={{ backgroundColor: size == "L" ? "#FF6633" : "#fff", marginRight: 20, borderWidth: 1, borderRadius: 5, padding: 7, flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ textAlign: 'center' }}>Size: L</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { setSize("XL") }} style={{ backgroundColor: size == "XL" ? "#FF6633" : "#fff", marginRight: 20, borderWidth: 1, borderRadius: 5, padding: 7, flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ textAlign: 'center' }}>Size: XL</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { setSize("XXL") }} style={{ backgroundColor: size == "XXL" ? "#FF6633" : "#fff", marginRight: 20, borderWidth: 1, borderRadius: 5, padding: 7, flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ textAlign: 'center' }}>Size: XXL</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View >
                                <Text style={{
                                    fontWeight: 'bold',
                                    borderColor: 'grey',
                                    backgroundColor: 'grey',
                                    padding: 10,
                                    fontSize: 17,
                                    marginTop: 10


                                }}>Số lượng </Text>
                                <View style={{ flexDirection: 'row', paddingLeft: 5, alignItems: "center", marginTop: 10 }}>
                                    {soLuong > 0 ?
                                        <TouchableOpacity
                                            onPress={() => { giamSoLuong() }}
                                            style={{
                                                marginLeft: 10,
                                                marginRight: 10,
                                                flexDirection: "row",
                                                justifyContent: "center",
                                                alignItems: "center",

                                            }}>
                                            <FontAwesome
                                                size={28}
                                                name="minus-square-o"
                                            />
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity style={{

                                            marginLeft: 10,
                                            marginRight: 10,
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderRadius: 5,

                                        }}>
                                            <FontAwesome
                                                size={27}
                                                name="minus-square"
                                            />
                                        </TouchableOpacity>
                                    }
                                    <Text style={{ fontSize: 16 }}>{soLuong}</Text>


                                    {soLuong < detailProduct.soLuong ?
                                        <TouchableOpacity
                                            onPress={() => { tangSoLuong() }}
                                            style={{

                                                marginLeft: 10,

                                                marginRight: 10,
                                                flexDirection: "row",
                                                justifyContent: "center",
                                                alignItems: "center",

                                            }}>
                                            <FontAwesome
                                                size={28}
                                                name="plus-square-o"
                                            />
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity style={{


                                            marginLeft: 10,
                                            flexDirection: "row",
                                            marginRight: 10,
                                            justifyContent: "center",
                                            alignItems: "center",


                                        }}>
                                            <FontAwesome
                                                size={26}
                                                name="plus-square"
                                            />
                                        </TouchableOpacity>
                                    }
                                </View>
                            </View>

                            <View style={{ marginTop: 20, padding: 10 }}>
                                <View style={{ fontWeight: 'bold', borderWidth: 1, borderRadius: 5, borderColor: '#b8a165', width: 'auto', height: 'auto', padding: 8, position: "relative" }}>
                                    <View style={{ borderWidth: 1, borderColor: '#b8a165', borderRadius: 5, width: "40%", padding: 7, position: "absolute", top: -20, left: 20, backgroundColor: "#fff", }}>
                                        <Text style={{ fontWeight: 'bold', textAlign: "center" }}>Chính sách đổi trả</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                        <Text style={{ fontWeight: 'bold' }}>HOÀN TIỀN: </Text>
                                        <Text>Áp dụng cho sản phẩm lỗi và không lỗi.</Text>
                                    </View>

                                    <View style={{ marginLeft: 10, }}>
                                        <Text style={{ marginTop: 10, lineHeight: 20 }}>• Hoàn trả hàng trong vòng 7 ngày</Text>
                                        <Text style={{ lineHeight: 20 }}>• Tháng đầu tiên kể từ ngày mua: phí 20% giá trị hóa đơn.</Text>
                                        <Text style={{ lineHeight: 20 }}>•Tháng thứ 2 đến tháng thứ 12: phí 10% giá trị hóa đơn/tháng.</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10, marginBottom: 20 }}>
                                <TouchableOpacity onPress={() => { lienHe() }}
                                    style={{ marginTop: 10, marginRight: 20, borderWidth: 1, borderRadius: 7, padding: 10, width: 150, flexDirection: "row", justifyContent: 'center', alignItems: 'center', backgroundColor: '#5d83db', borderColor: '#5d83db' }}>
                                    <Text style={{ textAlign: 'center', fontSize: 17, textTransform: 'uppercase', fontWeight: 'bold', color: 'white' }}>Liên Hệ</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    // onPress={()=>{onAddToCart()}} 
                                    style={{ marginTop: 10, marginLeft: 20, borderColor: 'orange', borderRadius: 7, padding: 10, width: 150, flexDirection: "row", justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange', }}>
                                    <Text style={{ textAlign: 'center', fontSize: 17, textTransform: 'uppercase', fontWeight: 'bold', color: 'white' }}>Giỏ Hàng</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View>
                            <TouchableOpacity
                            // onPress={()=>{setXemChiTiet(!xemChiTiet)}}
                            >
                                <Text style={{
                                    fontWeight: 'bold',
                                    borderWidth: 1,
                                    textAlign: 'center',
                                    backgroundColor: 'black',
                                    color: 'white',
                                    padding: 12,


                                }}>Xem chi tiết sản phẩm</Text>
                            </TouchableOpacity>
                            <View style={{
                                width: '100%',
                                padding: 7,
                                paddingBottom: 10,
                                // height:xemChiTiet?"auto":200
                                height: 200,


                            }}>
                                <Text>
                                    Tên mẫu áo:
                                    {detailProduct ? detailProduct.tenSp : ""}
                                </Text>
                                <Text>
                                    Hãng sản xuất:
                                    {detailProduct ? detailProduct.hangSx : ""}
                                </Text>
                                <Text>
                                    Danh mục:
                                    {getCategory(detailProduct ? detailProduct.idDanhSach : "")}
                                </Text>
                                <Text>
                                    Số lượng:
                                    {detailProduct.soLuong}
                                </Text>
                                <Text>
                                    Giá gốc:
                                    {price(detailProduct.giaSanPham)}

                                </Text>
                                <Text>
                                    Sale:
                                    {detailProduct.sale}%

                                </Text>
                                <View style={{ marginTop: 5 }}>
                                    <Text style={{ fontSize: 17, fontWeight: "700" }}>
                                        Đánh giá sản phẩm:
                                    </Text>
                                    <RenderHTML
                                        contentWidth={width}
                                        source={source}

                                    />
                                </View>


                            </View>
                        </View>

                        <View style={{
                            width: '100%',

                            borderRadius: 10,

                            height: 'auto',
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                borderWidth: 1,
                                textTransform: 'uppercase',
                                backgroundColor: 'black',
                                padding: 8,
                                borderColor: 'black',
                                color: 'white',


                            }}>Sản phẩm khác: </Text>
                            {/* <ScrollView>
                            {
                               listSanPhamKhac()
                            }
                        </ScrollView> */}
                        </View>
                    </SafeAreaView>
                </ScrollView>
            </View>
        </>
    )
};

export default ProductDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrap: {
        marginTop: 0,
        width: WIDTH,
        height: HEIGHT * 0.5,
        borderRadius: 5
    },
    wrapDot: {

        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center'
    }, dotActive: {
        margin: 3,
        color: 'grey',
    },
    dot: {
        margin: 3,
        color: 'white'
    }
});