import * as React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import COLORS from '../../constants/Colors';
import categoriesData from '../../data/CategoriesData';

export default function ProfileHeader(){
    return(
        <View style={styles.container}>
            <Image
                source={require('../../assets/favicon.png')}
                style={styles.image}
            />
            <Text style={styles.user}>Jonah Zimmer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'50%'
    },
    image:{
        width:150,
        height:150,
        borderRadius:75
    },
    user:{
        marginTop:15,
        fontSize:25,
        fontWeight:'bold'
    }
})