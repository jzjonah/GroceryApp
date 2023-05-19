import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AddMoney from '../../Components/WalletComponents/AddMoney';

export default function Wallet({navigation}){
    return(
        <View style={{backgroundColor:'#F9F9F9', flex:1}}>
            <AddMoney/>
        </View>
  );
}