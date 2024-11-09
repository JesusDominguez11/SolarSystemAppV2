import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { withSpring, useSharedValue, useAnimatedStyle, withRepeat, withTiming } from 'react-native-reanimated';
import Svg, { Circle, Defs, RadialGradient, Stop } from 'react-native-svg';

const GalaxyIcon = ({ focused }) => {
  const rotation = useSharedValue(0);

  useEffect(() => {
    if (focused) {
      rotation.value = withRepeat(withTiming(360, { duration: 6000 }), -1, true);
    } else {
      rotation.value = withTiming(0, { duration: 500 });
    }
  }, [focused]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  return (
    <Animated.View style={[{ width: 50, height: 50 }, animatedStyle]}>
      <Svg width="50" height="50" viewBox="0 0 50 50">
        {/* Gradiente radial para el fondo del torbellino */}
        <Defs>
          <RadialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <Stop offset="0%" stopColor="#800080" stopOpacity="1" />
            <Stop offset="100%" stopColor="#4B0082" stopOpacity="1" />
          </RadialGradient>
        </Defs>

        {/* Fondo sólido del torbellino con gradiente radial */}
        <Circle cx="25" cy="25" r="20" fill="url(#grad1)" />

        {/* Anillos internos */}
        <Circle cx="25" cy="25" r="2" fill="#FFD700" />
        <Circle cx="25" cy="25" r="6" stroke="#FFD700" strokeWidth="1.5" fill="none" />
        <Circle cx="25" cy="25" r="10" stroke="#FFD700" strokeWidth="1.5" fill="none" />
        <Circle cx="25" cy="25" r="14" stroke="#FFD700" strokeWidth="1.5" fill="none" />

        {/* Puntos exteriores de la espiral */}
        <Circle cx="10" cy="15" r="1.5" fill="#FFD700" />
        <Circle cx="20" cy="40" r="1.5" fill="#FFD700" />
        <Circle cx="35" cy="10" r="1.5" fill="#FFD700" />
        <Circle cx="40" cy="35" r="1.5" fill="#FFD700" />

        {/* Estrellas brillantes */}
        <Circle cx="5" cy="10" r="0.8" fill="#fff" opacity="0.8" />
        <Circle cx="45" cy="20" r="1" fill="#fff" opacity="0.7" />
        <Circle cx="25" cy="5" r="0.6" fill="#fff" opacity="0.9" />
        <Circle cx="40" cy="10" r="0.7" fill="#fff" opacity="0.6" />
        <Circle cx="15" cy="35" r="1.2" fill="#fff" opacity="0.5" />
      </Svg>
    </Animated.View>
  );
};

export default GalaxyIcon;
