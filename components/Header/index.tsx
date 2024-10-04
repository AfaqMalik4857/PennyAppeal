import React from "react";
import { View, Image, Text, TouchableOpacity, Dimensions } from "react-native";
import styles from "./styles";

const { width } = Dimensions.get("window");

export default function index() {
  return (
    <View style={styles.header}>
      <Image source={require("../../assets/images/vector.png")} />
      <View style={styles.row}>
        <Text style={styles.userName}>
          <Text style={styles.greeting}>Salam,</Text>
          <Text> Ahmed</Text>
        </Text>
        <TouchableOpacity style={styles.searchButton}>
          <Image
            source={require("../../assets/images/ic_search.png")}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
