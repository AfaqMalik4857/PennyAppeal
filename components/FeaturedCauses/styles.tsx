import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";

export default StyleSheet.create({
  section: {
    paddingLeft: moderateScale(20),
    paddingTop: verticalScale(15),
  },
  sectionTitle: {
    fontSize: moderateScale(18),
    fontWeight: "500",
    marginBottom: verticalScale(12),
    color: "#5A606D",
  },
  featurecard: {
    width: moderateScale(150),
    height: moderateScale(190),
    marginRight: moderateScale(20),
    backgroundColor: "#FFF",
    borderRadius: moderateScale(25),
    overflow: "hidden",
  },
  featurecardImage: {
    width: "100%",
    height: moderateScale(135),
    borderBottomRightRadius: moderateScale(25),
  },
  featuretext: {
    margin: moderateScale(10),
    color: "#696969",
  },
});
