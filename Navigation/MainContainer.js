import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import IonIcon from 'react-native-vector-icons/Ionicons';

//Screens
import Cart from './screens/Carts';
import Favorites from './screens/Favorites';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Wallet from './screens/Wallet';

//Screen names
const cartName = 'cart';
const favoritesName = 'favorites';
const homeName = 'home';
const profileName = 'profile';
const walletName = 'wallet';


const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions = {({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if(rn == homeName){
                        iconName = focused ? 'home' : 'home-outline'
                    }else if (rn == cartName){
                        iconName = focused ? 'map' : 'map-outline'
                    } else if (rn == walletName){
                        iconName = focused ? 'person' : 'person-outline'
                    } else if(rn == favoritesName){
                        iconName = focused ? 'add-circle' : 'add-circle-outline'
                    } else if (rn == profileName){
                        iconName = focused ? 'people' : 'people-outline'
                    }

                    return <IonIcon name= {iconName} size={size} color={color}/>
                },

            })} 
            tabBarOption={{
                activeTintColor:'tomato',
                inactiveTintColor:'grey',
                labelStyle: { paddingBottom:10, fontSize:10},
                
            }}
            >

            <Tab.Screen name={homeName} component={Home}/>
            <Tab.Screen name={walletName} component={Wallet}/>
            <Tab.Screen name={favoritesName} component={Favorites}/>
            <Tab.Screen name={cartName} component={Cart}/>
            <Tab.Screen name={profileName} component={Profile}/>
            
            
           

            </Tab.Navigator>
        </NavigationContainer>
    )
}




