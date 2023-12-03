<<<<<<< HEAD
import { View, Text, ScrollView } from 'react-native'
import React, {useEffect,useState} from 'react'
import Header from '../common/Header';
import NewsItem from '../common/NewsItem';
import { GET_ALL_NEWS, } from "../../API";
import axios from "axios";


const News = () => {
  const [arrNews, setArrNews] = useState([])

  const getAllNew = () => {
    axios.get(GET_ALL_NEWS).then((res) => {

      if (res.data.errCode === 0) {
        setArrNews(res.data.news)
      }
    }).catch((err) => { console.log(err) })
  }
  useEffect(() => {
    getAllNew()
  }, [])
=======
import { View, Text, ScrollView, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../common/Header';
import NewsItem from '../common/NewsItem';
import axios from 'axios';
import { GET_ALL_NEWS } from '../../API';
import { useIsFocused } from '@react-navigation/native';

const News = (props) => {

  const [listNews, setListNews] = useState([]);
  const [refreshing, setRefeshing] = useState(false);
  const isFocused = useIsFocused();
  const getAllNews = async () => {
    axios.get(GET_ALL_NEWS).then((res) => {

      if (res.data.errCode === 0) {
        setListNews(res.data.news)
        setRefeshing(false)
      }
    }).catch((err) => { console.log(err) })
  }
  useEffect(() => {
    getAllNews();
  }, [isFocused])

  const onRefresh = () => {
    setRefeshing(true);
    getAllNews();
  }

>>>>>>> 28961474e75842d659a9e1cd3dc475320f28e601
  return (
    <View>
      <Header
        title='News' />
<<<<<<< HEAD
      <ScrollView>
        {arrNews.map((item) => {
          return (<NewsItem
            key={item.id}
            arrNews={item}
          />
          )
        })}

      </ScrollView>
      {/* <NewsItem/> */}
=======

      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => { onRefresh() }}
          />
        }
      >
        {listNews && listNews.map((item) => {
          return (
            <NewsItem key={item.id}
              listNews={item}
            />
          )

        })}
      </ScrollView>
>>>>>>> 28961474e75842d659a9e1cd3dc475320f28e601
    </View>
  );
};

export default News;