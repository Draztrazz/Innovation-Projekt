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

const FarmScreen = () => {
  const [farms, setFarms] = useState([]);
  const ref = db.collection("farms");

  useEffect(() => {
    ref.onSnapshot(async (querySnapshot) => {
      const farms = [];
      querySnapshot.forEach((doc) => {
        const { mail, name, adress, description, phone} = doc.data();

        let adress1 = [];
        let count = 0
        for (let i = 0; i < adress.length; i++) {
            const element = adress[i];
            adress1.push(adress[i]);
            if (count == 0) {
                adress1.push(", ");
            } else {
                adress1.push(" ");
            }
            count++
        }
        JSON.stringify(adress1);
    
        farms.push({
          id: doc.id,
          name,
          mail,
          adress1, 
          description, 
          phone
        });
      });
      setFarms(farms);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/pexels-tom-swinnen-952632.jpg")}
        resizeMode="contain"
      />

      <View>
        <View style={styles.flatlistContainer}>
          <FlatList
            data={farms}
            numColumns={1}
            renderItem={({ item }) => (
              <Text style={styles.text}>{item.name}</Text>
            )}
          ></FlatList>
        </View>
        
        <View style={styles.flatlistContainerDescription}>
          <FlatList
            data={farms}
            numColumns={1}
            renderItem={({ item }) => (
              <Text style={styles.text}>{item.description}</Text>
            )}
          ></FlatList>
        </View>

        <View style={styles.flatlistContainer}>
          <Text style={styles.text}>Adresse: </Text>
          <FlatList
            data={farms}
            numColumns={1}
            renderItem={({ item }) => (
              <Text style={styles.text}>{item.adress1}</Text>
            )}
          ></FlatList>
        </View>

        <View style={styles.flatlistContainer}>
          <Text style={styles.text}>Mail: </Text>
          <FlatList
            data={farms}
            numColumns={1}
            renderItem={({ item }) => (
              <Text style={styles.text}>{item.mail}</Text>
            )}
          ></FlatList>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
            maxHeight: 50,
          }}
        >
          <Text style={styles.text}>Tlf. nr.: </Text>
          <FlatList
            data={farms}
            numColumns={1}
            renderItem={({ item }) => (
              <Text style={styles.text}>{item.phone}</Text>
            )}
          ></FlatList>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Find vej" style={styles.button} />
        <Button title="Forudbestil" style={styles.button} />
      </View>
    </View>
  );
};
export default FarmScreen;

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
  image: {
    height: 276,
    width: "100%",
    top: 0,
    marginBottom: "5%",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
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
  }
});
