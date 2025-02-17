import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CartProvider } from './src/context/CartContext';
import { FavoritesProvider } from './src/context/FavoritesContext'; // Import FavoritesProvider
import BottomTabNavigator from './navigation/BottomTabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetailsScreen from './src/screen/ProductDetailsScreen';
import PaymentScreen from './src/screen/PaymentScreen';
import CartScreen from './src/screen/CartScreen';
import SignUpScreen from './src/screen/SignUpScreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <FavoritesProvider> {/* Wrap in FavoritesProvider */}
      <CartProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* Bottom Tab Navigator for Home, Cart, Liked, and Account */}
            <Stack.Screen name="HomeTabs" component={BottomTabNavigator} />

            {/* Stack Screens for Product Details and Payment */}
            <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
            <Stack.Screen name="CART" component={CartScreen} />
            <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
            <Stack.Screen name="SIGNUP" component={SignUpScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </FavoritesProvider>
  );
};

export default App;
