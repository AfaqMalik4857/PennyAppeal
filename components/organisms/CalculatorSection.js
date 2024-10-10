import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import CalculatorCard from "../molecules/CalculatorCard";

const CalculatorSection = () => {
  const calculatorData = [
    { label: "Zakat", icon: require("../../assets/images/zakat.png") },
    { label: "Fidya", icon: require("../../assets/images/fidya.png") },
    { label: "Kafarrah", icon: require("../../assets/images/kaffarah.png") },
    { label: "Sadaqah", icon: require("../../assets/images/sadaqah.png") },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.title}>Calculators</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {calculatorData.map((item, index) => (
          <CalculatorCard key={index} label={item.label} icon={item.icon} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingLeft: 20,
    paddingTop: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 15,
  },
});

export default CalculatorSection;
