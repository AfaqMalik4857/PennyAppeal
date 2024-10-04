import { moderateScale } from 'react-native-size-matters';
import { verticalScale } from 'react-native-size-matters';
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        fontWeight: "bold",
    },
    userName: {
        marginTop: verticalScale(38),
        fontSize: moderateScale(20),
        color: "#FFF",
    },
    searchButton: {
        padding: moderateScale(10),
        paddingTop: verticalScale(40),
        marginRight: 10,
    },
})