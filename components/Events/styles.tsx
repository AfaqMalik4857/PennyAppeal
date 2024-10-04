import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";

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
    width: moderateScale(285),
    height: moderateScale(215),
    marginRight: moderateScale(10),
    backgroundColor: "#FFF",
    borderRadius: moderateScale(20),
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: moderateScale(155),
    paddingTop: moderateScale(40),
    borderBottomRightRadius: moderateScale(30),
  },
  eventText: {
    marginTop: verticalScale(10),
    marginStart: moderateScale(20),
    marginRight: moderateScale(60),
    fontWeight: "bold",
  },
});
3;
