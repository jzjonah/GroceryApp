import * as React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../constants/Colors';

export default function SearchBar(){
    return(
        <View style={styles.container}>
            <IonIcon name="search-outline" style={styles.icon}></IonIcon>
            <Text style={styles.text}>Search food, drink, etc</Text>
            <View style={styles.filterButton}>
                <TouchableWithoutFeedback>
                    <IonIcon name="options" style={styles.option}/>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin:20,
        backgroundColor:COLORS.primary,
        height:50,
        borderRadius:15,
        alignItems:'center',
        flexDirection:"row",
        justifyContent:'space-between'
    },
    icon:{
        fontSize:30,
        marginLeft:10
        
    },
    text:{
        color:'gray',
        fontSize:18,
        marginRight:70,
    },
    filterButton:{
        backgroundColor:COLORS.secondary,
        alignItems:'center',
        justifyContent:'center',
        width: 50,
        height: 50,
        borderTopRightRadius:10,
        borderBottomRightRadius:10
        
        
    },
    option:{
        fontSize: 30,
        backgroundColor:COLORS.secondary,
        color:COLORS.primary
    }
})