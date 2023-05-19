import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Cart({navigation}){
    return(
        <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}} >
            <Text 
                 onPress={() => navigation.navigate('Home')}
                style={{ fontSize:26, fontWeight: 'bold'}}
            >
                Cart Screen
            </Text>

        </View>
  );
}