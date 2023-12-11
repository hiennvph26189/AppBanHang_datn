import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { GET_ALL_LIKE_PRODUCTS_MEMBER } from '../../API'
import CustomHeader from './CustomHeader'
import { useIsFocused } from '@react-navigation/native'
import ItemLike from './ItemLike'

const ListLikeProducts = (props) => {

    const [listLike, setListLikeProduct] = useState('');
    const isFocused = useIsFocused();

    const getAllLikeProduct = async()=>{
        await axios.get(`${GET_ALL_LIKE_PRODUCTS_MEMBER}?id_members=${info.id}`).then((res) => {
            if (res && res.data.errCode === 0) {
                setListLikeProduct(res.data.listLikePrd);
            }
          }).catch((error) => { console.log(error) });
    }

    useEffect(()=>{
      getAllLikeProduct()

    },[isFocused])
    const lodaData = () => {
      console.log('ok');
      getAllLikeProduct()
    }
  return (
   <>
   <CustomHeader 
   title={'Danh sách sản phẩm yêu thích'}/>
    {/* {listLike && listLike.map((item) => {
          return (
            <ItemLike
              key={item.id}
              item={item}

            />
          )
        })} */}
   </>
  )
}

export default ListLikeProducts