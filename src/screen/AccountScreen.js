import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';

const AccountScreen = () => {
  const [secureEntry, setSecureEntry] = useState(true);
  const navigation = useNavigation();

  const handleSignup = () => {
    navigation.navigate("SIGNUP");
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Login</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={24} color="#555" />
          <TextInput
            style={styles.inputText}
            placeholder="Enter Your Email"
            keyboardType="email-address"
            placeholderTextColor="#888"
          />
        </View>

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

        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButtonWrapper}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.footerContainer}>
          <Text style={styles.accountText}>Don’t have an account?</Text>
          <TouchableOpacity onPress={handleSignup}>
            <Text style={styles.signupText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 20,
    justifyContent: "center",
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
  forgotPasswordText: {
    textAlign: "right",
    color: "#007bff",
    fontWeight: "500",
    marginBottom: 20,
  },
  loginButtonWrapper: {
    backgroundColor: "#007bff",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 20,
  },
  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  accountText: {
    color: "#333",
    fontSize: 14,
  },
  signupText: {
    color: "#007bff",
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 5,
  },
});
