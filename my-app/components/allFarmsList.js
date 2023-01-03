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
import { useNavigation } from "@react-navigation/native";

const FarmScreen = ({ route }) => {
  const contact = route.params.contact;
  const [farms, setFarms] = useState([]);
  const ref = db.collection("farms");
  const navigation = useNavigation()

  useEffect(() => {
    ref.onSnapshot(async (querySnapshot) => {
      const farms = [];
      querySnapshot.forEach((doc) => {
        const { name, adress, rating } = doc.data();

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

        if (contact != "none"){
          const contact2 = contact.split(" ");

          if (adress[2] === contact2[1]){
            farms.push({
              id: doc.id,
              name,
              adress1,
              rating,
            });
          };
        } else {
          farms.push({
            id: doc.id,
            name,
            adress1,
            rating,
          });
        }
      });
      setFarms(farms);
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={farms}
        numColumns={1}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable style={styles.flatlistContainer} onPress={() => { 
            navigation.push("oneFarm", {contact: item})
        }}>
            <Image
              style={styles.image}
              source={require("../assets/pexels-tom-swinnen-952632.jpg")}
            />
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text>
                <Text style={styles.rating}>Score: </Text>
                <Text style={styles.score}>{item.rating.score} </Text>
                <Text style={styles.rating}>
                  ({item.rating.numberOfRatings} reviews)
                </Text>
              </Text>
              <Text style={styles.adress}>{item.adress1}</Text>
            </View>
          </Pressable>
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
    paddingTop: 50,
  },
  flatlistContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 50,
  },
  image: {
    height: 275,
    width: "100%",
    resizeMode: "cover",
    marginBottom: 15,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    marginVertical: 8,
  },
  rating: {
    fontSize: 14,
    color: "#5b5b5b",
    marginVertical: 2,
  },
  score: {
    fontSize: 14,
    color: "#5b5b5b",
    marginVertical: 2,
    fontWeight: "bold",
  },

  adress: {
    fontSize: 14,
    marginVertical: 2,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  flatlistContainerDescription: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    maxHeight: 75,
  },
});
