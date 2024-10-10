import React from "react";
import { View, StyleSheet } from "react-native";
import DonationOption from "../molecules/DonationOption";

const DonationOptionsSection = () => {
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

  return (
    <View style={styles.donationOptions}>
      {donationData.map((item, index) => (
        <DonationOption
          key={index}
          name={item.name}
          icon={item.icon}
          details={item.details}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  donationOptions: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingBottom: 8,
    paddingHorizontal: 8,
    marginTop: 10,
  },
});

export default DonationOptionsSection;
