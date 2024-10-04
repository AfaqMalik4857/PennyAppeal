import { Dimensions, StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  footer: {
    padding: moderateScale(20),
    alignItems: "center",
    width: "100%",
  },
  faqButton: {
    flexDirection: "row",
    padding: moderateScale(15),
    backgroundColor: "#FF9C27",
    borderRadius: moderateScale(14),
    width: "100%",
    height: verticalScale(50),
    alignItems: "center",
    marginBottom: verticalScale(10),
  },
  faqButtonText: {
    color: "#fff",
    fontWeight: "600",
    flex: 1,
  },
  volunteerButton: {
    padding: moderateScale(15),
    borderRadius: moderateScale(10),
    width: "100%",
    alignItems: "center",
  },
  volunteerButtonText: {
    color: "#FF9C27",
    fontWeight: "bold",
    fontSize: moderateScale(15),
  },
  FAQicon: {
    fontSize: moderateScale(15),
    color: "#fff",
    marginLeft: moderateScale(10),
  },
});
