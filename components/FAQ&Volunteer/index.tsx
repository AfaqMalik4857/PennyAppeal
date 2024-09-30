import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";

const index = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.faqButton}>
        <Text
          style={{
            color: "#fff",
          }}
        >
          Frequently Asked Questions
        </Text>
        <FontAwesome5
          name="chevron-right"
          style={styles.infoicon}
          color={"#fff"}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.volunteerButton}>
        <Text style={styles.volunteerButtoncolor}>Volunteer with us</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
