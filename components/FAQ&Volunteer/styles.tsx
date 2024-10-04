import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

export default StyleSheet.create({
  footer: {
    padding: moderateScale(20),
    alignItems: "center",
  },
  faqButton: {
    flexDirection: "row",
    padding: moderateScale(15),
    backgroundColor: "#FF9C27",
    borderRadius: moderateScale(14),
    width: "100%",
    height: moderateScale(60),
    alignItems: "center",
    marginBottom: verticalScale(3),
  },
  volunteerButton: {
    padding: moderateScale(15),
    borderRadius: moderateScale(10),
    width: "100%",
    alignItems: "center",
  },
  volunteerButtoncolor: {
    color: "#FF9C27",
    fontWeight: "bold",
    fontSize: moderateScale(15),
  },
  FAQicon: {
    fontSize: moderateScale(15),
    marginLeft: scale(120),
  },
});
