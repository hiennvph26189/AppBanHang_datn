import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CartItem = ({item}) => {
  return (
    <TouchableOpacity>
            <View style={{
                width: "95%",
                height: 385,
                borderRadius: 15,
                elevation: 5,
                backgroundColor: '#fff',
                marginLeft: 10,
                marginRight:10,
                marginBottom: 10,
                alignItems: 'center',
                marginTop:10,
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
                    position: 'absolute',
                    top: 5,
                    right:10,
                    width: 35,
                    height: 35,
                    justifyContent: "center",
                    alignContent: "center",
                    borderWidth: 1,
                    borderRadius: 50,
                 }}>
                    <Text style={{
                        textAlign: "center",
                        fontSize: 16,
                        fontWeight: "bold", color: "red"
                    }}>X</Text>
                 </TouchableOpacity>
            </View>
        </TouchableOpacity>
  );
};

export default CartItem;