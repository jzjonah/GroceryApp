import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IonIcon from 'react-native-vector-icons/Ionicons';

//Screens
import Cart from './screens/Carts';
import Favorites from './screens/Favorites';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Wallet from './screens/Wallet';
import AddMoney from './screens/AddMoneyScreen';
import LoginScreen from './screens/LoginScreen';

//Screen names
const cartName = 'cart';
const favoritesName = 'favorites';
const homeName = 'home';
const profileName = 'profile';
const walletName = 'wallet';
const addMoneyName = 'addMoney';
const loginName = 'login'


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
                        iconName = focused ? 'cart' : 'cart-outline'
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
            <Tab.Screen name={walletName} component={Wallet} options={{ headerShown: false }}/>
            <Tab.Screen name={favoritesName} component={Favorites}/>
            <Tab.Screen name={cartName} component={Cart}/>
            <Tab.Screen name={profileName} component={Profile}/>
            
            <Tab.Screen
                name={addMoneyName}
                options={{tabBarButton: () => null, tabBarVisible: false}}
            >
                {()=> (
                    <Stack.Navigator>
                        <Stack.Screen name={addMoneyName} component={AddMoney} options={{headerShown:false}} />
                        
                    </Stack.Navigator>
                )}
            </Tab.Screen>

            <Tab.Screen
                name={loginName}
                options={{tabBarButton: () => null, tabBarVisible: false}}
            >
                {()=> (
                    <Stack.Navigator>
                        <Stack.Screen name={loginName} component={LoginScreen} options={{headerShown:false}} />
                        
                    </Stack.Navigator>
                )}
            </Tab.Screen>
            </Tab.Navigator> 
        </NavigationContainer>
    );
}




