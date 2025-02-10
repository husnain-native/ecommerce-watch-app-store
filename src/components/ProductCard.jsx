import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import { fontSize, spacing } from '../constants/dimensions'
import { fontFamily } from '../constants/fonts'

const imageUrl = "https://www.croma.com/apple-watch-se-gps-with-midnight-sport-band-s-m-40mm-retina-ltpo-oled-display-midnight-aluminium-case-/p/309325"
const ProductCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image source={require("../assets/watch1.webp")} style={styles.image} />
        </View>
        {/* Content like name price  */}
        <View style={styles.contentContainer}>
           <Text style={styles.name}>Apple Watch Ultra</Text>
           <Text style={styles.brand}>Apple</Text>
           <Text style={styles.price}>$100</Text>
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