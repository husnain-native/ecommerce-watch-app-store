import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screen/HomeScreen';
import ProductDetailsScreen from './src/screen/ProductDetailsScreen';
import CartScreen from './src/screen/CartScreen';
import { CartProvider } from './src/context/CartContext';
import PaymentScreen from './src/screen/PaymentScreen';
import BottomTabNavigator from './navigation/BottomTabNavigator';


const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          
          <Stack.Screen name="HOME" component={HomeScreen} />
          <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
          <Stack.Screen name="CART" component={CartScreen} />
          
          <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
