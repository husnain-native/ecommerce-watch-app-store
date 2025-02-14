import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { fontSize, iconSize, spacing } from '../constants/dimensions';
import { colors } from '../constants/colors';
import { fontFamily } from '../constants/fonts';
import  Category  from '../components/Category';
import ProductCard from '../components/ProductCard';
import { smartWatch } from '../data/smartwatch';
import { headphones } from '../data/headphones';

const HomeScreen = () => {
  const [data , setData] = useState(smartWatch);
  const [selectedCategory, setSelectedCategory] = useState("Smart Watch")
  const handleUpdateCategory = (newCategory) => {
   if (newCategory === "Smart Watch"){
    setData(smartWatch);
   } else if (newCategory === "Headphones"){
    setData(headphones);
   } 
   setSelectedCategory(newCategory)
  }
  return (
    <View style={styles.container}>
     
        <Text style={styles.heading}>Find your suitable watch now.</Text>
         {/* Search Input */}
      <View style={styles.mainInputContainer}>
        <View style={styles.inputWrapper}>
          <Image source={require("../assets/Search.png")} style={styles.logo}/>
           <TextInput  style={styles.textInput} placeholder='Search prodoct' placeholderTextColor={colors.placeholderText}/>
        </View>
        {/* category container */}
        <View style={styles.categoryContainer}>
           <Image source={require("../assets/category.png")} style={styles.logo}/>

        </View>
      </View>
      
      <FlatList
      ListHeaderComponent={
      
      <Category
      selectedCategory={selectedCategory}
      handleUpdateCategory={handleUpdateCategory}
      />
    
    }
      data={data}
       renderItem={({item, index}) =>
        <ProductCard item={item}/>} 
        numColumns={2} 
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        contentContainerStyle={{
          paddingBottom: 500,
          padding: spacing.sm
        }}
        showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    padding: 10
    
  },
  heading:{
    fontSize: fontSize.xxl,
    color: colors.black,
    // lineHeight: 40,
    fontFamily: fontFamily.Bold
  },
  mainInputContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.xl  ,
    // marginHorizontal: spacing.md
    
  },
  inputWrapper:{
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    borderColor: colors.placeholderText,
    borderRadius: 44,
    paddingHorizontal: spacing.md
  },
  textInput:{
    flex: 1,
    paddingHorizontal: spacing.md,
    fontSize: fontSize.lg,
    fontFamily: fontFamily.Medium,
  },
  logo:{
    height: iconSize.md,
    width: iconSize.md,
  },
  categoryContainer:{
    paddingHorizontal: spacing.sm
  }
})