import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Roundup() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={styles.container}>Roundup</Text>
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
