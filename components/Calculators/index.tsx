import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import styles from "./styles";

const index = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Calculators</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {calculatorData.map((item, index) => (
          <View key={index} style={styles.calculatorCard}>
            <Image source={item.icon} style={styles.calculatorIcon} />
            <Text style={styles.calculatorText}>{item.label}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const calculatorData = [
  {
    label: "Zakat",
    icon: require("../../assets/images/zakat.png"),
  },
  {
    label: "Fidya",
    icon: require("../../assets/images/fidya.png"),
  },
  {
    label: "Kafarrah",
    icon: require("../../assets/images/kaffarah.png"),
  },
  {
    label: "Sadaqah",
    icon: require("../../assets/images/sadaqah.png"),
  },
];

export default index;
