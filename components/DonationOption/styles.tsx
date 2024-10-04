import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";

export default StyleSheet.create({
  donationOptions: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingBottom: verticalScale(8),
    paddingLeft: moderateScale(8),
    paddingRight: moderateScale(8),
    marginTop: verticalScale(10),
  },
  optionButton: {
    width: "45%",
    height: moderateScale(88),
    padding: moderateScale(15),
    backgroundColor: "#FFFFFF",
    borderRadius: moderateScale(15),
    marginVertical: verticalScale(5),
    alignItems: "center",
    shadowColor: "#000", // Added shadow properties for a card effect
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  donationNames: {
    alignSelf: "flex-start",
    paddingBottom: verticalScale(8),
    fontWeight: "500",
  },
  donationText: {
    alignSelf: "flex-start",
    color: "#808080",
  },
});
