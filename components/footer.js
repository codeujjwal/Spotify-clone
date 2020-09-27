import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function footer() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.footer_button}>
        <Icon name="home" size={25} color="#ffffff" />
        <Text style={styles.button_text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footer_button}>
        <Icon name="search" size={25} color="#ffffff" />
        <Text style={styles.button_text}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footer_button}>
        <Icon name="bookmark" size={25} color="#ffffff" />
        <Text style={styles.button_text}>Your Library</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footer_button}>
        <Icon name="spotify" size={25} color="#ffffff" />
        <Text style={styles.button_text}>Premium</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2e2f33",

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 10,
    paddingBottom: 10,
    height: 50,
  },
  footer_button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button_text: {
    color: "white",
  },
});

export default footer;
