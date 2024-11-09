import React, { useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { useTheme } from '@react-navigation/native';
// Componentes personalizados
import Background from '../../components/Background';
import ThemedButton from '../../components/Themed/ThemedButton';
import ThemedTextInput from '../../components/Themed/ThemedTextInput';
// Navegación
import { useNavigation } from '@react-navigation/native';
// Contexto de tema
import { useTheme } from '../../context/ThemeContext';
//Estilos
import { getThemeStyles } from '../../styles/themeStyles';

const LoginScreen = () => {
  // const { isDarkMode } = useTheme();
  // const styles = getThemeStyles(isDarkMode); 

  const { forceDarkMode, setForceDark } = useTheme();
  const styles = getThemeStyles(forceDarkMode); // Usamos el estado de forzado

  useEffect(() => {
    setForceDark(true); // Forzar el modo oscuro al cargar
    return () => {
      setForceDark(false); // Restaurar el modo original al salir
    };
  }, []);

  const navigation = useNavigation();

  return (
    <Background>
      <SafeAreaView style={[styles.container]}>
        <Text style={[styles.title]}>Iniciar sesión</Text>
        
        <ThemedTextInput placeholder="Usuario" />
        <ThemedTextInput placeholder="Contraseña" secureTextEntry />
        
        {/* <ThemedButton title="Iniciar Sesión" onPress={() => alert('Sesión iniciada')} /> */}
        <ThemedButton title="Entrar como invitado" onPress={() => navigation.navigate('HomeScreen')} />

        <Text style={[styles.normalText]}>
          ¿Olvidaste tu contraseña?
        </Text>
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

export default LoginScreen;
