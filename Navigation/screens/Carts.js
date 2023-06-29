import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { db } from '../../Firebase/FirebaseConfig';
import { QuerySnapshot, collection, getDocs } from 'firebase/firestore';
import {  useDispatch, useSelector } from 'react-redux';
import {setName, } from '../../redux/actions.js'


export default function Cart({navigation}){
    const { name,email } = useSelector((state) => state);
    
    const dispatch = useDispatch();

    const handleTextInputSubmit = (event) => {
        const enteredText = event.nativeEvent.text; // Get the entered text from the event object
        dispatch(setName(enteredText));
      };
    return(
        <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}} >
            
            <TextInput
                    placeholder='Password'
                    
                    style={styles.input}
                    onSubmitEditing={handleTextInputSubmit}
                    
                />
            <Text>{name}</Text>
            <Text>{email}</Text>
            

        </View>
  );
}

const styles = StyleSheet.create({
    input:{
        backgroundColor:'white',
        paddingVertical:15,
        paddingHorizontal:10,
        borderRadius:10,
        marginTop: 5
    },
})