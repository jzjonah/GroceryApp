import * as React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import COLORS from '../../constants/Colors';

export default function Deals(navigation){
    return(
    <View style={styles.container}>
         <View style={styles.titleContainer}>
            <Text style={styles.title}>Deals </Text>
            <Text style={{color:COLORS.secondary}} onPress={()=>navigation.navigate('favorites')}>
                    see all
                </Text>
        </View>
        <View style={styles.boxContainer}>
            <View style={styles.boxText}>
                <Text style={styles.offText}>50% OFF</Text>
                <Text style={styles.comboText}>On Groery Combo packs</Text>
                <TouchableOpacity style={styles.orderButton}>
                    <Text style={styles.buttonText}>Order now</Text>
                </TouchableOpacity>
            </View>
            <Image
                source={require('../../assets/favicon.png')}
                style={styles.image}
            />

        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop:10
    },
    titleContainer:{
        margin:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    title:{
        fontSize:18,
        fontWeight:'bold'
    },
    boxContainer:{
        backgroundColor:COLORS.tertiary,
        flexDirection:'row',
        marginHorizontal:20,
        borderRadius:10,
        alignItems:'center',
        justifyContent:"space-between"
    },
    boxText:{
        marginLeft:20,
        marginVertical:30

    },
    offText:{
        fontSize:20,
        fontWeight:'bold'
    },
    comboText:{
        marginTop:10,
        fontSize:15,
        color:'gray'
    },
    orderButton:{
        backgroundColor:COLORS.secondary,
        marginTop:20,
        height:40,
        width:110,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8
    },
    buttonText:{
        color:'white',
        fontWeight:'bold'
    },
    image:{
        height:90,
        width:90,
        marginRight:30
    }
})