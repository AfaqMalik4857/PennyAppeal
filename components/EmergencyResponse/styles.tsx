import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";

export default StyleSheet.create({
  section: {
    paddingLeft: moderateScale(20),
    paddingTop: verticalScale(105),
    paddingBottom: verticalScale(5),
  },
  sectionTitle: {
    fontSize: moderateScale(18),
    fontWeight: "500",
    marginBottom: verticalScale(12),
    color: "#5A606D",
  },
  emergencycardImage: {
    width: "100%",
    height: moderateScale(140),
    borderBottomRightRadius: moderateScale(30),
  },
  emergencycard: {
    width: moderateScale(280),
    height: moderateScale(225),
    marginRight: moderateScale(20),
    borderRadius: moderateScale(20),
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  emergencycardtext: {
    marginTop: verticalScale(15),
    paddingLeft: moderateScale(18),
    alignSelf: "flex-start",
    paddingBottom: verticalScale(3),
    fontWeight: "bold",
  },
  emergencycardtextd: {
    paddingLeft: moderateScale(18),
    alignSelf: "flex-start",
    color: "#808080",
  },
});
