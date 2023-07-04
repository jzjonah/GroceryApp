import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, ScrollView, Image, TouchableWithoutFeedback} from 'react-native';
import COLORS from '../../constants/Colors';
import { db } from '../../Firebase/FirebaseConfig';
import {collection, getDocs } from 'firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { addToCart, increaseCounter, addToTotal } from '../../redux/actions';


export default function Popularitems(){
    const[items, setItems] = useState([]);
    dispatch = useDispatch();

    const {idNum} = useSelector((state) => state.cart);

    const handleAddToCart = (name, id, price) => () => {
        dispatch(addToCart(name,id));
        dispatch(increaseCounter());
        dispatch(addToTotal(price))
        
      };
      
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
        <View style={styles.container}>
             <View style={styles.titleContainer}>
                <Text style={styles.title}>Popular Items </Text>
                <Text style={{color:COLORS.secondary}} onPress={()=>navigation.navigate('favorites')}>
                    see all
                </Text>
            </View>
            <ScrollView
                horizontal 
                contentContainerStyle={styles.scrollContainer}
                showsHorizontalScrollIndicator={false}    
            >
                {items.map(item=>(
                  <View style={styles.mapContainer} key={item.id}>
                    <View style={styles.pictureContainer}>
                        <Image 
                            source={require('../../assets/favicon.png')}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.infoContainer}>
                        <View>
                            <Text> {item.name}</Text>
                            <Text> ${item.price}</Text>
                        </View>
                        <View style={styles.filterButton}>
                            <TouchableWithoutFeedback>
                                <IonIcon onPress={handleAddToCart(item.id, idNum, parseInt(item.price,10))} name="add" style={styles.option}/>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                  </View>  

                    
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:20
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
        marginRight:20,
        backgroundColor:'white',
        height:170,
        width:160
    },
    pictureContainer:{
        alignItems:'center',
        padding:16,
        marginBottom:10,
        borderBottomWidth:2,
        borderBottomColor:"#F4F4F4"
        
    },
    image:{
        height:80,
        width:80
    },
    infoContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:160
    },
    filterButton:{
        backgroundColor:COLORS.secondary,
        alignItems:'center',
        justifyContent:'center',
        width: 40,
        height: 40,
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5
        
        
    },
    option:{
        fontSize: 30,
        backgroundColor:COLORS.secondary,
        color:COLORS.primary
    }
})