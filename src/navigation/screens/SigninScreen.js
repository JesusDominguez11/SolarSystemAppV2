import React, { useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { useTheme } from '@react-navigation/native';
// Componentes personalizados
import Background from '../../components/Background';
import ThemedTextInput from '../../components/Themed/ThemedTextInput';
import ThemedButton from '../../components/Themed/ThemedButton';
// Contexto de tema
import { useTheme } from '../../context/ThemeContext';
//Estilos
import { getThemeStyles } from '../../styles/themeStyles';

const SigninScreen = () => {
  // const { colors, dark } = useTheme();
  
  const { forceDarkMode, setForceDark } = useTheme();
  const styles = getThemeStyles(forceDarkMode); // Usamos el estado de forzado

  useEffect(() => {
    setForceDark(true); // Forzar el modo oscuro al cargar
    return () => {
      setForceDark(false); // Restaurar el modo original al salir
    };
  }, []);

  return (
    <Background>
      <SafeAreaView style={[styles.container]}>
        <Text style={[styles.title]}>Crear una Cuenta</Text>
        
        <ThemedTextInput placeholder="Nombre de usuario" />
        <ThemedTextInput placeholder="Correo electrónico" keyboardType="email-address" />
        <ThemedTextInput placeholder="Contraseña" secureTextEntry />
        
        <ThemedButton title="Registrarse" onPress={() => alert('Registro exitoso')} />
        
        <Text style={[styles.normalText]}>¿Ya tienes una cuenta? Inicia sesión</Text>
      </SafeAreaView>
    </Background>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   footerText: {
//     marginTop: 20,
//     fontSize: 14,
//   },
// });

export default SigninScreen;
