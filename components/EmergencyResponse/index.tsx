import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import styles from "./styles";

const index = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Emergency Response</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {emergencyData.map((item, index) => (
          <View key={index} style={styles.emergencyCard}>
            <Image source={item.image} style={styles.emergencyCardImage} />
            <Text style={styles.emergencyCardText}>{item.title}</Text>
            <Text style={styles.emergencyCardTextD}>
              <Image source={require("../../assets/images/twomen.png")} />
              {item.donors} Donors
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

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

export default index;
