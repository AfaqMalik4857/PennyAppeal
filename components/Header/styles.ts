import { moderateScale } from 'react-native-size-matters';
import { verticalScale } from 'react-native-size-matters';
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
     
      row: {
        flexDirection: "row",
        alignItems: "center",
      },
      userName: {
        marginTop: verticalScale(5), 
        fontSize: moderateScale(20), 
        color: "#FFF",
      },
      greeting: {
        fontWeight: "900",
      },
      searchButton: {
        padding: moderateScale(10),
        marginLeft: moderateScale(2), 
      },
      searchIcon: {
        width: moderateScale(24), 
        height: moderateScale(24),
        marginTop: verticalScale(10),
      },
})