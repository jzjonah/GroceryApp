import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import COLORS from '../../constants/Colors';
import { db } from '../../Firebase/FirebaseConfig';
import {collection, getDocs } from 'firebase/firestore';

export default function Categories({navigation}){
    const[categories, setCategories] = useState([]);

    const fetchPost = async () => {
        await getDocs(collection(db, 'Categories'))
        .then((QuerySnapshot) => {
            const newData = QuerySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
            }));
            setCategories(newData);
        });
    };

    React.useEffect(()=>{
        fetchPost();
    }, [])

    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Categories </Text>
                <Text style={{color:COLORS.secondary}} onPress={()=>navigation.navigate('addMoney')}>
                    see all
                </Text>
            </View>
            <ScrollView
                horizontal 
                contentContainerStyle={styles.scrollContainer}
                showsHorizontalScrollIndicator={false}    
            >
                {categories.map(categorie=>(
                  <View style={styles.mapContainer} key={categorie.id}>
                    <View style={styles.pictureContainer}>
                        <Image 
                            source={require('../../assets/cleaning_animated.jpg')}
                            style={styles.image}
                            resizeMode='stretch'
                        />
                    </View>
                    <Text>{categorie.Cat}</Text>
                  </View>  

                    
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        
    },
    titleContainer:{
        marginHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    title:{
        fontSize:18,
        fontWeight:'bold'
    },
    scrollContainer:{
        flexDirection:'row',
        marginTop:20,
        marginLeft:20
    },
    mapContainer:{
        alignItems:'center',
        marginRight:20
    },
    pictureContainer:{
        alignItems:'center',
        
        
        
    },
    image:{
        height:74,
        width:74,
        borderRadius:10,
        backgroundColor:COLORS.tertiary,

        
    }
})