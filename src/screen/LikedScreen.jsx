import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useFavorites } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext"; // Assuming you have a CartContext
import { colors } from "../constants/colors";
import { fontSize, spacing } from "../constants/dimensions";
import { fontFamily } from "../constants/fonts";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

const LikedScreen = () => {
  const { favorites, removeFromFavorites, addToFavorites } = useFavorites();
  const { addToCart, cartItems } = useCart(); // Use the CartContext for adding items to the cart and access cart items
  const navigation = useNavigation();

  // Calculate the total price of items in the favorites list
  const grandTotal = favorites.reduce((total, item) => total + item.price, 0);

  const handleFavoriteToggle = (item) => {
    if (favorites.some(fav => fav.id === item.id)) {
      removeFromFavorites(item.id); // Remove from favorites
    } else {
      addToFavorites(item); // Add to favorites
    }
  };

  const handleAddToCart = (item) => {
    addToCart(item); // Add item to cart
  };

  const isItemInCart = (item) => {
    return cartItems.some(cartItem => cartItem.id === item.id);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name={"arrowleft"} size={34} color={colors.black} />
      </TouchableOpacity>
      <Text style={styles.heading}>My Favorites</Text>
      {favorites.length === 0 ? (
        <Text style={styles.emptyText}>You have no favorites yet!</Text>
      ) : (
        <>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={favorites}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            renderItem={({ item }) => (
              <View style={{ ...styles.itemContainer, backgroundColor: colors.lightGray }}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.infoContainer}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.price}>${item.price}</Text>
                </View>
                <View style={styles.iconContainer}>
                  <TouchableOpacity
                    style={styles.favoriteIconContainer}
                    onPress={() => handleFavoriteToggle(item)}
                  >
                    <AntDesign
                      name={favorites.some(fav => fav.id === item.id) ? "heart" : "hearto"}
                      size={25}
                      color={favorites.some(fav => fav.id === item.id) ? '#cc0606' : colors.gray}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.addToCartButton}
                    onPress={() => handleAddToCart(item)}
                  >
                    <FontAwesome6
                      name="cart-plus"
                      size={25}
                      color={isItemInCart(item) ? '#115c2b' : colors.white} // Change color if item is in cart
                    />
                  </TouchableOpacity>
                </View>
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
                <Text style={styles.buyNowButtonText}>Proceed to Checkout</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default LikedScreen;

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
    marginVertical: spacing.md,
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
    borderBottomWidth: 1,
    borderBottomColor: '#d4d2d2',
    paddingBottom: spacing.md,
    
  },
  image: {
    height: 80,
    width: 80,
    resizeMode: "cover",
    marginTop: 20,
  },
  infoContainer: {
    flex: 1,
    paddingS: spacing.md,
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
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.sm,
  },
  favoriteIconContainer: {},
  addToCartButton: {
    borderRadius: 8,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    alignItems: "center",
    justifyContent: "center",
  },
  addToCartButtonText: {
    color: colors.background,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.Bold,
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
