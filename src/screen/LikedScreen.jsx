// Likes.js

import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useFavorites } from "../context/FavoritesContext"; // Import the context

const Likes = () => {
  const { favorites } = useFavorites(); // Access favorites from context

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          renderItem={({ item }) => (
            <View style={styles.productContainer}>
              <Text>{item.name}</Text>
              {/* You can render more product details here */}
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text>No favorites yet.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  productContainer: {
    marginVertical: 10,
  },
});

export default Likes;
