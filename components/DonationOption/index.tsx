import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { moderateScale } from "react-native-size-matters";

const index = () => {
  return (
    <View style={styles.donationOptions}>
      <TouchableOpacity style={styles.optionButton}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.donationNames}>Round up</Text>
          <Image
            source={require("../../assets/images/roundUp.png")}
            style={{
              paddingRight: moderateScale(20),
              marginLeft: moderateScale(52),
            }}
          />
        </View>

        <Text style={styles.donationText}>$25 Round Up Last Month</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.donationNames}>Quick Donate</Text>
          <Image
            source={require("../../assets/images/quickDonate.png")}
            style={{
              paddingRight: moderateScale(20),
              marginLeft: moderateScale(36),
            }}
          />
        </View>
        <Text style={styles.donationText}>5 Days since last donation</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.donationNames}>Akhirah Portfolio</Text>
          <Image
            source={require("../../assets/images/alkhirah.png")}
            style={{
              paddingRight: moderateScale(20),
              marginLeft: moderateScale(7),
            }}
          />
        </View>
        <Text style={styles.donationText}>3 Campaigns Supported </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.donationNames}>Auto Donate </Text>
          <Image
            source={require("../../assets/images/autodonate.png")}
            style={{
              paddingRight: moderateScale(20),
              marginLeft: moderateScale(35),
            }}
          />
        </View>

        <Text style={styles.donationText}>Next Donation Scheduled </Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
