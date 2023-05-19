import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import SearchBar from '../../Components/HomeComponents/SearchBar';
import Categories from '../../Components/HomeComponents/Categories';
import Deals from '../../Components/HomeComponents/Deals';
import Popularitems from '../../Components/HomeComponents/PopularItems';
export default function Home({navigation}){
    return(
        <ScrollView style={{backgroundColor:'#F9F9F9'}}>
            <SearchBar/>
            <Categories navigation={navigation}/>
            <Deals navigation={navigation}/>
            <Popularitems/>

        </ScrollView>
  );
}