import { View, Text, Dimensions,useWindowDimensions,Image } from 'react-native'
import React from 'react'
import RenderHTML from 'react-native-render-html';
import moment from 'moment';
import fr from "moment/locale/fr";
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../common/Header';
import CustomHeader from '../common/CustomHeader';
const NewsPaperDetail = (props) => {

  const WIDTH = Dimensions.get('window').width;
  const HEIGHT = Dimensions.get('window').height;
  const route = props.route;
  const { width } = useWindowDimensions();
  let item = route.params.item;
  const tomTatTinTuc = {
    html: `${item.moTa}`
  };
  const formatDate = (date) => {
    const newFr = moment(date).locale("vi", fr).format("DD/MM/YYYY ");
    return newFr
  }
  return (
    <>
    <CustomHeader 
    title={'Thông tin chi tiết'}
    />
    <ScrollView style={{ paddingTop: 10 }}>
      <Text style={{ fontSize: 17, fontWeight: '600' }}>{item.tieuDe}</Text>
      <View>
        <Text>{formatDate(item.createdAt)}</Text>
      </View>
      <Image source={{ uri: item.anhTinTuc }}
        style={{
          width: WIDTH,
          height: 300, marginTop: 3, marginBottom: 3,
        }}
      />
      <Text style={{ fontSize: 15, fontWeight: "600" }}>
        {item.tomTatTinTuc}
      </Text>
      <View>
        <RenderHTML 
        contentWidth={width}
        source={tomTatTinTuc}
        />
      </View>
    </ScrollView></>
  );
};

export default NewsPaperDetail;