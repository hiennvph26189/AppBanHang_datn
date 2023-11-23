import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Main from "../bottom/Main";
import Contact from "../bottom/Contact";
import Cart from "../bottom/Cart";
import Profile from "../bottom/Profile";
import { useSelector } from "react-redux";
import News from "../bottom/News";
import Main2 from "../bottom/Main2";
import {GETCARTUSER} from "../../API"
import axios from "axios";
import { useIsFocused } from "@react-navigation/native";

const Home = (props) => {
    const info = useSelector(state => state.Reducers.arrUser);
    const isFocused = useIsFocused();
    const navigation = props.navigation;
    const [selectedTab, setSelectedTab] = useState(0);
    const [length, setLenght] = useState(0);
    const data = useSelector(state => state);

    const listCart = async()=>{
        let count = 0
        if(info.id){
            let idUser = info.id;
            await axios.get(`${GETCARTUSER}?id=${idUser}`).then(res=>{
                if(res.data.errCode == 0){
                    res.data.Carts.map((item)=>{
                        count = count +1
                    })
                    
                }
            })

        }
        setLenght(count)  
    }
    const deleteCart = ()=>{
        listCart()
    }
    const addCart = ()=>{
        listCart()
    }

    useEffect(() => {
        listCart()
    }, [isFocused])
    return (
        <View style={{ flex: 1 }}>
            {selectedTab == 0 ? (<Main2 addCart ={addCart} />) : selectedTab == 1 ? (<Contact />) : selectedTab == 2 ? (<Cart deleteCart ={deleteCart} />) : selectedTab == 3 ? (<News />) : (<Profile />)}
            <View style={{
                width: '100%',
                height: 50,
                backgroundColor: '#fff',
                position: 'absolute',
                bottom: 0,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <TouchableOpacity
                    style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => {
                        setSelectedTab(0);
                    }}
                >
                    <Image
                        source={require('../images/home.png')}
                        style={{ width: 24, height: 24, tintColor: selectedTab == 0 ? '#000' : '#8e8e8e', }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => {
                        setSelectedTab(1);
                    }}>
                    <Image
                        source={require('../images/contact.png')}
                        style={{ width: 24, height: 24, tintColor: selectedTab == 1 ? '#000' : '#8e8e8e', }}
                    />
                </TouchableOpacity>
                <View style={{
                    width: '20%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity
                        style={{ width: 44, height: 44, backgroundColor: selectedTab == 2 ? 'green' : '#000', borderRadius: 22, justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => {
                            setSelectedTab(2);
                        }}>
                        <Image
                            source={require('../images/shopping-cart.png')}
                            style={{ width: 24, height: 24, tintColor: '#fff' }}
                        />
                        {length>0 &&
                            <View style={{
                            width:16,
                            height:16,
                            backgroundColor:'red',
                            borderRadius:8,
                            justifyContent:'center',
                            alignItems:'center',
                            position:'absolute',
                            top:5,
                            right:5,
                        }}>
                            <Text style={{color:'#fff',fontWeight:'600',bottom:1,}}>{length}</Text>
                        </View>
                        }
                    </TouchableOpacity>

                </View>
                <TouchableOpacity
                    style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => {
                        setSelectedTab(3);
                    }}>
                    <Image
                        source={require('../images/newspaper.png')}
                        style={{ width: 24, height: 24, tintColor: selectedTab == 3 ? '#000' : '#8e8e8e', }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => {
                        setSelectedTab(4);
                    }}>
                    <Image
                        source={require('../images/user-menu.png')}
                        style={{ width: 24, height: 24, tintColor: selectedTab == 4 ? '#000' : '#8e8e8e', }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Home;