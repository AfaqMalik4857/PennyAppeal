import React from "react";
import { Image, StyleSheet } from "react-native";

const CustomImage = ({ source, style }) => (
  <Image source={source} style={[styles.image, style]} />
);

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "auto",
  },
});

export default CustomImage;
