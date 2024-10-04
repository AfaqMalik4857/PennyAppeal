import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { verticalScale } from "react-native-size-matters";

export default function Portfolio() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={styles.container}>Portfolio</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    color: "#FFA500",
    fontWeight: "bold",
    textAlign: "center",
  },
});
