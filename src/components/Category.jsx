import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import { fontSize, spacing } from '../constants/dimensions'
import { fontFamily } from '../constants/fonts'
import { colors } from '../constants/colors'
import { category } from '../data/category'

const Category = () => {
  // state management
  const [selectedCategory, setSelectedCategory] = useState("Smart Watch")
  const handleSelectedCategory = (category) => {
    setSelectedCategory(category)
  }
  return (
    <FlatList data={category} 
    renderItem={({item, index})=> (
      <TouchableOpacity 
      onPress={() => handleSelectedCategory(item.name)}>
      <Text style={[styles.CategoryText, selectedCategory === item.name && {color: colors.purple}]}>{item.name}</Text>
    {selectedCategory === item.name && <View style={styles.underine} />
  }  
    </TouchableOpacity>
    )}
    keyExtractor={(item) =>item.id}
    horizontal
    ItemSeparatorComponent={
      <View style={{ paddingHorizontal: spacing.sm}}
      />
      
    }
    showsHorizontalScrollIndicator={false}
    />
 
  )
}

export default Category

const styles = StyleSheet.create({
  CategoryText: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.SemiBold,
    color: colors.gray
  },
  underine: {
    borderBottomColor: colors.purple,
    borderBottomWidth: 2,
    width: '50%',
    marginTop: spacing.sm
  }
})