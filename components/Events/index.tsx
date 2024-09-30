import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import styles from "./styles";

const index = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Events</Text>
      <ScrollView horizontal={true}>
        <View style={styles.eventCard}>
          <Image
            source={require("../../assets/images/event1.png")}
            style={styles.cardImage}
          />
          <Text style={styles.eventText}>
            Sh. Assim Al Hakeem Tour - Feb 17th - Edmonton
          </Text>
        </View>
        <View style={styles.eventCard}>
          <Image
            source={require("../../assets/images/event2.png")}
            style={styles.cardImage}
          />
          <Text style={styles.eventText}>
            Sh. Assim Al Hakeem Tour - Feb 17th - Edmonton
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default index;
