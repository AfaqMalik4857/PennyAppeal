import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const index = () => {
  return (
    <View style={styles.donationOptions}>
      <TouchableOpacity style={styles.optionButton}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.donationNames}>Round up</Text>
          <Image
            source={require("../../assets/images/roundUp.png")}
            style={{ paddingRight: 20, marginLeft: 48 }}
          />
        </View>

        <Text style={styles.donationText}>$25 Round Up Last Month</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.donationNames}>Quick Donate</Text>
          <Image
            source={require("../../assets/images/quickDonate.png")}
            style={{ paddingRight: 20, marginLeft: 30 }}
          />
        </View>
        <Text style={styles.donationText}>5 Days since last donation</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.donationNames}>Akhirah Portfolio</Text>
          <Image
            source={require("../../assets/images/alkhirah.png")}
            style={{ paddingRight: 20 }}
          />
        </View>
        <Text style={styles.donationText}>3 Campaigns Supported </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.donationNames}>Auto Donate </Text>
          <Image
            source={require("../../assets/images/autodonate.png")}
            style={{ paddingRight: 20, marginLeft: 28 }}
          />
        </View>

        <Text style={styles.donationText}>Next Donation Scheduled </Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
