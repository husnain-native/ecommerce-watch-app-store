import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useCart } from "../context/CartContext";
import { colors } from "../constants/colors";
import { fontSize, spacing } from "../constants/dimensions";
import { fontFamily } from "../constants/fonts";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

const CartScreen = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigation = useNavigation();

  // Calculate the total price of items in the cart
  const grandTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name={"arrow-back"} size={34} color={colors.black} />
      </TouchableOpacity>
      <Text style={styles.heading}>My Cart</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty!</Text>
      ) : (
        <>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={cartItems}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            renderItem={({ item }) => (
              <View style={{ ...styles.itemContainer, backgroundColor: colors.lightGray }}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.infoContainer}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.price}>${item.price}</Text>
                </View>
                <TouchableOpacity
                  style={styles.deleteIconContainer}
                  onPress={() => removeFromCart(item.id)}
                >
                  <MaterialIcons name="delete" size={34} color={"#e34660"} />
                </TouchableOpacity>
              </View>
            )}
          />
          <View style={styles.footer}>
            <Text style={styles.totalText}>
              Grand Total: <Text style={styles.totalAmount}>${grandTotal.toFixed(2)}</Text>
            </Text>
            <TouchableOpacity
              style={styles.buyNowButton}
              onPress={() => navigation.navigate("PaymentScreen")}
            >
              <LinearGradient
                colors={["#8743FF", "#4136F1"]}
                style={styles.buyNowButtonGradient}
              >
                <Text style={styles.buyNowButtonText}>
                  Buy Now | ${grandTotal.toFixed(2)}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.md,
  },
  heading: {
    fontSize: fontSize.lg,
    fontFamily: fontFamily.Bold,
    color: colors.black,
    marginBottom: spacing.md,
  },
  emptyText: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.Medium,
    color: colors.gray,
    textAlign: "center",
    marginTop: spacing.xl,
  },
  itemContainer: {
    flexDirection: "row",
    marginBottom: spacing.md,
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    height: 80,
    width: 80,
    resizeMode: "cover",
    marginTop: 20,
  },
  infoContainer: {
    flex: 1,
    padding: spacing.md,
    justifyContent: "space-between",
  },
  name: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.SemiBold,
    color: colors.black,
  },
  price: {
    fontSize: fontSize.sm,
    fontFamily: fontFamily.Medium,
    color: colors.purple,
  },
  deleteIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.sm,
  },
  footer: {
    marginTop: spacing.lg,
    padding: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.gray,
  },
  totalText: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.Bold,
    color: colors.black,
    marginBottom: spacing.sm,
    textAlign: "center",
  },
  totalAmount: {
    color: colors.purple,
    fontSize: fontSize.lg,
  },
  buyNowButton: {
    marginTop: spacing.sm,
  },
  buyNowButtonGradient: {
    borderRadius: 8,
    paddingVertical: spacing.md,
    alignItems: "center",
  },
  buyNowButtonText: {
    color: colors.background,
    fontSize: fontSize.md,
    fontFamily: fontFamily.Bold,
  },
});
