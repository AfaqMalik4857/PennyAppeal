import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import styles from "./styles";

const index = () => {
  return (
    <View style={styles.section}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 18,
        }}
      >
        Calculators
      </Text>
      <ScrollView horizontal={true}>
        <View style={styles.calculatorcard}>
          <Image
            source={require("../../assets/images/zakat.png")}
            style={styles.calculatoricon}
          />
          <Text style={styles.calculatortext}>Zakat</Text>
        </View>
        <View style={styles.calculatorcard}>
          <Image
            source={require("../../assets/images/fidya.png")}
            style={styles.calculatoricon}
          />
          <Text style={styles.calculatortext}>Fidya</Text>
        </View>
        <View style={styles.calculatorcard}>
          <Image
            source={require("../../assets/images/kaffarah.png")}
            style={styles.calculatoricon}
          />
          <Text style={styles.calculatortext}>Kafarrah</Text>
        </View>
        <View style={styles.calculatorcard}>
          <Image
            source={require("../../assets/images/sadaqah.png")}
            style={styles.calculatoricon}
          />
          <Text style={styles.calculatortext}>Sadaqah</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default index;
