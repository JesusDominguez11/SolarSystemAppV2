import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
//context
import { useTheme } from '../../context/ThemeContext';
//styles
import { getThemeStyles } from '../../styles/themeStyles';

const TestScreen = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const styles = getThemeStyles(isDarkMode); 

  return (
    <View 
    style={styles.container}
    >
      <Text style={styles.normalText}>Test Screen</Text>
    </View>
  )
}

export default TestScreen