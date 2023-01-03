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
  Dimensions,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../firebase.js";
import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";
import searchData from "../assets/searchData.js";

const SearchComponent = (props) => {
  const [inputText, setinputText] = useState("");
  const searchResult = searchData;
  const navigation = useNavigation();

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.textInputStyle}
        placeholder="Find en gårdbutik"
        value={inputText}
        onChange={setinputText}
      ></TextInput>

      <FlatList
        data={searchResult}
        renderItem={({ item }) => (
          <Pressable style={styles.row} onPress={() => {
            navigation.navigate("allFarms", {contact: item.description})
          }}>
            <Entypo name={"location-pin"} size={30}></Entypo>
            <Text style={styles.searchResultText}>{item.description}</Text>
          </Pressable>
        )}
      ></FlatList>
    </View>
  );
};
export default SearchComponent;

const styles = StyleSheet.create({
  searchContainer: {
    margin: 50,
  },
  textInputStyle: {
    fontSize: 22,
  },
  row: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "ligthgray",
    alignItems: "center",
  },
  searchResultText: {},
});
