import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';

//components
import Planet from './Planet';
import Orbit from './Orbit';
import Sun from './Sun';

const { width } = Dimensions.get('window'); // Obtener el ancho de la pantalla

const SolarSystem = ({ navigation }) => {
  const factorAceleration = 60;

  return (
    <View style={styles.container}>
      {/* Sol */}
      <Sun id={0}/>

      {/* Planetas internos */}
      <Orbit radius={width * 0.08} /> 
      <Planet id={1} name="Mercurio" radius={width * 0.08} size={12} color="gray" rotationSpeed={88 * factorAceleration} navigation={navigation} /> 
      
      <Orbit radius={width * 0.12} />
      <Planet id={2} name="Venus" radius={width * 0.12} size={16} color="#e1ad01" rotationSpeed={225 * factorAceleration} navigation={navigation} /> 
      
      <Orbit radius={width * 0.165} /> 
      <Planet id={3} name="Tierra" radius={width * 0.165} size={16} color="#3b82f6" rotationSpeed={365.25 * factorAceleration} navigation={navigation} /> 
      
      <Orbit radius={width * 0.205} /> 
      <Planet id={4} name="Marte" radius={width * 0.205} size={12} color="#d14c32" rotationSpeed={687 * factorAceleration} navigation={navigation} /> 

      {/* Planetas externos */}
      <Orbit radius={width * 0.260} /> 
      <Planet id={5} name="Júpiter" radius={width * 0.260} size={28} color="#d1a760" rotationSpeed={(4333 * factorAceleration) / 10} hasRings={true} navigation={navigation} />
      
      <Orbit radius={width * 0.335} /> 
      <Planet id={6} name="Saturno" radius={width * 0.335} size={28} color="#f4c542" rotationSpeed={(10759 * factorAceleration) / 10} hasRings={true} navigation={navigation} />
      
      <Orbit radius={width * 0.400} /> 
      <Planet id={7} name="Urano" radius={width * 0.400} size={20} color="#5f9cf5" rotationSpeed={(30687 * factorAceleration) / 10} hasRings={true} navigation={navigation} />
      
      <Orbit radius={width * 0.450} /> 
      <Planet id={8} name="Neptuno" radius={width * 0.450} size={20} color="#4b7fff" rotationSpeed={(60190 * factorAceleration) / 10} navigation={navigation} />

      <Orbit radius={width * 0.490} /> 
      <Planet id={9} name="Plutón" radius={width * 0.490} size={8} color="#c0c0c0" rotationSpeed={(90560 * factorAceleration) / 100} navigation={navigation} />

      <Orbit radius={width * 0.520} /> 
      <Planet id={10} name="Eris" radius={width * 0.520} size={8} color="#a8a8a8" rotationSpeed={203100 * factorAceleration / 100} navigation={navigation} />

      <Orbit radius={width * 0.540} /> 
      <Planet id={11} name="Sedna" radius={width * 0.540} size={8} color="#b0b0b0" rotationSpeed={4559000 * factorAceleration / 100} navigation={navigation} />
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'black',
  },
});

export default SolarSystem;








