import { KeyboardAvoidingView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import {useState} from "react";

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = () => {
    auth
    .createUserWithEmailAndPassword(email,password)
    .then(userCredentials => {
      const user =userCredentials.user;
      console.log(user.email)
    })
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.InputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.InputText}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.InputText}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={()=>{}}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{}}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    behavior: "padding"
  },
  InputContainer:{
    width: "80%"
  },
  InputText:{
    backgroundColor:"white",
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:10,
    marginTop:5,
  },
  buttonContainer:{
    width:"60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop:40,
  },
  button:{
    backgroundColor:"#0782F9",
    width: "100%",
    padding:15,
    borderRadius:10,
    alignItems:"center",
  },
  buttonOutline:{
    backgroundColor:"white",
    marginTop:5,
    borderColor:"#0782F9",
    borderWidth:2,
  },
  buttonOutlineText:{
    color:"#0782F9",
    fontWeight:"700",
    fontSize:16,
  },
  buttonText:{
    color:"white",
    fontWeight:"700",
    fontSize:16,
  }

})