import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../common/Header';
import NewsItem from '../common/NewsItem';

const News = () => {
  return (
    <View>
      <Header
        title='News' />
        <NewsItem/>
    </View>
  );
};

export default News;