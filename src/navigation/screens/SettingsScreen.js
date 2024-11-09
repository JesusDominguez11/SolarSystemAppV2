// SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
//context
import { useTheme } from '../../context/ThemeContext';
//styles
import { getThemeStyles } from '../../styles/themeStyles';

// import MusicPlayer from '../../components/MusicPlayer';

const SettingsScreen = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const styles = getThemeStyles(isDarkMode); 

  return (
    <View style={[styles.container, {backgroundColor: styles.colors.color}]}>
      <Text style={styles.title}>Ajustes</Text>
      <View>
        <Text style={styles.normalText}>{isDarkMode ? 'Modo Oscuro' : 'Modo Claro'}</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          thumbColor={isDarkMode ? '#fff' : '#121212'}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
        />
        {/* <MusicPlayer/> */}
      </View>
    </View>
  );
};

export default SettingsScreen;