import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

//screens
import MapScreen from './screens/MapScreen';
import PlanetScreen from './screens/PlanetScreen';
import TestScreen from './screens/TestScreen';
import SettingsScreen from './screens/SettingsScreen';

// navigation
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderTitle } from '@react-navigation/elements';

import { useTheme } from '../context/ThemeContext';
import { getThemeStyles } from '../styles/themeStyles';
// import MusicPlayer from '../components/MusicPlayer';
import { MusicPlayerProvider } from '../context/MusicPlayerContext';

// import { Animated } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GalaxyIcon from '../components/GalaxyIcon';
import SettingsIcon from '../components/SettingsIcon';

import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming } from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

function AppDrawerNavigator() {

  const { isDarkMode } = useTheme();
  const styles = getThemeStyles(isDarkMode);

  return (
    <Drawer.Navigator          
      screenOptions={{
        drawerStyle: {
          backgroundColor: styles.background.drawerBackground,
          width: 200, // Ancho del drawer,
        },
        headerShown: false,
        drawerActiveTintColor: styles.colors.activeTintColor, // Color del texto activo
        drawerInactiveTintColor: styles.colors.inactiveTintColor, // Color del texto inactivo
        drawerItemStyle: {
          // Estilo para los elementos del drawer
          borderRadius: 5, // Bordes redondeados si lo deseas
        },
        drawerItemLabelStyle: {
          // Estilo para la etiqueta del elemento
          color: styles.colors.inactiveTintColor, // Color del texto por defecto
        },
        // Puedes usar un color específico para el fondo del elemento activo
        drawerActiveBackgroundColor: styles.colors.activeBackgroundColor, // Color de fondo del elemento activo
      }}
    >
      <Drawer.Screen name="Inicio" component={AppTabNavigator} />
      <Drawer.Screen name="Ajustes" component={SettingsScreen}  />
    </Drawer.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function AppTabNavigator() {
  const { isDarkMode } = useTheme();
  const styles = getThemeStyles(isDarkMode);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: styles.tabBarBackgroundColor,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: styles.tabBarActiveTintColor,
        tabBarInactiveTintColor: styles.tabBarInactiveTintColor,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          if (route.name === 'Map Screen') {
            return <GalaxyIcon focused={focused} />; // Icono de galaxia animado
          } else if (route.name === 'Settings') {
            return <SettingsIcon focused={focused} />;
          }
        },
      })}
    >
      <Tab.Screen name="Map Screen" component={MapStackNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}


const Stack = createStackNavigator();

// Component
const MapStackNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName='MapScreen'>
      <Stack.Screen
        name='MapScreen'
        component={MapScreen}
        options={{ headerShown: false }}/>
      <Stack.Screen
        name='TestScreen'
        component={TestScreen}
        options={{ headerShown: false }}/>
      <Stack.Screen
        name='PlanetScreen'
        component={PlanetScreen}
        options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

export default function AppNavigator() {
  return (
    <MusicPlayerProvider>
    <AppDrawerNavigator/>
    </MusicPlayerProvider>
  );
}