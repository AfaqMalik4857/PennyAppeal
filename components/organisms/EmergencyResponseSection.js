import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import EmergencyCard from "../molecules/EmergencyCard";

const EmergencyResponseSection = () => {
  const emergencyData = [
    {
      title: "Donate for Pakistan Flood",
      image: require("../../assets/images/emergency1.png"),
      donors: 250,
    },
    {
      title: "Donate for XYZ",
      image: require("../../assets/images/emergency2.png"),
      donors: 250,
    },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Emergency Response</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {emergencyData.map((item, index) => (
          <EmergencyCard
            key={index}
            title={item.title}
            image={item.image}
            donors={item.donors}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingLeft: 20,
    paddingTop: 108,
    paddingBottom: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 12,
    color: "#5A606D",
  },
});

export default EmergencyResponseSection;
