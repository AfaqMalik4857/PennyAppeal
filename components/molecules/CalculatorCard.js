import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import CustomImage from "../atoms/Image";
import CustomText from "../atoms/Text";
const { width } = Dimensions.get("window");

const CalculatorCard = ({ label, icon }) => (
  <View style={styles.calculatorCard}>
    <CustomImage source={icon} style={styles.calculatorIcon} />
    <CustomText style={styles.calculatorText}>{label}</CustomText>
  </View>
);

const styles = StyleSheet.create({
  calculatorCard: {
    width: width * 0.26,
    height: 105,
    marginRight: 15,
    backgroundColor: "#FFF",
    borderRadius: 15,
    overflow: "hidden",
    alignSelf: "center",
    alignItems: "center",
  },
  calculatorText: {
    color: "#5A606D",
    marginTop: 8,
    alignSelf: "center",
    fontWeight: "bold",
  },
  calculatorIcon: {
    width: 50,
    height: 50,
    marginTop: 10,
    alignSelf: "center",
  },
});

export default CalculatorCard;
