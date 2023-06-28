import * as React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import COLORS from '../../constants/Colors';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default function Option({ icon, name }) {
    return (
      <View style={styles.container}>
        <IonIcon name={icon} style={styles.icon} />
        <Text>{name}</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      width: '90%',
      height:55,
      flexDirection:'row',
      alignItems:'center',
      marginHorizontal:15,
      borderTopWidth:1
  
    
    },
    icon: {
      marginRight: 8,
      fontSize:35
    },
  });