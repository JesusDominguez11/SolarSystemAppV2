// ThemedTextInput.js
import React from 'react';
import { TextInput } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useTheme } from '../../context/ThemeContext';
import { getThemeStyles } from '../../styles/themeStyles';

const ThemedTextInput = ({ placeholder, value, onChangeText }) => {
  const { isDarkMode, forceDarkMode } = useTheme();
  const styles = getThemeStyles(forceDarkMode || isDarkMode);

  // Animación de enfoque
  const scale = useSharedValue(1);

  // Estilos animados
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handleFocus = () => {
    scale.value = withTiming(1.02, { duration: 150 });
  };

  const handleBlur = () => {
    scale.value = withTiming(1, { duration: 150 });
  };

  return (
    <Animated.View style={[styles.textInputContainer, animatedStyle]}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={isDarkMode ? '#888' : '#555'}
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Animated.View>
  );
};

export default ThemedTextInput;
