import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";

export default StyleSheet.create({
  section: {
    paddingLeft: moderateScale(20),
    paddingTop: verticalScale(15),
  },
  calculatorcard: {
    width: moderateScale(100),
    height: moderateScale(105),
    marginRight: 15,
    backgroundColor: "#FFF",
    borderRadius: moderateScale(15),
    overflow: "hidden",
    alignSelf: "center",
  },
  calculatortext: {
    color: "#5A606D",
    marginTop: verticalScale(8),
    alignSelf: "center",
    fontWeight: "bold",
  },
  calculatoricon: {
    alignSelf: "center",
    marginTop: verticalScale(10),
  },
});
