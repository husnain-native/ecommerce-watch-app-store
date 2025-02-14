import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import { iconSize } from '../constants/dimensions';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false); // State to track favorite status

  return (
    <View style={styles.container}>
      {/* Back button */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name={"arrow-back"} size={iconSize.lg} />
      </TouchableOpacity>

      {/* Heart icon button */}
      <TouchableOpacity
        onPress={() => {
          setIsFavorite(!isFavorite); // Toggle favorite state
        }}
      >
        <Ionicons
          name={isFavorite ? "heart" : "heart-outline"} // Toggle icon based on state
          size={iconSize.lg}
          color={isFavorite ? "red" : "black"} // Red when filled, black when outlined
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
});
