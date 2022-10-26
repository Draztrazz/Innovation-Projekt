import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  ImageBackground,
} from "react-native";
import * as React from "react";

function FarmScreen({ prop }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/pexels-tom-swinnen-952632.jpg")}
        resizeMode="contain"
      />

      <View>
        <Text style={styles.text}>Blablabla...</Text>
        <Text style={styles.text}>Adresse: </Text>
        <Text style={styles.text}>Mail: </Text>
        <Text style={styles.text}>Tlf. nr: </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Find vej" style={styles.button} />
        <Button title="Forudbestil" style={styles.button} />
      </View>
    </View>
  );
}
export default FarmScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  text: {
    fontSize: 20,
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
  button: {

  },
});
