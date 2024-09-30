import { StyleSheet } from "react-native";

export default StyleSheet.create({
  donationOptions: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingBottom: 10,
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 10,
  },
  optionButton: {
    width: "46%",
    height: 100,
    padding: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  donationNames: {
    alignSelf: "flex-start",
    paddingBottom: 15,
    fontWeight: "bold",
  },
  donationText: {
    alignSelf: "flex-start",
    color: "#808080",
  },
});
