import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../firebase.js";

const FarmProductScreen = () => {
  const [farms, setFarms] = useState([]);
  const ref = db.collection("farms");

  useEffect(() => {
    ref.onSnapshot(async (querySnapshot) => {
      const farms = [];
      querySnapshot.forEach((doc) => {
        const { name, products } = doc.data();

        let productNames = [];
        let object = {};
        let count = 1;
        for (let i = 0; i < Object.keys(products).length; i++) {
          for (let j = 0; j < Object.entries(products[count]).length; j++) {
            if (Object.entries(products[count])[j][0] === "name") {
                
              let value = Object.entries(products[count])[j][1];

              productNames.push(value);
              count++;
            }
            if (productNames.length === Object.keys(products).length) {
              break;
            }
          }
        }

        //console.log("The final list is", productNames);

        farms.push({
          id: doc.id,
          name,
          productNames,
        });
      });
      setFarms(farms);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flatlistContainer}>
        <Text style={styles.text}>All product for </Text>
        <FlatList
          data={farms}
          numColumns={1}
          renderItem={({ item }) => (
            <Text style={styles.text}>{item.name}</Text>
          )}
        ></FlatList>
      </View>

      <View style={styles.flatlistContainer}>
        <FlatList
          data={farms}
          numColumns={1}
          renderItem={({ item }) => (
            <Text style={styles.text}>{item.productNames}</Text>
          )}
        ></FlatList>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Betalt med MobilePay" style={styles.button} />
      </View>
    </SafeAreaView>
  );
};
export default FarmProductScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    marginTop: 0,
  },
  text: {
    fontSize: 18,
    marginBottom: "5%",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    maxHeight: 50,
  },
  flatlistContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    maxHeight: 50,
  },
  flatlistContainerDescription: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    maxHeight: 75,
  },
});
