import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";

export default StyleSheet.create({
  donationOptions: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingBottom: verticalScale(8),
    paddingHorizontal: moderateScale(8),
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
  donationNames: {
    alignSelf: "flex-start",
    paddingBottom: verticalScale(8),
    fontWeight: "500",
    fontSize: moderateScale(14),
  },
  donationText: {
    alignSelf: "flex-start",
    color: "#808080",
    fontSize: moderateScale(14),
  },
  icon: {
    width: moderateScale(26),
    height: moderateScale(25),
    marginLeft: moderateScale(4),
  },
});
