import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screen/HomeScreen';
import ProductDetailsScreen from './src/screen/ProductDetailsScreen';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='HOME' component={HomeScreen} />  
      <Stack.Screen name='PRODUCT_DETAILS' component={ProductDetailsScreen} />  
      </Stack.Navigator> 
    </NavigationContainer>
  )
}

export default App; 