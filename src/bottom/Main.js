import { View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../common/Header';
import { products } from '../common/Product';
import MyProductItem from '../common/MyProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../redux/actions/Actions';

const Main = () => {
  const dispatch = useDispatch();
  const [categoryList, setCategoryList] = useState([]);
  const [tShirtList, setTshirtList] = useState([]);
  const [jeansList, setJeanList] = useState([]);
  const [shoesList, setShoesList] = useState([]);
  const [jackList, setJackList] = useState([]);
  const [slipperList, setSlipperList] = useState([]);

  useEffect(() => {
    console.log(products);
    let tempCategory = [];
    products.category.map(item => {
      tempCategory.push(item);
    });
    setCategoryList(tempCategory);
    setTshirtList(products.category[0].data);
    setJeanList(products.category[1].data);
    setShoesList(products.category[2].data);
    setJackList(products.category[3].data);
    setSlipperList(products.category[4].data);
  }, []);

  // const items = useSelector(state => state);
  // console.log(items);
  return (
    // <ScrollView style={{ flex: 1 }}>
    //   <View style={{ marginTop: 15, flex: 1 }}>
    //     <Header />
    //     <Image
    //       source={require('../images/banner.png')}
    //       style={{ width: '90%', height: 200, borderRadius: 10, alignSelf: 'center', marginTop: 10, }}
    //     />
    //     <View style={{ marginTop: 10 }}>
    //       <FlatList
    //         data={categoryList}
    //         horizontal
    //         showsHorizontalScrollIndicator={false}
    //         renderItem={({ item, index }) => {
    //           return (
    //             <TouchableOpacity
    //               style={{
    //                 padding: 10,
    //                 borderWidth: 1,
    //                 marginLeft: 15,
    //                 borderRadius: 20,
    //               }}>
    //               <Text style={{ color: '#000' }}>{item.category}</Text>
    //             </TouchableOpacity>
    //           );
    //         }} />
    //     </View>
    //     <View style={{ marginTop: 10, marginBottom: 60 }}>
    //       <FlatList
    //         data={categoryList}
    //         renderItem={({ item, index }) => {
    //           return (
    //             <View>
    //               <Text
    //                 style={{
    //                   marginHorizontal: 10,
    //                   marginVertical: 8,
    //                   fontSize: 16,
    //                   color: 'black',
    //                   fontWeight: 'bold'
    //                 }}>{item.category}</Text>
    //               <FlatList
    //                 data={categoryList[index].data}
    //                 horizontal
    //                 showsHorizontalScrollIndicator={false}
    //                 renderItem={({ item, index }) => {
    //                   return <MyProductItem item={item} />
    //                 }}
    //               />
    //             </View>
    //           );
    //         }}
    //       />
    //     </View>
    //   </View>
    // </ScrollView>
    <FlatList
      style={{ flex: 1 }}
      ListHeaderComponent={() => (
        <View style={{ marginTop: 15 }}>
          <Header title={'Vemouse'}/>
          <Image
            source={require('../images/banner.png')}
            style={{
              width: '90%',
              height: 200,
              borderRadius: 10,
              alignSelf: 'center',
              marginTop: 10,
            }}
          />
          <View style={{ marginTop: 10 }}>
            <FlatList
              data={categoryList}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    style={{
                      padding: 10,
                      borderWidth: 1,
                      marginLeft: 15,
                      borderRadius: 20,
                    }}
                  >
                    <Text style={{ color: '#000' }}>{item.category}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      )}
      data={categoryList}
      renderItem={({ item, index }) => {
        return (
          <View>
            <Text
              style={{
                marginHorizontal: 10,
                marginVertical: 8,
                fontSize: 16,
                color: 'black',
                fontWeight: 'bold',
              }}
            >
              {item.category}
            </Text>
            <FlatList
              data={categoryList[index].data}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <MyProductItem 
                item={item} 
                onAddToCart={add =>{
                  dispatch(addItemToCart(item));
                }}/>
                );
              }}
            />
          </View>
        );
      }}
    />
  )
}

export default Main;