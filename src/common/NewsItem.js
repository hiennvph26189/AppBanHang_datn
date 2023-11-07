import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const NewsItem = () => {
  return (
        <TouchableOpacity style={{flexDirection:'row',width:"100%", padding:5, marginTop:15,borderBottomColor:"#ccc",borderBottomWidth:1}}>
            <View>
                <Image source={require('../images/pants1.jpg')}
                style={{width:120, height:120}}
                />
            </View>
            <View style={{ width: 290, paddingLeft: 5, paddingRight: 5 }}>
                <Text style={{ fontSize: 16, fontWeight: 700 }}>5 xu hướng thời trang nam nổi bật tại New York Fashion Week...</Text>
                <Text style={{ maxHeight: 75, fontSize: 12, marginTop: 5, color: "grey" }}>Tuần lễ Thời trang New York Xuân Hè 2024 'New York Fashion Week SS24' đã chính thức kết thúc. Với các show diễn của hơn 70 nhà...</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View>
                    </View>
                    <Text style={{ marginRight: 10, marginTop: 3 }}>28/09/2023
                        {/* {formatDate(item.createdAt)} */}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
  );
};

export default NewsItem;