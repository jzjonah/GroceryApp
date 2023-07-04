import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { db } from '../../Firebase/FirebaseConfig';
import { QuerySnapshot, collection, getDocs } from 'firebase/firestore';
import COLORS from '../../constants/Colors';
import { useSelector, useDispatch } from 'react-redux';

export default function ItemInCart(){

    const {cart} = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const[items, setItems] = useState([]);
  
    const fetchPost = async () => {
        await getDocs(collection(db, 'Items'))
        .then((QuerySnapshot) => {
            const newData = QuerySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
            }));
            setItems(newData);
        });
        };
    
        React.useEffect(()=>{
            fetchPost();
        }, [])
    
    
    return(
        <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

          {cart.items.map((cartItem) => {
              const matchingItem = items.find((item) => item.id === cartItem.item);
              if (matchingItem) {
                return (
                  <View key={cartItem.item} style={styles.contianer}>
                    <Image source={require("../../assets/favicon.png")} style={styles.image} />
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>{matchingItem.name}</Text>
                        <Text style={styles.price}>${matchingItem.price}</Text>
                    </View>
                  </View>
                );
              }
              return null;
            })}
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contianer:{
        width:'100%',
        height: 90,
        backgroundColor:COLORS.primary,
        marginBottom:5,
        flexDirection:'row'
    },
    image:{
        width:70,
        height:70,
        margin:10
    },
    textContainer:{
        justifyContent:'space-between',
        flexDirection:'row',
        width:'70%'
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:10,
        marginRight:5
    },
    price:{
        fontSize:25,
        fontWeight:'bold',
        alignSelf:'center',
        
    }
})