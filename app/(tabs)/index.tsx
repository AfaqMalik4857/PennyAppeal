import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// components
import Header from "@/components/Header";
import ProgressBar from "../../components/ProgressBar";
import DonationOption from "@/components/DonationOption";
import Calculators from "@/components/Calculators";
import EmergencyResponse from "@/components/EmergencyResponse";
import FeaturedCauses from "@/components/FeaturedCauses";
import Events from "@/components/Events";
import FAQ from "@/components/FAQ&Volunteer";
import { moderateScale, verticalScale } from "react-native-size-matters";

const HomeScreen = () => {
  const value = 450;
  const total = 1000;
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={["#e66902", "#e66902", "transparent"]}
        style={styles.background}
      >
        <Header />
        <ProgressBar value={value} total={total} />
        <DonationOption />
        <Calculators />
      </LinearGradient>
      <EmergencyResponse />
      <FeaturedCauses />
      <Events />
      <FAQ />
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    left: moderateScale(0),
    right: moderateScale(0),
    top: verticalScale(0),
    height: moderateScale(450),
  },
});

export default HomeScreen;
