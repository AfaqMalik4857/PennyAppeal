import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import FeaturedCause from "../molecules/FeaturedCause";

const FeaturedCausesSection = () => {
  const featuredCausesData = [
    {
      title: "Winter Relief For Yemen, Libya, Palestine",
      image: require("../../assets/images/feature1.png"),
    },
    {
      title: "Flood response in Pakistan",
      image: require("../../assets/images/feature2.png"),
    },
    {
      title: "Winter Relief For Yemen, Libya, Palestine",
      image: require("../../assets/images/feature1.png"),
    },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Featured Causes</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {featuredCausesData.map((item, index) => (
          <FeaturedCause key={index} title={item.title} image={item.image} />
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 12,
    color: "#5A606D",
  },
});

export default FeaturedCausesSection;
