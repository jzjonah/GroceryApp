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
      width: '100%',
      flexDirection: 'horizontal',
    },
    icon: {
      marginRight: 8,
    },
  });