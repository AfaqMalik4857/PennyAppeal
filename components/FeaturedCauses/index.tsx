import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import styles from "./styles";

const index = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Featured Causes</Text>
      <ScrollView horizontal={true}>
        <View style={styles.featurecard}>
          <Image
            source={require("../../assets/images/feature1.png")}
            style={styles.featurecardImage}
          />
          <Text style={styles.featuretext}>
            Winter Relief For Yemen, Libiya, Pales
          </Text>
        </View>
        <View style={styles.featurecard}>
          <Image
            source={require("../../assets/images/feature2.png")}
            style={styles.featurecardImage}
          />
          <Text style={styles.featuretext}>Flood response in Pakistan</Text>
        </View>
        <View style={styles.featurecard}>
          <Image
            source={require("../../assets/images/feature1.png")}
            style={styles.featurecardImage}
          />

          <Text style={styles.featuretext}>Flood response in Pakistan</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default index;
