import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
function Player({ route }) {
  const { item } = route.params;
  let source = item.image[3][`#text`];
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
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
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 50,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("home")}>
          <Icon name="angle-down" size={30} color="#ffffff" />
        </TouchableOpacity>
        <Icon name="ellipsis-v" size={30} color="#ffffff" />
      </View>
      <View>
        <Image
          style={{ height: 370, width: 370, marginBottom: 50 }}
          source={{ uri: source }}
        />
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 40,
            fontFamily: "Roboto",
          }}
        >
          {item.name}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          height: 2,
          width: "95%",
          marginTop: 40,
        }}
      ></View>
      <View
        style={{
          marginTop: 10,
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "white" }}>0:00</Text>
        <Text style={{ color: "white" }}>3:45</Text>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 100,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
          height: 100,
        }}
      >
        <Icon name="heart-o" size={25} color="#ffffff" />
        <Icon name="step-backward" size={40} color="#ffffff" />
        <Icon name="play-circle" size={70} color="#ffffff" />
        <Icon name="step-forward" size={40} color="#ffffff" />
        <Icon name="minus-circle" size={25} color="#ffffff" />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 20,
          display: "flex",
          height: 50,
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Icon name="building-o" size={20} color="#ffffff" />
        <Icon name="list-ul" size={20} color="#ffffff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
  },
});

export default Player;
