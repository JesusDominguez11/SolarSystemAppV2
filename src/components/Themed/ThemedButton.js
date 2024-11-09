// ThemedButton.js
import React from 'react';
import { Text, Pressable } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useTheme } from '../../context/ThemeContext'; // O la fuente de tu tema dinámico
import { getThemeStyles } from '../../styles/themeStyles';

const ThemedButton = ({ onPress, title }) => {
  const { isDarkMode, forceDarkMode } = useTheme();
  const styles = getThemeStyles(forceDarkMode || isDarkMode);
  // console.log(isDarkMode, forceDarkMode);
  // Valores para animación
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  // Estilos animados para el botón
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  const handlePressIn = () => {
    scale.value = withTiming(0.98, { duration: 150 });
    opacity.value = withTiming(0.85, { duration: 150 });
  };

  const handlePressOut = () => {
    scale.value = withTiming(1, { duration: 150 });
    opacity.value = withTiming(1, { duration: 150 });
  };

  return (
    <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut} onPress={onPress}>
      <Animated.View style={[styles.button, animatedStyle]}>
        <Text style={styles.buttonText}>{title}</Text>
      </Animated.View>
    </Pressable>
  );
};

export default ThemedButton;
