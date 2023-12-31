import { View, SafeAreaView, TextInput, ScrollView, FlatList, Text, ImageBackground, StyleSheet, Button, Pressable, ImputText, Platform, Image } from "react-native";
import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation, useIsFocused } from "@react-navigation/native";
import DangXuLy from '../edit/DangXuLy';
import DangGiaoHang from '../edit/DangGiaoHang';
import GiaoThanhCong from '../edit/GiaoThanhCong';
import DonHuy from '../edit/DonHuy';
import CustomHeader from '../common/CustomHeader';

const HistoryBuy = (props) => {
  const navigation = props.navigation;

  const isFocused = useIsFocused()
  const info = useSelector((state) => state.Reducers.arrUser)
  const [selectTab, setSelectetab] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    // getProfile()
    setRefreshing(true)
  }
  const data = {
    id: info.id
  }

  useEffect(() => {


  }, [isFocused])

  const orderDetails = (id) => {

  }

  return (
    <>
    <CustomHeader 
    title={'Lịch sử đơn hàng'}
    />
    <View style={[styles.container, { flex: 1, backgroundColor: '#DCDCDC' }]} showsVerticalScrollIndicator={false}>
      <View style={{ flexDirection: "row", justifyContent: "center", backgroundColor: '#000', padding: 2, alignItems: "center", borderRadius: 5 }}>
        <Pressable style={[styles.tab, {
          backgroundColor: selectTab == 0 ? "#FF9900" : "#fff"
        }]} onPress={() => { setSelectetab(0) }}>
          <Text style={{ fontWeight: "600" }}>Đang xử lý</Text>
        </Pressable>
        <Pressable style={[styles.tab, {
          backgroundColor: selectTab == 1 ? "#FF9900" : "#fff"
        }]} onPress={() => { setSelectetab(1) }}>
          <Text style={{ fontWeight: "600" }}>Đang Giao </Text>
        </Pressable>
        <Pressable style={[styles.tab, {
          backgroundColor: selectTab == 2 ? "#FF9900" : "#fff"
        }]} onPress={() => { setSelectetab(2) }}>
          <Text style={{ fontWeight: "600" }}>Đã giao thành công</Text>
        </Pressable>
        <Pressable style={[styles.tab, {
          backgroundColor: selectTab == 3 ? "#FF9900" : "#fff"
        }]} onPress={() => { setSelectetab(3) }}>
          <Text style={{ fontWeight: "600" }}> Đơn hủy</Text>
        </Pressable>
      </View>
      <ScrollView>
        {selectTab == 0 ? (<DangXuLy orderDetails={orderDetails} />) : selectTab == 1 ? (<DangGiaoHang orderDetail={orderDetails} />) : selectTab == 2 ? (<GiaoThanhCong orderDetails={orderDetails} />) : (<DonHuy />)}
      </ScrollView>




    </View>
    </>
    
  );
};

export default HistoryBuy;
const styles = StyleSheet.create({
  listView: {
    padding: 10
  },
  listView_Text: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 10
  },
  tab: {
    margin: 5,
    borderColor: '#000',
    borderWidth: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

    borderRadius: 5,
  }

})