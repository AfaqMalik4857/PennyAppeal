import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import CustomImage from "../atoms/Image";
import CustomText from "../atoms/Text";
const { width } = Dimensions.get("window");

const FeaturedCause = ({ title, image }) => (
  <View style={styles.featureCard}>
    <CustomImage source={image} style={styles.featureCardImage} />
    <CustomText style={styles.featureText}>{title}</CustomText>
  </View>
);

const styles = StyleSheet.create({
  featureCard: {
    width: width * 0.37,
    height: 200,
    marginRight: 20,
    backgroundColor: "#FFF",
    borderRadius: 25,
    overflow: "hidden",
  },
  featureCardImage: {
    width: "100%",
    height: 135,
    borderBottomRightRadius: 25,
  },
  featureText: {
    margin: 10,
    color: "#696969",
  },
});

export default FeaturedCause;
