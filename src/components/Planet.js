import React, { useEffect } from 'react';
import { StyleSheet, Alert, TouchableWithoutFeedback } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming, Easing } from 'react-native-reanimated';

const Planet = ({ id, name, radius, size, color, rotationSpeed, navigation }) => {
    const angle = useSharedValue(0);

    // Animación de rotación alrededor del Sol
  const planetStyle = useAnimatedStyle(() => {
    const x = Math.cos(angle.value) * radius;
    const y = Math.sin(angle.value) * radius;

    return {
      transform: [
        { translateX: x }, 
        { translateY: y }
      ],
    };
  });

  // Animación continua para la rotación sin "saltos"
  useEffect(() => {
    angle.value = withRepeat(
      withTiming(angle.value + Math.PI * 2, { duration: rotationSpeed, easing: Easing.linear }),
      -1,
      false  // Sin revertir la animación
    );
  }, []);

  // Función que se activa al hacer clic en el planeta
  const handlePlanetPress = () => {
    // Alert.alert(name, `Has tocado el planeta ${name} (ID: ${id}). `);
    navigation.navigate("PlanetScreen", { planetId : id });
  };

  return (
    <TouchableWithoutFeedback onPress={handlePlanetPress}>
      <Animated.View style={[styles.planet, planetStyle, { width: size, height: size, backgroundColor: color, borderRadius: size / 2 }]} />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  planet: {
    position: 'absolute',  // Para que se posicione en la órbita
  },
});

export default Planet;