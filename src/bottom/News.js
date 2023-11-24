import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../common/Header';
import NewsItem from '../common/NewsItem';
import axios from 'axios';
import { GET_ALL_NEWS } from '../../API';

const News = (props) => {

  const [listNews, setListNews] = useState([]);

  const getAllNews = async () => {
    axios.get(GET_ALL_NEWS).then((res) => {

      if (res.data.errCode === 0) {
        setListNews(res.data.news)
      }
    }).catch((err) => { console.log(err) })
  }
  useEffect(() => {
    getAllNews();
  }, [])

  return (
    <View>
      <Header
        title='News' />
        
      <ScrollView>
        {listNews && listNews.map((item) => {
          return (
            <NewsItem key={item.id}
              listNews={item}
            />
          )

        })}
      </ScrollView>
    </View>
  );
};

export default News;