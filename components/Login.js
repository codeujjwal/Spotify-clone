import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";

function Login({ navigation }) {
  return (
    <>
      <View style={styles.cont}>
        <LinearGradient
          colors={["gray", "black"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: 1000,
          }}
        />
        <View style={styles.top}>
          <Image
            style={styles.logo}
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1200px-Spotify_logo_without_text.svg.png",
            }}
          />
          <Text style={styles.text}>Spotify</Text>
        </View>
        <View style={styles.mid}>
          <Text style={styles.heading}>Millions Of Songs.</Text>
          <Text style={styles.heading}>Free On Spotify.</Text>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity
            onPress={() => navigation.navigate("home")}
            style={styles.number}
          >
            <Icon name="phone" size={30} color="#000" />
            <Text style={styles.button_text}>Phone Number</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("home")}
            style={styles.fb}
          >
            <Icon name="facebook" size={30} color="#000" />
            <Text style={styles.button_text}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("home")}
            style={styles.mail}
          >
            <Icon name="envelope-square" size={30} color="white" />
            <Text style={styles.button_text}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    marginLeft: 10,
    fontSize: 30,
  },
  cont: {
    display: "flex",
    flex: 1,
    padding: 80,
  },
  logo: {
    height: 50,
    width: 50,
  },
  top: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  mid: {
    position: "absolute",
    marginTop: 430,
    width: 500,
    marginLeft: 30,
  },
  bottom: {
    position: "absolute",
    bottom: 0,
    height: 360,
    padding: 50,
    display: "flex",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 50,
    color: "white",
    fontWeight: "900",
  },
  number: {
    display: "flex",
    width: 330,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2CD15B",
    borderRadius: 30,
    padding: 6,
  },
  fb: {
    display: "flex",
    width: 330,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    padding: 2,
    borderColor: "white",
    borderWidth: 5,
  },
  mail: {
    width: 330,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 30,
    padding: 6,
  },
  button_text: {
    color: "white",
    fontSize: 40,
    marginLeft: 30,
  },
});

export default Login;
