import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ProfileHeader from '../../Components/ProfileComponents/ProfileHeader';
import ProfileOptions from '../../Components/ProfileComponents/ProfileOptions';


export default function Profile({navigation}){
    return(
        <View style={{backgroundColor:'#F9F9F9', flex:1}} >
            <ProfileHeader navigation={navigation}/>
            <ProfileOptions/>

        </View>
  );
}