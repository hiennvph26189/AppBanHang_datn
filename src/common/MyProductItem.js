import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const MyProductItem = ({ item, onAddToCart }) => {
    return (
        <TouchableOpacity>
            <View style={{
                width: 250,
                height: 375,
                borderRadius: 15,
                elevation: 5,
                backgroundColor: '#fff',
                marginLeft: 20,
                marginBottom: 10,
                alignItems: 'center',
            }}>
                <Image source={item.image}
                    style={{ width: 200, height: 220, marginTop: 5 }} />
                <Text style={{
                    marginLeft: 10,
                    marginTop: 10,
                    fontSize: 16,
                    fontWeight: '600'
                }}>{item.name}</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingLeft: 10,
                    paddingRight: 10,
                    marginTop: 10,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: '400'
                    }}>{item.price + "₫"}</Text>
                </View>
                <TouchableOpacity style={{
                    borderWidth:1,
                    borderRadius:10,
                    marginTop:10,
                    paddingLeft:60,
                    paddingRight:60,
                    paddingBottom:7,
                    paddingTop:7,
                 }} onPress={()=>{
                    onAddToCart(item);
                 }}>
                    <Text>Add to Cart</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={{
                    width:40,
                    height:40,
                    backgroundColor:'#fff',
                    borderRadius:20,
                    elevation:5,
                    position:'absolute',
                    top:10,
                    right:10,
                    justifyContent: 'center',
                    alignItems: 'center',
                 }}>
                    <Image 
                    source={require('../images/heart.png')}
                    style={{ width: 24, height: 24 }}/>
                 </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}

export default MyProductItem;