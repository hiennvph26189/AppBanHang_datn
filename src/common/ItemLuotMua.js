import { View, Text, Alert, Image, TouchableOpacity } from "react-native"
import { Avatar } from "react-native-paper"
import React, { useEffect } from "react";
import axios from "axios";
import { GETCARTUSER, POST_CART_USER } from "../../API"
import { useDispatch, useSelector } from 'react-redux'
import Icon from "react-native-vector-icons/Foundation"
import { useNavigation, useIsFocused } from "@react-navigation/native";
const ItemLuotMua = (props) => {
    const item = props.item
    const navigation = useNavigation();
    useEffect(() => {

    })
    const info = useSelector(state => state.Reducers.arrUser);
    showImage = (image) => {
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
    onAddToCart= async(item)=>{
     
        let id =  info.id
        // console.log("Ok")
        if(id&&item.id){
         
                let data = {
                    id_member: id,
                    id_product: item.id,
                    soLuong:1,
                    size: ""
                }
                await axios.post(POST_CART_USER,data).then(res =>{
                    
                    if(res.data.errCode === 0 ){
                        
                        props.addCart()
                    }else{
                        Alert.alert('Thông báo',res.data.errMessage , [
                            {text: 'OK', onPress: () => {
                               
                            }},
                          ]);
                    }
                })
           
           
        }else{
           return Alert.alert(
            'Thông báo',
            'Bạn chưa đăng nhập',
            [
                {
                    text: 'OK',
                },
            ],
            { cancelable: false }
        );
        }
    }
    handleDetailProduct = (id) => {
        navigation.navigate('ProductDetail', { id: id }, { handleDetailProduct: { handleDetailProduct } });
    }
    return (
        <TouchableOpacity onPress={() => { handleDetailProduct(item.id) }} style={{
            width: 250,
            height: "auto",
            borderRadius: 10,
            elevation: 5,
            backgroundColor: '#fff',
            marginLeft: 20,
            marginBottom: 40,
        }}>

            <View style={{

                justifyContent: "center",
                alignItems: "center"
            }} >
                <Image source={{ uri: showImage(item.image) }}
                    style={{
                        width: 200,
                        height: 200,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        justifyContent: "center",
                        alignItems: "center"
                    }} />
            </View>

            <Text style={{
                marginLeft: 10,
                marginTop: 8,
                fontSize: 16,
                fontWeight: '600',
            }}>
                {item.tenSp} </Text>
            <View style={{
                paddingLeft: 10,
                paddingRight: 10,
                marginTop: 5,
                marginBottom: 10,

            }}>
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
                <View>
                    <Text style={{ fontSize: 14, fontWeight: "700" }}>
                        Đã bán: {item.luotMua}
                    </Text>
                </View>
                <TouchableOpacity
                    style={{
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingLeft: 10,
                        paddingRight: 10,
                        marginTop: 10,
                        paddingBottom: 10,
                        paddingTop: 7,
                    }} onPress={() => {
                        onAddToCart(item);
                    }}>
                    <Text style={{ textAlign: "center" }}>Add to Cart</Text>
                </TouchableOpacity>
            </View>

            {item.sale > 0 &&

                <View
                    style={{
                        borderRadius: 20,
                        position: 'absolute',
                        top: -5,
                        right: 25,
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                    }}>
                    <View style={{
                        position: 'relative',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>



                        <Icon name="burst" title="sadd" size={55} color={"#DD0000"} />
                        <Text style={{
                            color: "#fff",
                            position: 'absolute',
                            top: '50%',
                            transform: [{ translateY: -11 }],
                            marginLeft: 5,
                            fontSize: 14,
                            fontWeight: "700"
                        }}>-{item.sale}%
                        </Text>
                    </View>
                    {/* <TouchableOpacity
                        style={{
                            alignSelf: 'flex-start',
                            marginHorizontal: 10,
                            width: 40,
                            height: 40,
                            backgroundColor: '#fff',
                            borderRadius: 20,
                            elevation: 5,
                            alignItems: 'center',
                        }}>
                        <Image
                            source={require('../images/heart.png')}
                            style={{ width: 25, height: 25, marginTop: 8 }}
                        />
                    </TouchableOpacity> */}
                </View>
            }

        </TouchableOpacity>
    );
};

export default ItemLuotMua;