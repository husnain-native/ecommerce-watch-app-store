import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import { fontSize, spacing } from '../constants/dimensions'
import { fontFamily } from '../constants/fonts';
import { useNavigation } from '@react-navigation/native';

const imageUrl = "https://www.croma.com/apple-watch-se-gps-with-midnight-sport-band-s-m-40mm-retina-ltpo-oled-display-midnight-aluminium-case-/p/309325"
const ProductCard = ({item}) => {
  const navigation = useNavigation();
  const handleProductDetailsScreen = ()=>{
    navigation.navigate("PRODUCT_DETAILS", {item})
  }
  
  return (
    <TouchableOpacity style={styles.container} onPress={handleProductDetailsScreen}>
        <View style={styles.imageWrapper}>
          <Image source={{ uri: item.image}} style={styles.image} />
        </View>
        {/* Content like name price  */}
        <View style={styles.contentContainer}>
           <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
          <Text style={styles.brand}>{item.brand}</Text>
           <Text style={styles.price}>${item.price}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    container:{
        width: "48%",
        // height: 150,
        elevation: 5,
        backgroundColor: colors.background,
        borderRadius: 12,
        marginVertical: spacing.md
    },
    imageWrapper:{
        borderRadius: 12,
        backgroundColor: "#ffc8b7",
        margin: spacing.sm
    },
    image:{
        height: 120,
        width: "100%",
        resizeMode: "center",
    },
    contentContainer:{
      paddingHorizontal: spacing.md,
      paddingBottom: spacing.md,
    },
    name:{
      color: colors.black,
      fontSize: fontSize.md,
      fontFamily: fontFamily.SemiBold
    },
    brand:{
      color: colors.gray,
      fontSize: fontSize.sm,
      fontFamily: fontFamily.Medium,
      paddingVertical: spacing.xs,
    },
    price:{
      color: colors.purple,
      fontSize: fontSize.md,
      fontFamily: fontFamily.Medium
    },
})