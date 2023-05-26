import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AddMoney from '../../Components/WalletComponents/AddMoney';
import PastPurchases from '../../Components/WalletComponents/PastPurchases';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddMoneyScreen from './AddMoneyScreen';

const Stack = createStackNavigator();
function MainScreen({navigation}){
    return(
        <View style={{backgroundColor:'#F9F9F9', flex:1}}>
            <AddMoney navigation={navigation}/>
            <PastPurchases/>
        </View>
    )
}
export default function Wallet({navigation}){
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name = 'Wallet History'  component={MainScreen}/>
                <Stack.Screen name = 'addMoney' component={AddMoneyScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
        
  );
}