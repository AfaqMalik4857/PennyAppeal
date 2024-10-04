import { Dimensions, StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";

const { width } = Dimensions.get("window");

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
  featureCard: {
    width: width * 0.365,
    height: moderateScale(195),
    marginRight: moderateScale(20),
    backgroundColor: "#FFF",
    borderRadius: moderateScale(25),
    overflow: "hidden",
  },
  featureCardImage: {
    width: "100%",
    height: moderateScale(135),
    borderBottomRightRadius: moderateScale(25),
  },
  featureText: {
    margin: moderateScale(10),
    color: "#696969",
  },
});
