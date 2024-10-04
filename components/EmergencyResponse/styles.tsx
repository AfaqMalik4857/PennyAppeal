import { Dimensions, StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";

const { width } = Dimensions.get("window");

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
  emergencyCardImage: {
    width: "100%",
    height: moderateScale(140),
    borderBottomRightRadius: moderateScale(30),
  },
  emergencyCard: {
    width: width * 0.74,
    height: moderateScale(215),
    marginRight: moderateScale(20),
    borderRadius: moderateScale(20),
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  emergencyCardText: {
    marginTop: verticalScale(15),
    paddingLeft: moderateScale(18),
    alignSelf: "flex-start",
    paddingBottom: verticalScale(3),
    fontWeight: "bold",
  },
  emergencyCardTextD: {
    paddingLeft: moderateScale(18),
    alignSelf: "flex-start",
    color: "#808080",
  },
});
