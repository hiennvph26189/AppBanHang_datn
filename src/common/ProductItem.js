import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ProductItem = ({item}) => {
  return (
    <TouchableOpacity style={{
        borderRadius:20,
        elevation:5,
        width:200,
        justifyContent:'center',
        alignItems: 'center',
        marginLeft:10,
        backgroundColor:'#fff',
        marginBottom:10,
    }}>
        <View style={{width:'100%'}}>
            <Image source={item.image}
            style={{
                width:'100%',
                height:120,
                borderTopLeftRadius:20,
                borderTopRightRadius:20,
            }}/>
            <Text style={{
                marginTop:10,
                marginLeft:10,
                fontSize:18,
                fontWeight:'600',
            }}>{item.name}</Text>
            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems: 'center',
                marginBottom:10,
                }}>
                    <Text style={{
                        marginTop:5,
                        marginLeft:10,
                        fontSize:18,
                        fontWeight:'600',
                        marginBottom:10,
                    }}>{'₫'+item.price}</Text>
            </View>
        </View>

    </TouchableOpacity>
  );
};

export default ProductItem;