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
} from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../firebase.js";

const FarmScreen = ({ route }) => {
  const contactInfo = route.params.contact;

  const [farms, setFarms] = useState([]);
  const ref = db.collection("farms");

  useEffect(() => {
    ref.onSnapshot(async (querySnapshot) => {
      const farms = [];
      querySnapshot.forEach((doc) => {
        const { mail, name, adress, description, phone, products, rating } =
          doc.data();

        let adress1 = [];
        let count = 0;
        for (let i = 0; i < adress.length; i++) {
          const element = adress[i];
          adress1.push(adress[i]);
          if (count == 0) {
            adress1.push(", ");
          } else {
            adress1.push(" ");
          }
          count++;
        }
        JSON.stringify(adress1);

        if (doc.id == contactInfo.id) {
          farms.push({
            id: doc.id,
            name,
            mail,
            adress1,
            description,
            phone,
            products,
            rating,
          });
        }
      });
      setFarms(farms);
    });
  }, []);

  const list = [
    {
      title: "Appointments",
      icon: "av-timer",
    },
    {
      title: "Trips",
      icon: "flight-takeoff",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={farms}
        numColumns={1}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Image
              style={styles.image}
              source={require("../assets/pexels-tom-swinnen-952632.jpg")}
              resizeMode="contain"
            />

            <View>
              <View style={styles.flatlistContainer}>
                <Text style={styles.textName}>{item.name}</Text>
              </View>

              <View style={styles.flatlistContainerDescription}>
                <Text style={styles.text}>{item.description}</Text>
              </View>

              <View style={styles.flatlistContainer}>
                <Text style={styles.text}>Adresse: </Text>
                <Text style={styles.text}>{item.adress1}</Text>
              </View>

              <View style={styles.flatlistContainer}>
                <Text style={styles.text}>Mail: </Text>
                <Text style={styles.text}>{item.mail}</Text>
              </View>

              <View style={styles.flatlistContainer}>
                <Text style={styles.text}>Tlf. nr.: </Text>
                <Text style={styles.text}>{item.phone}</Text>
              </View>
            </View>

            <View style={styles.productContainer}>
              <View>
                <Text style={styles.productTextLabel}>
                  Se hvad du kan forvente at finde...
                </Text>
                <View style={styles.productContainer}>
                  <Image
                    style={styles.productImage}
                    source={require("../assets/pexels-suvan-chowdhury-428301.jpg")}
                  />
                  <Text style={styles.productText}>
                    {item.products[1].name} {item.products[1].price} kr.
                  </Text>
                </View>
                <View style={styles.productContainer}>
                  <Image
                    style={styles.productImage}
                    source={require("../assets/pexels-pixabay-209482.jpg")}
                  />
                  <Text style={styles.productText}>
                    {item.products[2].name} {item.products[2].price} kr.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      ></FlatList>
    </View>
  );
};
export default FarmScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    marginTop: 0,
  },
  textName: {
    fontSize: 32,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    marginBottom: "5%",
  },
  image: {
    height: 276,
    width: "100%",
    top: 0,
    marginBottom: "5%",
  },
  flatlistContainer: {
    flex: 1,
    flexDirection: "row",
    maxHeight: 50,
    marginLeft: 30,
    marginRight: 30,
  },
  flatlistContainerDescription: {
    flex: 1,
    flexDirection: "row",
    maxHeight: 75,
    marginLeft: 30,
    marginRight: 30,
  },
  productTextLabel: {
    fontSize: 18,
    color: "#5b5b5b",
    marginBottom: 15,
  },
  productContainer: {
    position: "relative",
    width: "100%",
    alignItems: "center"
  },
  productImage: {
    height: 150,
    width: 300,
    resizeMode: "cover",
    marginBottom: 15,
    borderRadius: 10,
    justifyContent: "center",
    position: "relative",
    
  },
  productText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    bottom: 20,
    left: 10,
  },
});
