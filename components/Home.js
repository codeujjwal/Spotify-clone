import React from "react";
import { View, StyleSheet } from "react-native";
import requests from "../axios/requests";
import Topalbums from "./topalbums";
import Toptracks from "./toptracks";
import Footer from "./footer";
import Playerfooter from "./playerfooter";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

function Home() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["gray", "black"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 700,
        }}
      />
      <ScrollView style={styles.scroll}>
        <Topalbums fetchUrl={requests.topAlbums} />
        <Toptracks fetchUrl={requests.topTracks} />
        <Topalbums second fetchUrl={requests.topAlbums} />
      </ScrollView>
      <Playerfooter style={styles.Playerfooter} fetchUrl={requests.topAlbums} />
      <Footer style={styles.Footer} />
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  container: {
    display: "flex",
    flex: 1,
  },
  scroll: { marginTop: 50, marginBottom: 80 },
});

export default Home;
