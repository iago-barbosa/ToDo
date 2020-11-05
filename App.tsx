import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from './src/Routes/DrawerNav/routes';

export default function App() {
  return (
    <NavigationContainer>
        <DrawerNav />
    </NavigationContainer>
  );
}

