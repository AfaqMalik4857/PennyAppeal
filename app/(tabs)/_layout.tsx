import { Tabs } from "expo-router";
import React from "react";
import { Image, Text, Platform } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#EF7D00",
        tabBarStyle: {
          backgroundColor: "#ffffff",
          elevation: 5,
          shadowOpacity: 0.3,
          borderTopLeftRadius: 18,
          borderTopRightRadius: 18,
          height: Platform.OS === "android" ? 60 : 100,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require("../../assets/images/Home.png")}
              resizeMode="contain"
              style={{
                height: 24,
                width: 24,
                tintColor: focused
                  ? "rgba(239, 125, 0, 1)"
                  : "rgba(140, 144, 153, 1)",
                marginTop: 10,
              }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                paddingBottom: 10,
                marginTop: 5,
                textAlign: "center", 
              }}
            >
              Home
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="AutoDonate"
        options={{
          title: "Auto Donate",
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require("../../assets/images/repeat.png")}
              resizeMode="contain"
              style={{
                height: 24,
                width: 24,
                tintColor: focused
                  ? "rgba(239, 125, 0, 1)"
                  : "rgba(140, 144, 153, 1)",
                marginTop: 10,
              }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                paddingBottom: 10,
                marginTop: 5,
                textAlign: "center",
              }}
            >
              Auto Donate
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="Roundup"
        options={{
          title: "Round Up",
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require("../../assets/images/card.png")}
              resizeMode="contain"
              style={{
                height: 24,
                width: 24,
                tintColor: focused
                  ? "rgba(239, 125, 0, 1)"
                  : "rgba(140, 144, 153, 1)",
                marginTop: 10,
              }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                paddingBottom: 10,
                marginTop: 5,
                textAlign: "center", // Center text
              }}
            >
              Round Up
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          title: "Portfolio",
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require("../../assets/images/chart.png")}
              resizeMode="contain"
              style={{
                height: 24,
                width: 24,
                tintColor: focused
                  ? "rgba(239, 125, 0, 1)"
                  : "rgba(140, 144, 153, 1)",
                marginTop: 10,
              }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                paddingBottom: 10,
                marginTop: 5,
                textAlign: "center", // Center text
              }}
            >
              Portfolio
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require("../../assets/images/profile.png")}
              resizeMode="contain"
              style={{
                height: 24,
                width: 24,
                tintColor: focused
                  ? "rgba(239, 125, 0, 1)"
                  : "rgba(140, 144, 153, 1)",
                marginTop: 10,
              }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                paddingBottom: 10,
                marginTop: 5,
                textAlign: "center", // Center text
              }}
            >
              Profile
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}
