import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { db } from '../../Firebase/FirebaseConfig';
import { QuerySnapshot, collection, getDocs } from 'firebase/firestore';
import COLORS from '../../constants/Colors';
import { useSelector, useDispatch } from 'react-redux';

export default function CartTotal() {
    const { cost } = useSelector((state) => state.cart.cart);
    
  
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}}>
            <View style = {styles.button}>
                <Text style={styles.text}>Procced To Checkout | </Text>
                <Text style={styles.text}>${String(cost)} Total</Text>
            </View>
        </TouchableOpacity>
        
      </View>
    );
  }
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:70,
        backgroundColor:COLORS.primary
    },
    button:{
        backgroundColor:COLORS.secondary,
        width:"95%",
        height:55,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginTop:8
    },
    text:{
        fontSize:20,
        color:'white',
        fontWeight:'bold'
    }
})