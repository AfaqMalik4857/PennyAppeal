import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import styles from "./styles";

const index = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Events</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {eventsData.map((item, index) => (
          <View key={index} style={styles.eventCard}>
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.eventText}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const eventsData = [
  {
    title: "Sh. Assim Al Hakeem Tour - Feb 17th - Edmonton",
    image: require("../../assets/images/event1.png"),
  },
  {
    title: "Sh. Assim Al Hakeem Tour - Feb 17th - Edmonton",
    image: require("../../assets/images/event2.png"),
  },
];

export default index;
