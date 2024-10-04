import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { moderateScale } from "react-native-size-matters";

const index = () => {
  return (
    <View style={styles.donationOptions}>
      {donationData.map((item, index) => (
        <TouchableOpacity key={index} style={styles.optionButton}>
          <View style={styles.row}>
            <Text style={styles.donationNames}>{item.name}</Text>
            <Image source={item.icon} style={styles.icon} />
          </View>
          <Text style={styles.donationText}>{item.details}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const donationData = [
  {
    name: "Round up",
    icon: require("../../assets/images/roundUp.png"),
    details: "$25 Round Up Last Month",
  },
  {
    name: "Quick Donate",
    icon: require("../../assets/images/quickDonate.png"),
    details: "5 Days since last donation",
  },
  {
    name: "Akhirah Portfolio",
    icon: require("../../assets/images/alkhirah.png"),
    details: "3 Campaigns Supported",
  },
  {
    name: "Auto Donate",
    icon: require("../../assets/images/autodonate.png"),
    details: "Next Donation Scheduled",
  },
];

export default index;
