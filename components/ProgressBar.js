import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, StyleSheet, Text } from "react-native";

const ProgressBar = ({ value1, total }) => {
  const percentage1 = (value1 / total) * 75;
  const percentage2 = (225 / total) * 100;

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          width: "92%",
          height: 18,
          alignSelf: "center",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 14,
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: "#FFF",
          }}
        >
          ${value1}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 14,
              color: "#FFF",
            }}
          >
            {"2024 donation goal"}
          </Text>
          <Ionicons
            name={"information-circle"}
            size={20}
            color={"#FFF"}
            style={{ marginLeft: 0.0075 }}
          />
        </View>
        <Text
          style={{
            fontSize: 14,
            color: "#FFF",
          }}
        >
          ${total}
        </Text>
      </View>
      <View style={styles.container}>
        <View
          style={[
            styles.progressBar,
            {
              width: `${percentage1}%`,
              backgroundColor: "#3B9781",
              borderRadius: 5,
              zIndex: 99,
            },
          ]}
        />
        <View
          style={[
            styles.progressBar,
            {
              width: `${percentage2}%`,
              backgroundColor: "#FFF",
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              marginLeft: -3,
            },
          ]}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 10,
    width: "92%",
    backgroundColor: "rgba(224, 224, 224, 0.5)",
    borderRadius: 5,
    overflow: "hidden",
    alignSelf: "center",
    marginBottom: 8,
  },
  progressBar: {
    height: "90%",
  },
});

export default ProgressBar;
