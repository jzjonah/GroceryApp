import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import COLORS from '../../constants/Colors';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default function AddMoney({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.info}>
                <View>
                    <Text style={{fontSize:15}}>Wallet Balance</Text>
                    <Text style={{marginTop:5, fontSize:18, fontWeight:'bold'}}>$ 500.00</Text>
                </View>
                <View style={styles.iconContainer}>
                    <IonIcon name="wallet" style={styles.icon}/>
                </View>
            </View>
            <TouchableOpacity 
                style={styles.button}
                onPress={()=> navigation.navigate('addMoney')}
                >
                <Text style={styles.addMoney}>Add Money</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.tertiary,
        margin:20,
        borderRadius:5,
        
    },
    info:{
        flexDirection:'row',
        marginVertical:10,
        marginHorizontal:20,
        justifyContent:'space-between',
        alignItems:'center'
    },
    iconContainer:{
        padding:10,
        backgroundColor:COLORS.primary,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    icon:{
        color:COLORS.secondary,
        fontSize:30
    },
    button:{
        backgroundColor:COLORS.secondary,
        height:50,
        width:'90%',
        borderRadius:15,
        marginBottom:15,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        marginTop:15
    },
    addMoney:{
        color:COLORS.primary,
        fontSize:18,
        fontWeight:'600'
    }

})