import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

const Header = () => {
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
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    marginTop: 5,
    fontSize: 20,
    color: "#FFF",
  },
  greeting: {
    fontWeight: "900",
  },
  searchButton: {
    padding: 10,
    marginLeft: 2,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginTop: 10,
  },
});

export default Header;
