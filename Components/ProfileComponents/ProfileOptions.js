import * as React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import COLORS from '../../constants/Colors';
import categoriesData from '../../data/CategoriesData';
import Option from './Option';

export default function ProfileOptions() {
    return (
      <View style={styles.container}>
        <Option icon={'cart-outline'} name="My order" />
      </View>
    );
  }

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%'
    }
})