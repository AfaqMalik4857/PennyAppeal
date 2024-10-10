import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// components

import Header from "@/components/organisms/Header";
import ProgressBar from "../../components/atoms/Progressbar";
import DonationOption from "@/components/organisms/DonationOptionSection";
import Calculators from "@/components/organisms/CalculatorSection";
import EmergencyResponse from "@/components/organisms/EmergencyResponseSection";
import FeaturedCauses from "@/components/organisms/FeaturedCausesSection";
import Events from "@/components/organisms/EventSection";
import FAQ from "@/components/atoms/FAQ&Volunteer";
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
