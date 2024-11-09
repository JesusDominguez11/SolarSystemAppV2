import { useEffect } from 'react';

//navigation
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import LoginScreen from "./screens/LoginScreen";
import SigninScreen from "./screens/SigninScreen";

//navigators
import AppNavigator from "./AppNavigator";

import { useTheme } from '../context/ThemeContext';
import { getThemeStyles } from '../styles/themeStyles';

const Stack = createStackNavigator();

const AuthenticationStackNavigator = () => {
  const { isDarkMode } = useTheme();
  const styles = getThemeStyles(isDarkMode);

  return (
    <Stack.Navigator
    initialRouteName='AuthenticationScreen'
    screenOptions={{
      headerStyle: {
        backgroundColor: isDarkMode ? '#121212' : '#f2f2f2',
      },
      headerTintColor: isDarkMode ? '#FFFFFF' : '#333333',
    }}>
      <Stack.Screen
        name='AuthenticationBottomTabNavigator'
        component={AuthenticationBottomTabNavigator}
        options={{ headerShown: false }}/>
      <Stack.Screen
        name='HomeScreen'
        component={AppNavigator}
        options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

function AuthenticationBottomTabNavigator() {
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

  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
         backgroundColor: styles.tabBarBackgroundColor,
          borderTopWidth: 0, // Quita el borde superior
      },
      tabBarActiveTintColor: styles.tabBarActiveTintColor,
      tabBarInactiveTintColor: styles.tabBarInactiveTintColor,
      tabBarLabelStyle: {
          fontSize: 14, // Tamaño de fuente de las etiquetas
          paddingVertical: 16, // Ajusta el espacio vertical para centrar el texto
          textAlign: 'center', // Asegura que el texto esté centrado
      },
      tabBarIconStyle: {
        shadowColor: styles.tabBarIconShadowColor,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 5, // Elevación para Android
          display: "none",
      },
  }}
    >
      <Tab.Screen name="Iniciar sesión" component={LoginScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Registrarse" component={SigninScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}


export default function AuthenticationNavigator() {
  return (
    <AuthenticationStackNavigator/>
  );
}