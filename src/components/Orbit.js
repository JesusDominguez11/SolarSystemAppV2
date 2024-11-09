// Orbit.js
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Orbit = ({ radius }) => {
  return (
    <View style={[styles.orbit, { width: radius * 2, height: radius * 2 }]} pointerEvents="none" />
  );
};

const styles = StyleSheet.create({
  orbit: {
    position: 'absolute',
    borderRadius: 1000, // Para que sea un círculo
    borderColor: 'white', // Color de la estela
    borderWidth: 1, // Grosor de la estela
    opacity: 0.5, // Transparencia
  },
});

export default Orbit;
