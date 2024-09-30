import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import styles from "./styles";

const index = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Emergency Response</Text>
      <ScrollView horizontal={true}>
        <View style={styles.emergencycard}>
          <Image
            source={require("../../assets/images/emergency1.png")}
            style={styles.emergencycardImage}
          />
          <Text style={styles.emergencycardtext}>
            Donate for Pakistan Flood
          </Text>
          <Text style={styles.emergencycardtextd}>
            <Image source={require("../../assets/images/twomen.png")} />
            250 Donors
          </Text>
        </View>
        <View style={styles.emergencycard}>
          <Image
            source={require("../../assets/images/emergency2.png")}
            style={styles.emergencycardImage}
          />
          <Text style={styles.emergencycardtext}>Donate for XYZ</Text>
          <Text style={styles.emergencycardtextd}>
            <Image source={require("../../assets/images/twomen.png")} />
            250 Donors
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default index;
