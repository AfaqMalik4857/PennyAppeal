import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import EventCard from "../molecules/EventCard";

const EventSection = () => {
  const eventsData = [
    {
      title: "Sh. Assim Al Hakeem Tour - Feb 17th - Edmonton",
      image: require("../../assets/images/event1.png"),
    },
    {
      title: "Sh. Assim Al Hakeem Tour - Feb 18th - Toronto",
      image: require("../../assets/images/event2.png"),
    },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Events</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {eventsData.map((item, index) => (
          <EventCard key={index} title={item.title} image={item.image} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 12,
    color: "#5A606D",
  },
});

export default EventSection;
