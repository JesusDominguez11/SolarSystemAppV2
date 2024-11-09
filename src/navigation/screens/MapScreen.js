// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView,
  StatusBar, FlatList, 
  ImageBackground} from 'react-native';
//navigation
import { useNavigation } from '@react-navigation/native';
// components
import SolarSystem from '../../components/SolarSystem';
import Background from '../../components/Background';
//context
import { useTheme } from '../../context/ThemeContext';
//styles
import { getThemeStyles } from '../../styles/themeStyles';

const MapScreen = () => {
  
  const { isDarkMode, toggleTheme } = useTheme();
  const styles = getThemeStyles(isDarkMode); 
  
  const navigation = useNavigation();

  return (
    <Background style={[styles.background]}>
    <SafeAreaView style={[styles.container, {backgroundColor: styles.background.backgroundColor}]}>
      <SolarSystem navigation={navigation}/>
  </SafeAreaView>
  </Background>
  )
}

export default MapScreen


