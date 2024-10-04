import { Dimensions, StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";
const { width } = Dimensions.get("window");

export default StyleSheet.create({
  section: {
    paddingLeft: moderateScale(20),
    paddingTop: verticalScale(15),
  },
  title: {
    fontSize: moderateScale(18),
    fontWeight: "500",
    marginBottom: verticalScale(15),
  },
  calculatorCard: {
    width: width * 0.26,
    height: moderateScale(105),
    marginRight: moderateScale(15),
    backgroundColor: "#FFF",
    borderRadius: moderateScale(15),
    overflow: "hidden",
    alignSelf: "center",
    alignItems: "center",
  },
  calculatorText: {
    color: "#5A606D",
    marginTop: verticalScale(8),
    alignSelf: "center",
    fontWeight: "bold",
  },
  calculatorIcon: {
    alignSelf: "center",
    marginTop: verticalScale(10),
    width: moderateScale(50),
    height: moderateScale(50),
  },
});
