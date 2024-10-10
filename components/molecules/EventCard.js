import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import CustomImage from "../atoms/Image";
import CustomText from "../atoms/Text";
import { moderateScale, verticalScale } from "react-native-size-matters";

const { width } = Dimensions.get("window");

const EventCard = ({ title, image }) => (
  <View style={styles.eventCard}>
    <CustomImage source={image} style={styles.cardImage} />
    <CustomText style={styles.eventText}>{title}</CustomText>
  </View>
);

const styles = StyleSheet.create({
  eventCard: {
    width: width * 0.72, // Responsive width based on screen size
    height: moderateScale(215),
    marginRight: moderateScale(10),
    backgroundColor: "#FFF",
    borderRadius: moderateScale(20),
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: moderateScale(155),
    borderBottomRightRadius: moderateScale(30),
  },
  eventText: {
    marginTop: verticalScale(12),
    marginStart: moderateScale(20),
    paddingEnd: moderateScale(30),
    fontWeight: "bold",
    color: "#3B3F49",
  },
});

export default EventCard;
