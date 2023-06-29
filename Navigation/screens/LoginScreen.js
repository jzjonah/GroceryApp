import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, TextInput} from 'react-native';
import COLORS from '../../constants/Colors';
import {auth} from '../../Firebase/FirebaseConfig.js'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import { useDispatch } from 'react-redux';
import { setEmail } from '../../redux/actions';


export default function LoginScreen({navigation}){

    const[email, setEmailLocal] = useState('');
    const[password, setPassword] = useState('');
    const dispatch = useDispatch();

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                
                navigation.navigate('home')
            }
        })
    })

    const handleSignUp = () => {
        
        createUserWithEmailAndPassword(auth,email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                alert('registered in with' + user.email)
            })
            .catch(error=> alert(error.message))
            setPassword('')
    }
    const handleLogin = () =>{
        dispatch(setEmail(email))
        signInWithEmailAndPassword(auth,email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                
                alert("logged in with" + user.email)
            })
            .catch(error=> alert(error.message))
    }

    return(
        <KeyboardAvoidingView style={styles.container} behavior='padding' >
            <View style={styles.infoContainer}> 
                <TextInput
                    placeholder='Email'
                    value={email}
                    style={styles.input}
                    onChangeText={text=>setEmailLocal(text)}
                />
                <TextInput
                    placeholder='Password'
                    value={password}
                    style={styles.input}
                    onChangeText={text=>setPassword(text)}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>

                </TouchableOpacity>
        

            
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button,styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>

                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    infoContainer:{
        width:'80%'
        
    },
    input:{
        backgroundColor:'white',
        paddingVertical:15,
        paddingHorizontal:10,
        borderRadius:10,
        marginTop: 5
    },
    buttonContainer:{
        width:'65%',
        justifyContent:'center',
        marginTop:40,
        
    },
    button:{
        backgroundColor: COLORS.secondary,
        width:'100%',
        padding:15,
        borderRadius:10,
        alignItems:'center'
    },
    buttonOutline:{
        backgroundColor:COLORS.primary,
        marginTop:5, 
        borderColor:COLORS.secondary,
        borderWidth:2
    },
    buttonText:{
        color:'white',
        fontSize:16,
        fontWeight:'700'
    },
    buttonOutlineText:{
        color:COLORS.secondary,
        fontSize:16,
        fontWeight:'700'
    }
})