import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Import Screens
import HomeScreen from "../src/screen/HomeScreen";
import CartScreen from "../src/screen/CartScreen";
import LikedScreen from "../src/screen/LikedScreen";
import AccountScreen from "../src/screen/AccountScreen";
// import SignUpScreen from "../src/screen/SignUpScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Liked") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Account") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#a10328",  // Active icon color
        tabBarInactiveTintColor: "#8e8e8e",  // Inactive icon color
        headerShown: false, // Hide header
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 1,
          borderTopColor: "#e0e0e0",
          height: 65,
          paddingBottom: 10,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Liked" component={LikedScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
      {/* <Tab.Screen name="SignUp" component={SignUpScreen} /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
