import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const navigation = useNavigation(); // Access navigation
  const [secureEntry, setSecureEntry] = useState(true);

  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      {/* Sign Up Header */}
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Sign Up</Text>
      </View>

      {/* Form Section */}
      <View style={styles.formContainer}>
        {/* Name Input */}
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={24} color="#555" />
          <TextInput
            style={styles.inputText}
            placeholder="Enter Your Name"
            placeholderTextColor="#888"
          />
        </View>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={24} color="#555" />
          <TextInput
            style={styles.inputText}
            placeholder="Enter Your Email"
            keyboardType="email-address"
            placeholderTextColor="#888"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <SimpleLineIcons name="lock" size={24} color="#555" />
          <TextInput
            style={styles.inputText}
            placeholder="Enter Your Password"
            secureTextEntry={secureEntry}
            placeholderTextColor="#888"
          />
          <TouchableOpacity onPress={() => setSecureEntry((prev) => !prev)}>
            <Ionicons
              name={secureEntry ? "eye-off-outline" : "eye-outline"}
              size={24}
              color="#555"
            />
          </TouchableOpacity>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signupButtonWrapper}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 20,
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 10,
  },
  textContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  headingText: {
    fontSize: 28,
    color: "#333",
    fontWeight: "bold",
  },
  formContainer: {
    marginTop: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  inputText: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#333",
  },
  signupButtonWrapper: {
    backgroundColor: "#007bff",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 20,
  },
  signupText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
