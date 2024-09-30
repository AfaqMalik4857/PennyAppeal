import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function index() {
  return (
    <View style={styles.header}>
      <Image source={require("../../assets/images/vector.png")} />
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.userName}>
          <Text style={{ fontWeight: "900" }}>Salam,</Text>
          <Text> Ahmed</Text>{" "}
        </Text>
        <TouchableOpacity style={styles.searchButton}>
          <Image source={require("../../assets/images/ic_search.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
