import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import axios from "../axios/axios";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

function playerfooter({ fetchUrl }) {
  const [data, setdata] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    let ismounted = true;
    async function search() {
      await axios
        .get(fetchUrl)
        .then((response) => {
          if (ismounted) {
            setdata(response.data.albums.album);
          }
        })
        .catch((err) => console.log(err));
    }
    search();
    return () => {
      ismounted = false;
    };
  }, []);
  let source = data[2]?.image[3][`#text`];
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: source }} />
      <Text style={styles.text}>{data[2]?.name}</Text>

      <View style={styles.icons}>
        <Icon name="heart-o" size={25} color="#ffffff" />
        <Icon name="pause" size={25} color="#ffffff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2e2f33",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    flex: 1,
    height: 75,
    position: "absolute",
    bottom: 50,
    zIndex: 1,
    borderBottomWidth: 3,
    borderBottomColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    height: "100%",
    width: 75,
  },
  text: {
    color: "white",
    width: 180,
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    width: 100,
    justifyContent: "space-around",
  },
});

export default playerfooter;
