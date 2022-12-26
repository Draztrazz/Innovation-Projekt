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
        let productPrice = [];
        let object = {};
        let count = 1;
        for (let i = 0; i < Object.keys(products).length; i++) {
            productNames.push(products[count].name)
            productPrice.push(products[count].price)
            count++;
            if (productNames.length === Object.keys(products).length) {
                break;
              }
        }
        console.log("The final list is", productNames);
        console.log("The final list is", productPrice);

        farms.push({
          id: doc.id,
          name,
          products,
          productNames,
          productPrice,
        });
      });
      //console.log(farms)
      //console.log(farms[0].products[1].name)
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
            <Text style={styles.text}>Produkt: {item.productNames[0]} - Pris: {item.productPrice[0]}</Text>
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
