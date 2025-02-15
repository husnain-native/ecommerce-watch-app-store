import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Switch, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { colors } from "../constants/colors";

const PaymentScreen = () => {
  const navigation = useNavigation();
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

  const handlePayment = () => {
    if (!cardNumber || cardNumber.length < 16) {
      alert("Please enter a valid 16-digit card number.");
      return;
    }
    if (!expiryDate || expiryDate.length < 5 || !expiryDate.includes("/")) {
      alert("Please enter a valid expiry date (MM/YY).");
      return;
    }
    if (!cvv || cvv.length < 3) {
      alert("Please enter a valid 3-digit CVV.");
      return;
    }

    setIsPaymentSuccess(true); // Show success modal
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name={"arrow-back"} size={34} color="#000" />
      </TouchableOpacity>
      <Text style={styles.heading}>Payment Details</Text>

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Name on Card</Text>
        <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#888" />
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Card Information</Text>
        <View style={styles.cardInfoContainer}>
          <TextInput
            style={styles.cardInput}
            placeholder="Card number"
            placeholderTextColor="#888"
            keyboardType="numeric"
            maxLength={19}
            onChangeText={(text) => {
              const numericText = text.replace(/[^0-9]/g, ""); // Removes non-numeric characters
              let formattedText = numericText.match(/.{1,4}/g)?.join(" ") || numericText;
              setCardNumber(formattedText);
            }}
            value={cardNumber}
          />
          <View style={styles.cardIcons}>
            <FontAwesome name="cc-visa" size={24} color="#1A1F71" style={styles.cardIcon} />
            <FontAwesome name="cc-mastercard" size={24} color="#FF5F00" style={styles.cardIcon} />
            <FontAwesome name="cc-paypal" size={24} color="#003087" style={styles.cardIcon} />
            <FontAwesome name="cc-stripe" size={24} color="#6772E5" style={styles.cardIcon} />
          </View>
        </View>
      </View>

      <View style={styles.cardInfoRow}>
        <TextInput
          style={[styles.input, { flex: 1, marginRight: 8 }]}
          placeholder="MM / YY"
          placeholderTextColor="#888"
          keyboardType="numeric"
          maxLength={5}
          onChangeText={(text) => {
            let formattedText = text.replace(/[^0-9]/g, "");
            if (formattedText.length > 2) {
              formattedText = formattedText.slice(0, 2) + "/" + formattedText.slice(2, 4);
            }
            setExpiryDate(formattedText);
          }}
          value={expiryDate}
        />
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="CVC"
          placeholderTextColor="#888"
          secureTextEntry={true}
          keyboardType="numeric"
          maxLength={3}
          onChangeText={setCvv}
          value={cvv}
        />
      </View>

      <View style={styles.checkboxWrapper}>
        <Switch value={isSaved} onValueChange={setIsSaved} />
        <Text style={styles.checkboxLabel}>Save this card for future payments</Text>
      </View>

      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>

      <Modal
  visible={isPaymentSuccess}
  transparent={true}
  animationType="slide"
  onRequestClose={() => setIsPaymentSuccess(false)}
>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      {/* Close Button */}
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => setIsPaymentSuccess(false)}
      >
        <Ionicons name="close" size={24} color= {colors.gray} />
      </TouchableOpacity>

      <Ionicons name="checkmark-circle" size={64} color="#4CAF50" />
      <Text style={styles.modalTitle}>Payment Successful!</Text>
      <Text style={styles.modalMessage}>Thank you for your purchase.</Text>
      <TouchableOpacity
        style={styles.modalButton}
        onPress={() => {
          setIsPaymentSuccess(false);
          navigation.navigate("HOME");
        }}
      >
        <Text style={styles.modalButtonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 16,
  },
  backButton: {
    marginBottom: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 24,
    textAlign: "center",
  },
  inputWrapper: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#000",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff",
    color: "#000",
  },
  cardInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fff",
  },
  cardInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  cardIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardIcon: {
    marginLeft: 8,
  },
  cardInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  checkboxWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 14,
    color: "#555",
  },
  payButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  payButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    position: "relative", 
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4CAF50",
    marginVertical: 10,
  },
  modalMessage: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  closeButton: {
    position: "absolute",
    top: 8,
    right: 8,
    zIndex: 1,
    padding: 8,
    color: colors.gray
  },
});
