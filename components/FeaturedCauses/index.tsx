import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import styles from "./styles";

const index = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Featured Causes</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {featuredCausesData.map((item, index) => (
          <View key={index} style={styles.featureCard}>
            <Image source={item.image} style={styles.featureCardImage} />
            <Text style={styles.featureText}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

// Sample data for featured causes
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
    title: "Flood response in Pakistan",
    image: require("../../assets/images/feature1.png"),
  },
];

export default index;
