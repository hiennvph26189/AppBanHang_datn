import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Main from "../bottom/Main";
import Contact from "../bottom/Contact";
import Cart from "../bottom/Cart";
import Profile from "../bottom/Profile";
import { useSelector } from "react-redux";
import News from "../bottom/News";


const Home = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const data = useSelector(state => state);

    return (
        <View style={{ flex: 1 }}>
            {selectedTab == 0 ? (<Main />) : selectedTab == 1 ? (<Contact />) : selectedTab == 2 ? (<Cart />) : selectedTab == 3 ? (<News />) : (<Profile />)}
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
                            <Text style={{color:'#fff',fontWeight:'600',bottom:1,}}>{data.Reducers.length}</Text>
                        </View>
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