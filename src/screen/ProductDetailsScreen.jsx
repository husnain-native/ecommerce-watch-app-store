import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useContext } from "react";
import { useRoute } from "@react-navigation/native";

// icons
import AntDesign from "react-native-vector-icons/AntDesign";

// Constants
import { fontSize, iconSize, spacing } from "../constants/dimensions";
import { colors } from "../constants/colors";
import { fontFamily } from "../constants/fonts";

// Components
import Header from "../components/Header";
import ProductCarousel from "../components/ProductCarousel";
import CartButton from "../components/CartButton";

// FavoritesContext
import { FavoritesContext } from "../context/FavoritesContext";
import { useFavorites } from '../context/FavoritesContext';


// Mock Data for Colors
const colorsData = [
  {
    colorName: "Silver",
    colorValue: "#F0F2F2",
  },
  {
    colorName: "Bright Orange",
    colorValue: "#F25745",
  },
  {
    colorName: "Starlight",
    colorValue: "#FAF6F2",
  },
];

const ProductDetailsScreen = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedTab, setSelectedTab] = useState("Details");
  const item = useRoute().params.item; // Retrieve item from route params
  const { addToFavorites, removeFromFavorites, favorites } = useFavorites();; // Access favorites context

  const isFavorite = favorites.some(fav => fav.id === item.id); // Check if item is in favorites

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFromFavorites(item.id); // Remove from favorites if already added
    } else {
      addToFavorites(item); // Add to favorites if not already added

    }
  };

  const renderColorItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.selectColorContainer,
        item.colorValue === selectedColor && {
          borderColor: colors.purple,
          backgroundColor: item.colorValue === selectedColor ? colors.lavendar : 'transparent',
        },
      ]}
      onPress={() => setSelectedColor(item.colorValue)}
    >
      <View
        style={[
          styles.circleColor,
          {
            backgroundColor: item.colorValue,
          },
        ]}
      />
      <Text style={styles.colorText}>{item.colorName}</Text>
    </TouchableOpacity>
  );

  const renderTab = (tabName) => (
    <TouchableOpacity onPress={() => setSelectedTab(tabName)}>
      <Text
        style={[
          styles.tabText,
          selectedTab === tabName && { color: colors.purple },
        ]}
      >
        {tabName}
      </Text>
      {selectedTab === tabName && <View style={styles.underline} />}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
        <Header />
        <ProductCarousel images={item.images} />

        {/* Product Title and Brand */}
        <View style={styles.titleContainer}>
          <View style={styles.titleWrapper}>
            <Text style={styles.productTitle}>{item.name}</Text>
            <Text style={styles.brand}>{item.brand}</Text>
          </View>

          {/* Rating */}
          <View style={styles.ratingWrapper}>
            <AntDesign name={"star"} color={colors.yellow} size={iconSize.sm} />
            <Text style={styles.ratingValue}>4.5</Text>
          </View>
        </View>

        {/* Color Selection */}
        <View style={styles.colorContainer}>
          <Text style={styles.colorHeading}>Colors</Text>
          <FlatList
            data={colorsData}
            renderItem={renderColorItem}
            horizontal
            ItemSeparatorComponent={() => <View style={{ padding: spacing.sm }} />}
          />
        </View>

        {/* Details and Review Tabs */}
        <View style={styles.detailsReviewTabs}>
          {renderTab("Details")}
          {renderTab("Review")}
        </View>

        <Text style={styles.detailsContent}>
          {selectedTab === "Details" ? item.details : item.review}
        </Text>

        {/* Favorite Button */}
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={handleFavoriteToggle}
        >
          <AntDesign
            name={isFavorite ? "heart" : "hearto"}
            size={iconSize.lg}
            color={isFavorite ? colors.purple : colors.gray}
          />
          <Text style={styles.favoriteText}>
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Add to Cart Button */}
      <CartButton item={item} />
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  scrollViewContainer: {
    padding: spacing.md,
  },
  titleContainer: {
    flexDirection: "row",
    marginBottom: spacing.md,
  },
  titleWrapper: {
    flex: 1,
  },
  productTitle: {
    fontFamily: fontFamily.Bold,
    color: colors.black,
    fontSize: fontSize.lg,
  },
  brand: {
    fontFamily: fontFamily.Medium,
    color: colors.gray,
    fontSize: fontSize.sm,
    paddingVertical: spacing.sm,
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    backgroundColor: colors.lavendar,
    borderRadius: spacing.md,
    padding: spacing.sm,
    height: 50,
    marginTop: spacing.md,
  },
  ratingValue: {
    color: colors.gray,
    fontFamily: fontFamily.Medium,
    fontSize: fontSize.md,
  },
  colorContainer: {
    paddingTop: spacing.md,
  },
  colorHeading: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.SemiBold,
    color: colors.black,
    paddingBottom: spacing.md,
  },
  selectColorContainer: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 4,
    padding: spacing.sm,
    flexDirection: "row",
    gap: spacing.sm,
    justifyContent: "center",
    alignItems: "center",
  },
  circleColor: {
    height: spacing.md,
    width: spacing.md,
    backgroundColor: colors.purple,
    borderRadius: spacing.md / 2,
  },
  colorText: {
    fontSize: fontSize.sm,
    fontFamily: fontFamily.Medium,
    color: colors.black,
  },
  detailsReviewTabs: {
    flexDirection: "row",
    paddingTop: spacing.lg,
    gap: spacing.lg,
  },
  tabText: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.Medium,
    color: colors.gray,
  },
  underline: {
    borderBottomColor: colors.purple,
    borderBottomWidth: 2,
    width: "50%",
    marginTop: spacing.xs,
  },
  detailsContent: {
    color: colors.gray,
    fontFamily: fontFamily.Regular,
    fontSize: fontSize.md,
    paddingVertical: spacing.xs,
    paddingBottom: 200,
  },
  favoriteButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  favoriteText: {
    fontSize: fontSize.sm,
    fontFamily: fontFamily.Medium,
    color: colors.purple,
  },
});
