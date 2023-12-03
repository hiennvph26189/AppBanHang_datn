<<<<<<< HEAD
import { View, Text,RefreshControl ,ScrollView} from 'react-native'
import React, { useEffect,useState } from "react";
import { GETCATEGORIES, GET_DANH_SACH_SAN_PHAM_MEMBER } from "../../API"
import { useNavigation, useIsFocused } from "@react-navigation/native";
import axios from "axios";
import ItemDanhSach from "../common/MyProductItem";

const ListProducts = (props) => {
=======
import { Text, View, RefreshControl, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CustomHeader from './CustomHeader';
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";
import { GET_DANH_SACH_SAN_PHAM_MEMBER } from "../../API";
import ItemDanhSach from '../common/ItemDanhSach';


const ListProducts = (props) => {

>>>>>>> 28961474e75842d659a9e1cd3dc475320f28e601
  const isFocused = useIsFocused();
  const route = props.route;
  let id = route.params.id
  let name = route.params.name
  const [arrProducts, setArrProducts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
<<<<<<< HEAD
  
      onRefresh = () => {
          setRefreshing(true)
          loadAllProducts
      }
  useEffect(()=>{
      loadAllProducts()
  },[isFocused])
  
  const loadAllProducts = async () => {
      console.log(id)
      if(id === "luotMuaNhieu"){
          await axios.get(`${GET_DANH_SACH_SAN_PHAM_MEMBER}?id=${id}`).then((res) => {

              if (res && res.data.errCode === 0) {
                  //console.log(res.data.products,"OK")
                  setArrProducts(res.data.getAllLuotMuaNhieu)
                  setRefreshing(false)
              }
          }).catch((error) => { console.log(error) });
      }else if(id === "hotSale"){
          await axios.get(`${GET_DANH_SACH_SAN_PHAM_MEMBER}?id=${id}`).then((res) => {
              if (res && res.data.errCode === 0) {
                  //console.log(res.data.products,"OK")
                  setArrProducts(res.data.getHotSaleAll)
                  setRefreshing(false)
              }
          }).catch((error) => { console.log(error) });
      }else{
          await axios.get(`${GET_DANH_SACH_SAN_PHAM_MEMBER}?id=${id}`).then((res) => {

              if (res && res.data.errCode === 0) {
                  setArrProducts(res.data.products)
                  setRefreshing(false)
                  
  
              }
          }).catch((error) => { console.log(error) });
      }
      
  }

  return (
      <View style={{backgroundColor:"#fff",height:"100%"}}>
          <View style={{backgroundColor:"#000",paddingTop:6,paddingBottom:6 }}>
              <Text style={{fontSize:20,color:"#fff",textAlign:"center"}}>{name}</Text>
          </View>
               <ScrollView 
      refreshControl={
          <RefreshControl
              refreshing={refreshing}
              onRefresh={() => { onRefresh() }}
          />
      }
      >
          <View  style={{flexDirection:"row",flexWrap:"wrap",width:"100%"}}>
              
              {
              arrProducts.map((item)=>{
                  return(
                      <View key={item.id} style={{width:"50%"}}>{
                          <ItemDanhSach 
                          
                          item={item}
                             
                      // addCart = {addCart}
                      />
                          }</View>
                     
                  )
              })
          }
             
         
          </View>
          
      </ScrollView>
      </View>
     
  )
  // return (
  //   <View>
  //     <Text>ListProducts</Text>
  //   </View>
  // );
=======

  onRefresh = () => {
    setRefreshing(true)
    loadAllProducts()
  }
  useEffect(() => {
    loadAllProducts()
  }, [isFocused])

  const loadAllProducts = async () => {

    if (id === "luotMuaNhieu") {
      await axios.get(`${GET_DANH_SACH_SAN_PHAM_MEMBER}?id=${id}`).then((res) => {

        if (res && res.data.errCode === 0) {
          //console.log(res.data.products,"OK")
          setArrProducts(res.data.getAllLuotMuaNhieu)
          setRefreshing(false)
        }
      }).catch((error) => { console.log(error) });
    } else if (id === "hotSale") {
      await axios.get(`${GET_DANH_SACH_SAN_PHAM_MEMBER}?id=${id}`).then((res) => {
        if (res && res.data.errCode === 0) {
          console.log(res.data, "OK")
          setArrProducts(res.data.getHotSaleAll)
          setRefreshing(false)
        }
      }).catch((error) => { console.log(error) });
    } else {
      await axios.get(`${GET_DANH_SACH_SAN_PHAM_MEMBER}?id=${id}`).then((res) => {

        if (res && res.data.errCode === 0) {
          setArrProducts(res.data.products)
          setRefreshing(false)


        }
      }).catch((error) => { console.log(error) });
    }

  }

  return (
    <>
      <CustomHeader
        title={'Danh sách sản phẩm'}
      />
      <View style={{ backgroundColor: "#fff", height: "100%" }}>
        <View style={{ backgroundColor: "#000", paddingTop: 6, paddingBottom: 6 }}>
          <Text style={{ fontSize: 20, color: "#fff", textAlign: "center" }}>{name}</Text>
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => { onRefresh() }}
            />
          }>
          <View style={{ flexDirection: "row", flexWrap: "wrap", width: "100%" }}>
            {arrProducts && arrProducts.map((item) => {
              return (
                <View key={item.id} style={{ width: "50%" }}>{
                  <ItemDanhSach

                    item={item}
                  />
                }</View>
              )
            })

            }
          </View>

        </ScrollView>
      </View>
    </>
  );
>>>>>>> 28961474e75842d659a9e1cd3dc475320f28e601
};

export default ListProducts;