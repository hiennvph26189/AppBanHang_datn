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
  return (
    <View>
      <Header
        title='News' />
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
    </View>
  );
};

export default News;