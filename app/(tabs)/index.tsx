import React from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={["#e66902", "transparent"]}
        style={styles.background}
      >
        {/* Header */}
        <View style={styles.header}>
          <Image source={require("../../assets/images/vector.png")} />

          <View style={{ flexDirection: "row" }}>
            <Text style={styles.userName}>
              <Text style={{ fontWeight: "900" }}>Salam,</Text>
              <Text> Ahmed</Text>{" "}
            </Text>
            <TouchableOpacity style={styles.searchButton}>
              <Image source={require("../../assets/images/ic_search.png")} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Donation Info */}
        <View style={styles.donationInfo}>
          <Text style={styles.donationGoal}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "#fff", justifyContent: "flex-start" }}>
                $450{"         "}
              </Text>
              <Text style={{ color: "#fff" }}>
                {"         "}2024 donation goal{" "}
                <FontAwesome5
                  name="info-circle"
                  style={styles.infoicon}
                  color={"#fff"}
                />
              </Text>
              <Text style={{ color: "#fff" }}> {"             "}$1,000</Text>
            </View>
          </Text>
          <Image
            source={require("../../assets/images/progressbarGreenline.png")}
            style={styles.progressbar}
          />
        </View>

        {/* Donation Options */}
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

        {/* Calculators */}
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
      </LinearGradient>

      {/* Emergency Response */}
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

      {/* Featured Causes */}
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

      {/* Events */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Events</Text>
        <ScrollView horizontal={true}>
          <View style={styles.eventCard}>
            <Image
              source={require("../../assets/images/event1.png")}
              style={styles.cardImage}
            />
            <Text style={styles.eventText}>
              Sh. Assim Al Hakeem Tour - Feb 17th - Edmonton
            </Text>
          </View>
          <View style={styles.eventCard}>
            <Image
              source={require("../../assets/images/event2.png")}
              style={styles.cardImage}
            />
            <Text style={styles.eventText}>
              Sh. Assim Al Hakeem Tour - Feb 17th - Edmonton
            </Text>
          </View>
        </ScrollView>
      </View>

      {/* Frequently Asked Questions & Volunteer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.faqButton}>
          <Text
            style={{
              color: "#fff",
            }}
          >
            Frequently Asked Questions
          </Text>
          <FontAwesome5
            name="chevron-right"
            style={styles.infoicon}
            color={"#fff"}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.volunteerButton}>
          <Text style={styles.volunteerButtoncolor}>Volunteer with us</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    left: 0,
    right: 0,
    top: 0,
    height: 630,
  },
  container: {
    flex: 1,
    backgroundColor: "",
  },
  Lgradient: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "bold",
  },
  logo: {},
  logoName: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  userName: {
    marginTop: 60,
    fontSize: 18,
    color: "#FFF",
  },
  searchButton: {
    padding: 10,
    paddingTop: 40,
    marginTop: 20,
    marginRight: 10,
  },
  infoicon: {
    fontSize: 15,
    marginLeft: 130,
  },
  progressbar: {
    padding: 2,
    margin: 10,
    width: 360,
    borderRadius: 5,
  },
  donationNames: {
    alignSelf: "flex-start",
    paddingBottom: 15,
    fontWeight: "bold",
  },
  donationText: {
    alignSelf: "flex-start",
    color: "#808080",
  },
  donationicon: {
    paddingRight: 20,
    marginLeft: 42,
  },
  donationInfo: {
    padding: 2,
    alignItems: "center",
  },
  donationGoal: {
    marginTop: 25,
    fontSize: 16,
    color: "#FFFFFF",
  },
  donationOptions: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingBottom: 10,
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 10,
  },
  optionButton: {
    width: "46%",
    height: 100,
    padding: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  calculatorcard: {
    width: 102,
    height: 105,
    marginRight: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
    overflow: "hidden",
    alignSelf: "center",
  },
  calculatortext: {
    color: "#5A606D",
    marginTop: 8,
    alignSelf: "center",
    fontWeight: "bold",
  },
  calculatoricon: {
    alignSelf: "center",
    marginTop: 10,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 18,
    color: "#5A606D",
  },
  emergencycardImage: {
    width: "100%",
    height: 150,
    borderBottomRightRadius: 30,
  },
  emergencycard: {
    width: 280,
    height: 230,
    marginRight: 10,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  emergencycardtext: {
    marginTop: 15,
    paddingLeft: 15,
    alignSelf: "flex-start",
    paddingBottom: 3,
    fontWeight: "bold",
  },
  emergencycardtextd: {
    paddingLeft: 15,
    alignSelf: "flex-start",
    color: "#808080",
  },
  featurecard: {
    width: 145,
    height: 210,
    marginRight: 10,
    backgroundColor: "#FFF",
    borderRadius: 15,
    overflow: "hidden",
  },
  featurecardImage: {
    width: "100%",
    height: 145,
    borderBottomRightRadius: 25,
  },
  featuretext: {
    margin: 10,
    color: "#696969",
  },
  eventCard: {
    width: 280,
    height: 215,
    marginRight: 10,
    backgroundColor: "#FFF",
    borderRadius: 20,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 145,
    paddingTop: 30,
    borderBottomRightRadius: 30,
  },
  eventText: {
    marginTop: 15,
    marginStart: 20,
    marginRight: 60,
    fontWeight: "bold",
  },
  footer: {
    padding: 20,
    alignItems: "center",
  },
  faqButton: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#FF9C27",
    borderRadius: 14,
    width: "100%",
    height: 60,
    alignItems: "center",
    marginBottom: 10,
  },
  volunteerButton: {
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  volunteerButtoncolor: {
    color: "#FF9C27",
    fontWeight: "bold",
  },
});

export default HomeScreen;
