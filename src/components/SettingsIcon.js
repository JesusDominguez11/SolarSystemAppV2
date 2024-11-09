import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming } from 'react-native-reanimated';
import Svg, { G, Circle, Path, Defs, RadialGradient, Stop } from 'react-native-svg';

const SettingsIcon = ({ focused }) => {
  const rotationBig = useSharedValue(0);
  const rotationSmall = useSharedValue(0);

  useEffect(() => {
    if (focused) {
      // Rotación infinita de los engranajes en direcciones opuestas
      rotationBig.value = withRepeat(withTiming(360, { duration: 5000 }), -1, false);
      rotationSmall.value = withRepeat(withTiming(-360, { duration: 5000 }), -1, false);
    } else {
      rotationBig.value = withTiming(0, { duration: 500 });
      rotationSmall.value = withTiming(0, { duration: 500 });
    }
  }, [focused]);

  const animatedStyleBig = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationBig.value}deg` }],
  }));

  const animatedStyleSmall = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationSmall.value}deg` }],
  }));

  return (
    <View style={{ width: 70, height: 70, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
      {/* Fondo con gradiente radial en el centro entre los engranajes */}
      <Svg width="70" height="70" viewBox="0 0 70 70" style={{ position: 'absolute' }}>
        <Defs>
          <RadialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <Stop offset="0%" stopColor="#800080" stopOpacity="1" />
            <Stop offset="100%" stopColor="#4B0082" stopOpacity="1" />
          </RadialGradient>
        </Defs>
        {/* Círculo central con gradiente radial */}
        <Circle cx="44" cy="35" r="22" fill="url(#grad1)" />
      </Svg>

      {/* Engranaje grande (principal) */}
      <Animated.View style={[{ position: 'absolute', width: 40, height: 40 }, animatedStyleBig]}>
        <Svg width="40" height="40" viewBox="0 0 50 50">
          <G fill="#B0B0B0">
            <Path d="
              M25,5 
              L27,9 
              L32,10 
              L35,7 
              L39,11 
              L36,14 
              L37,19 
              L41,21 
              L38,25 
              L41,29 
              L37,31 
              L36,36 
              L39,39 
              L35,42 
              L32,39 
              L27,40 
              L25,45 
              L23,40 
              L18,39 
              L15,42 
              L11,39 
              L14,36 
              L13,31 
              L9,29 
              L12,25 
              L9,21 
              L13,19 
              L14,14 
              L11,11 
              L15,7 
              L18,10 
              L23,9 
              Z" 
            />
          </G>
          <Circle cx="25" cy="25" r="6" fill="#800080" />
        </Svg>
      </Animated.View>

      {/* Engranaje pequeño (secundario) */}
      <Animated.View style={[{ position: 'absolute', width: 30, height: 30, left: 42 }, animatedStyleSmall]}>
        <Svg width="30" height="30" viewBox="0 0 30 30">
          <G fill="#800080">
            <Path d="
              M15,3 
              L16,5 
              L19,6 
              L21,4 
              L24,6 
              L22,8 
              L23,11 
              L26,12 
              L24,15 
              L26,18 
              L23,19 
              L22,22 
              L24,24 
              L21,26 
              L19,24 
              L16,25 
              L15,27 
              L14,25 
              L11,24 
              L9,26 
              L6,24 
              L8,22 
              L7,19 
              L4,18 
              L6,15 
              L4,12 
              L7,11 
              L8,8 
              L6,6 
              L9,4 
              L11,6 
              L14,5 
              Z" 
            />
          </G>
          <Circle cx="15" cy="15" r="4" fill="#FFD700" />
        </Svg>
      </Animated.View>
    </View>
  );
};

export default SettingsIcon;
