import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Favorites({navigation}){
    return(
        <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}} >
            <Text 
                 onPress={() => navigation.navigate('Home')}
                style={{ fontSize:26, fontWeight: 'bold'}}
            >
                Favorites Screen
            </Text>

        </View>
  );
}