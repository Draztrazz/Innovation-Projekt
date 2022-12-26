import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import * as React from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";


const HomeScreen =() => {
    const navigation = useNavigation()
    const handleSignOut = () =>{
        auth
            .signOut()
            .then(() => {
                navigation.navigate("Login")
                console.log("Signed out")
            })
            .catch(error => alert(error.message))
    }
    return (
        <View style={styles.container}>
            <Text>Email: {auth.currentUser?.email}</Text>
            <TouchableOpacity style={styles.button}
            onPress={handleSignOut}>
                <Text style={styles.butonText}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 20,
    },
    button:{
        backgroundColor:"#0782F9",
        width: "60%",
        padding:15,
        borderRadius:10,
        alignItems:"center",
        marginTop: 40,
    },
    buttonText:{
        color:"white",
        fontWeight:"700",
        fontSize:16,
      }

});