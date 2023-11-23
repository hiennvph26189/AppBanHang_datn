import { View, Text, ScrollView, TouchableOpacity,useWindowDimensions, Image } from 'react-native'
// import Moment from 'moment';
import React from 'react'
// import fr from "moment/locale/fr";
import { useNavigation,useIsFocused } from "@react-navigation/native";

const NewsItem = (props) => {
    const id = props.id;
    const item = props.arrNews;
    const navigation = useNavigation();
    const { width } = useWindowDimensions();
    const tomTatTinTuc = {
        html: `${item.tomTatTinTuc}`
      };
      const formatDate= (date)=>{
        const newFr = Moment(date).locale("vi", fr).format("DD/MM/YYYY ");
        return newFr
    }
    newsDetail = (item)=>{
        if(item){
            navigation.navigate('Chi tiết tin tức',{item: item});
        }

    }
  return (
        <TouchableOpacity key={id} onPress={()=>{newsDetail(item)}}  style={{flexDirection:'row',width:"100%", padding:5, marginTop:15,borderBottomColor:"#ccc",borderBottomWidth:1}}>
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