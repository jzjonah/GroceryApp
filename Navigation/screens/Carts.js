import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { db } from '../../Firebase/FirebaseConfig';
import { QuerySnapshot, collection, getDocs } from 'firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';
import ItemInCart from '../../Components/CartComponents/ItemInCart';
import CartTotal from '../../Components/CartComponents/CartTotal';


export default function Cart({ navigation }) {
  
  return (
    <View style={{flex:1, justifyContent:'space-between'}}>
      <ItemInCart/>
      <CartTotal/>
    </View>
  );
}