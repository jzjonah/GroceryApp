import * as React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import COLORS from '../../constants/Colors';
import categoriesData from '../../data/CategoriesData';
import Option from './Option';

export default function ProfileOptions() {
    return (
      <View style={styles.container}>
        <Option icon={'person-outline'} name="Sign In" />
        <Option icon={'cart-outline'} name="My order" />
        <Option icon={'information-circle-outline'} name="Account info" />
        <Option icon={'lock-closed-outline'} name="Change Password" />
        <Option icon={'language-outline'} name="Change Languager" />
        <Option icon={'return-down-back-outline'} name="Sign Out" />
      </View>
    );
  }

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%'
    }
})