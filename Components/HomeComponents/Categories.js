import * as React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import COLORS from '../../constants/Colors';
import categoriesData from '../../data/CategoriesData';


export default function Categories({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Categories </Text>
                <Text style={{color:COLORS.secondary}} onPress={()=>navigation.navigate('favorites')}>
                    see all
                </Text>
            </View>
            <ScrollView
                horizontal 
                contentContainerStyle={styles.scrollContainer}
                showsHorizontalScrollIndicator={false}    
            >
                {categoriesData.map(categorie=>(
                  <View style={styles.mapContainer} key={categorie.id}>
                    <View style={styles.pictureContainer}>
                        <Image 
                            source={require('../../assets/favicon.png')}
                            style={styles.image}
                        />
                    </View>
                    <Text>{categorie.title}</Text>
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
        backgroundColor:COLORS.tertiary,
        padding:12,
        borderRadius:10,
        marginBottom:10
        
    },
    image:{
        height:50,
        width:50
    }
})