import { Dimensions, StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  section: {
    paddingLeft: moderateScale(20),
    paddingTop: verticalScale(15),
    paddingBottom: verticalScale(5),
  },
  sectionTitle: {
    fontSize: moderateScale(18),
    fontWeight: "500",
    marginBottom: verticalScale(12),
    color: "#5A606D",
  },
  eventCard: {
    width: width * 0.7, // Responsive width based on screen size
    height: moderateScale(215),
    marginRight: moderateScale(10),
    backgroundColor: "#FFF",
    borderRadius: moderateScale(20),
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: moderateScale(155),
    borderBottomRightRadius: moderateScale(30),
  },
  eventText: {
    marginTop: verticalScale(12),
    marginStart: moderateScale(20),
    paddingEnd: moderateScale(30),
    fontWeight: "bold",
    color: "#3B3F49",
  },
});
