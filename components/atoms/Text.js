import React from "react";
import { Text, StyleSheet } from "react-native";

const CustomText = ({ children, style }) => (
  <Text style={[styles.text, style]}>{children}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: "#5A606D",
  },
});

export default CustomText;
