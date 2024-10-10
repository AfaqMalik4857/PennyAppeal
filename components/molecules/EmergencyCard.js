import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const EmergencyCard = ({ title, image, donors }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDonors}>
        <Image source={require("../../assets/images/twomen.png")} /> {donors}{" "}
        Donors
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.72,
    height: 215,
    marginRight: 20,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  cardImage: {
    width: "100%",
    height: 140,
    borderBottomRightRadius: 30,
  },
  cardTitle: {
    marginTop: 15,
    paddingLeft: 18,
    fontWeight: "bold",
  },
  cardDonors: {
    paddingLeft: 18,
    color: "#808080",
  },
});

export default EmergencyCard;
