import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { db } from '../../Firebase/FirebaseConfig';
import { QuerySnapshot, collection, getDocs } from 'firebase/firestore';



export default function Cart({navigation}){
    const name = useSelector(selectUserName);
    const email = useSelector(selectUserEmail);
    
    const dispatch = useDispatch();

    const fetchPost = async () => {
        await getDocs(collection(db, 'Fruits'))
        .then((QuerySnapshot) => {
            const newData = QuerySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
            }));
            setFruits(newData);
        });
    };

    React.useEffect(()=>{
        fetchPost();
    }, [])
    return(
        <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}} >
            
          

        </View>
  );
}