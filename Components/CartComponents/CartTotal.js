import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { db } from '../../Firebase/FirebaseConfig';
import { QuerySnapshot, collection, doc, getDocs, setDoc, addDoc } from 'firebase/firestore';
import COLORS from '../../constants/Colors';
import { useSelector, useDispatch } from 'react-redux';
import { restCart } from '../../redux/actions';
import { auth } from '../../Firebase/FirebaseConfig';

export default function CartTotal() {
    const { cost } = useSelector((state) => state.cart.cart);
    const {items} = useSelector((state) => state.cart.cart);
    dispatch = useDispatch();

    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          if (user) {
            setUserEmail(user.email);
          } else {
            setUserEmail(null);
          }
        });
    
        // Cleanup the listener when the component unmounts
        return unsubscribe;
      }, []);

    
    const arrayToObject = (arr) => {
        return arr.reduce((obj, item, index) => {
          obj[`item${index + 1}`] = item;
          return obj;
        }, {});
      };
      const sendDataToFirestore = async () => {
        try {
          const cartObject = arrayToObject(items);
          const docRef = await addDoc(collection(db, 'Orders'), {
            name: userEmail,
            cart: cartObject,
          });
      
          dispatch(restCart());
          alert("order Successfully sent");
        } catch (error) {
          console.error('Error sending data to Firestore:', error);
        }
      };
  
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} onPress={sendDataToFirestore}>
            <View style = {styles.button}>
                <Text style={styles.text}>Place Order | </Text>
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