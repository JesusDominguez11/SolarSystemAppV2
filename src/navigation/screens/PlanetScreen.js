import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
//components
import Background from '../../components/Background';
//data
import planetData from '../../data/planetData';
//context
import { useTheme } from '../../context/ThemeContext';
//styles
import { getThemeStyles } from '../../styles/themeStyles';
import Model3D from '../../components/Model3D';
import { SafeAreaView } from 'react-native-safe-area-context';
import { withTiming } from 'react-native-reanimated';
import PlanetModel from '../../components/PlanetModel';

const PlanetScreen = ({ route }) => {

  const { isDarkMode, toggleTheme } = useTheme();
  const styles2 = getThemeStyles(isDarkMode);

  const { planetId } = route.params;
  const planet = planetData.find(p => p.id === planetId);

  // Manejar el caso en que no se encuentra el planeta
  if (!planet) {
    return (
      <View >
        <Text>No se encontró el planeta.</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemTitle}>{item.title}: {item.value}</Text>
    </View>
  );

  const data = [
    { title: 'Descripción', value: planet.description },
    { title: 'Distancia del Sol', value: planet.distanceFromSun },
    { title: 'Diámetro', value: planet.diameter },
    { title: 'Masa', value: planet.mass },
    { title: 'Período Orbital', value: planet.orbitalPeriod },
    { title: 'Período de Rotación', value: planet.rotationPeriod },
    { title: 'Atmósfera', value: planet.atmosphere },
    { title: 'Lunas', value: planet.moons },
    { title: 'Temperatura Superficial', value: planet.surfaceTemperature },
    { title: 'Características Notables', value: planet.notableFeatures.join(', ') },
  ];

  return (
    <Background>
      <SafeAreaView >
        <Text style={styles2.title}>{planet.title}</Text>

           {/* Pasa la ruta del modelo y la escala al componente PlanetModel */}
          <PlanetModel modelPath={planet.modelPath} scale={planet.scale} />

        <FlatList style={[ { margin:0, width:'90%', height:'60%', alignSelf:'center'}]}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
        />
      </SafeAreaView>
    </Background>
  );
};

//   return (
//     <Background style={styles2.background.backgroundColor}>
//       <SafeAreaView style={styles2.container}>
//       <Text style={styles.title}>{planet.title}</Text>

//       <View style={styles.imgPlanet}>
//         <Model3D style={{marginBottom: 20}} />
//       </View>      

//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.title}
//       />
//       </SafeAreaView>
//     </Background>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Fondo oscuro
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#ffffff', // Texto blanco
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#1e1e1e', // Fondo de los ítems
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    // Sombras
    shadowColor: '#000', // Color de la sombra
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25, // Opacidad de la sombra
    shadowRadius: 3.5, // Radio de la sombra
    elevation: 5, // Elevación para Android
  },
  itemTitle: {
    fontSize: 16,
    color: '#ffffff', // Texto blanco para ítems
  },
  imgPlanet: {
    width: 300,  // Ajustar el ancho según sea necesario
    height: 300, // Ajustar la altura según sea necesario
    alignSelf: 'center',
  },
});

export default PlanetScreen;
