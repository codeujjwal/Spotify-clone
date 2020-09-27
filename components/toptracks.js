import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "../axios/axios";
import { useNavigation } from "@react-navigation/native";

function Toptracks({ fetchUrl }) {
  const [data, setdata] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    let ismounted = true;
    async function search() {
      await axios
        .get(fetchUrl)
        .then((response) => {
          if (ismounted) {
            setdata(response.data.topalbums.album);
          }
        })
        .catch((err) => console.log(err));
    }
    search();
    return () => {
      ismounted = false;
    };
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Tracks</Text>
      <FlatList
        horizontal={true}
        data={data}
        renderItem={({ item }) => {
          let source = item?.image[3][`#text`];
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("player", { item: item })}
              style={styles.detail}
            >
              <Image style={styles.image} source={{ uri: source }} />
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  title: {
    color: "white",
    fontSize: 40,
  },
  container: {
    paddingLeft: 20,
    height: 240,
  },
  image: {
    height: 150,
    width: 150,
    position: "relative",
    zIndex: 100,
  },
  detail: {
    margin: 10,
    width: 170,
  },
});

export default Toptracks;
