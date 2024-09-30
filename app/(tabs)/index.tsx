import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import DualProgressBar from "../../components/ProgressBar";
// components
import Header from "@/components/Header";
import DonationOption from "@/components/DonationOption";
import Calculators from "@/components/Calculators";
import EmergencyResponse from "@/components/EmergencyResponse";
import FeaturedCauses from "@/components/FeaturedCauses";
import Events from "@/components/Events";
import FAQ from "@/components/FAQ&Volunteer";

const HomeScreen = () => {
  const value = 450;
  const total = 1000;
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={["#e66902", "transparent"]}
        style={styles.background}
      >
        <Header />
        <DualProgressBar value={value} total={total} />
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
    left: 0,
    right: 0,
    top: 0,
    height: 630,
  },
});

export default HomeScreen;
