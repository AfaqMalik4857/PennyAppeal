import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import CustomText from "../atoms/Text";
import CustomImage from "../atoms/Image";
import { moderateScale, verticalScale } from "react-native-size-matters";
const { width } = Dimensions.get("window");

const DonationOption = ({ name, icon, details }) => (
  <TouchableOpacity style={styles.optionButton}>
    <View style={styles.row}>
      <CustomText style={styles.donationNames}>{name}</CustomText>
      <CustomImage source={icon} style={styles.icon} />
    </View>
    <CustomText style={styles.donationdetails}>{details}</CustomText>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  optionButton: {
    width: width * 0.43,
    height: moderateScale(88),
    padding: moderateScale(15),
    backgroundColor: "#FFFFFF",
    borderRadius: moderateScale(15),
    marginVertical: verticalScale(5),
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  icon: {
    width: moderateScale(26),
    height: moderateScale(25),
    marginLeft: moderateScale(4),
  },
  donationdetails: {
    alignSelf: "flex-start",
    color: "#808080",
    fontSize: moderateScale(14),
  },
  donationNames: {
    alignSelf: "flex-start",
    paddingBottom: verticalScale(8),
    fontWeight: "600",
    fontSize: moderateScale(13),
  },
});

export default DonationOption;
