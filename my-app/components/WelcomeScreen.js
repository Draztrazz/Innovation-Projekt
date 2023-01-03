import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  ImageBackground,
  FlatList,
  Pressable,
  Dimensions
} from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../firebase.js";
import Fontisto from "react-native-vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";

const FarmScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Search')}
      >
        <Fontisto name="search" size={25} color={"ligthgray"}></Fontisto>
        <Text style={styles.searchButtonText}>Søg på gårdbutikker</Text>
      </Pressable>

      <ImageBackground
        style={styles.image}
        source={require("../assets/pexels-tabitha-mort-693857.jpg")}
      >
        <Text style={styles.titleText1}>Gård</Text>
        <Text style={styles.titleText2}>Butikken</Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('allFarms', {contact: "none"})}>
          <Text style={styles.buttonText}>Find gårdbutikker i nærheden!</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};
export default FarmScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  image: {
    height: 900,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  titleText1: {
    fontSize: "70",
    color: "white",
    fontWeight: "bold",
    width: "40%",
    marginLeft: 23,
  },
  titleText2: {
    fontSize: "70",
    color: "white",
    fontWeight: "bold",
    width: "70%",
    marginLeft: 23,
  },
  button: {
    backgroundColor: "white",
    width: 220,
    height: 60,
    borderRadius: 40,
    marginLeft: 23,
    marginTop: 25,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    width: 160,
    fontSize: "18",
    fontWeight: "bold",
  },
  searchButton: {
    backgroundColor: "white",
    width: Dimensions.get('screen').width - 40,
    marginHorizontal: 20,
    height: 60,
    borderRadius: 40,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    top: 50,
    zIndex: 100,
  },
  searchButtonText: {
    fontSize: "18",
    fontWeight: "bold",
  },
});
