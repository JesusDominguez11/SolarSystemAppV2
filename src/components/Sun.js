import React from 'react';
import { StyleSheet, Alert, View, TouchableWithoutFeedback } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat, interpolate, Easing } from 'react-native-reanimated';

const Sun = () => {
  const pulse = useSharedValue(1);

  // Animación de pulso
  const pulseStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: pulse.value }],
      opacity: interpolate(pulse.value, [1, 1.5], [1, 0.6]),
    };
  });

  // Efecto de expansión y contracción
  React.useEffect(() => {
    pulse.value = withRepeat(
      withTiming(1.5, {
        duration: 1200,
        easing: Easing.ease,
      }),
      -1,
      true
    );
  }, []);

  // Función para manejar el clic en el Sol
  const handlePress = () => {
    Alert.alert("Sol", "Has tocado el Sol.");
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {/* Plasma animado alrededor del Sol */}
        <Animated.View style={[styles.pulse, pulseStyle]} />
        
        {/* Sol principal */}
        <View style={styles.sun} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  sun: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'orange',
    shadowColor: 'yellow',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  pulse: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 140, 0, 0.6)',
  },
});

export default Sun;
