// themeStyles.js
import { StyleSheet } from 'react-native';

const commonStyles = {
  colors:{
    activeTintColor: '#FF0000', // Color del texto activo
    inactiveTintColor: '#FFFFFF', // Color del texto inactivo ////////////////////////
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    drawerBackground: '#FFFFFF', // Fondo del drawer en modo claro
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    // marginTop: 20,
    padding: 20,
    // marginBottom: 20,
  },
  normalText: {
    fontSize: 14,
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  textInputContainer: {
    width: '90%',
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  textInput: {
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
  },
};

const lightTheme = {
  ...commonStyles,
  colors:{
    ...commonStyles.colors,
    color: '#C7C7C7',
    activeTintColor: '#C7C7C7', // Color del texto activo
    inactiveTintColor: '#1D1D1D', // Color del texto inactivo ////////////////////////
    activeBackgroundColor: '#1D1D1D', // Color de fondo del elemento activo
  },
  background: {
    ...commonStyles.background,
    backgroundColor: 'rgba(124, 124, 124, 0)',
    drawerBackground: '#C7C7C7', // Fondo blanco para el drawer claro
  },
  title: {
    ...commonStyles.title,
    color: '#333232',
  },
  normalText: {
    ...commonStyles.normalText,
    color: '#333232',
  },
  button: {
    ...commonStyles.button,
    backgroundColor: '#FFFFFF',
    borderColor: '#D3D3D3',
    borderWidth: 1,
  },
  buttonText: {
    ...commonStyles.buttonText,
    color: '#333',
  },
  textInputContainer: {
    ...commonStyles.textInputContainer,
    backgroundColor: '#e0e0e0',
  },
  textInput: {
    ...commonStyles.textInput,
    backgroundColor: '#fff',
    color: '#333',
    borderColor: '#ddd',
    borderWidth: 1,
  },

    // Estilos específicos para la navegación en modo claro
    tabBarBackgroundColor: '#B6B6B6',
    tabBarActiveTintColor: '#333333',
    tabBarInactiveTintColor: '#888888',
    tabBarIconShadowColor: '#333',
    headerBackgroundColor: '#f2f2f2',
    headerTintColor: '#333333',
};

const darkTheme = {
  ...commonStyles,
  colors:{
    ...commonStyles.colors,
    color: '#1D1D1D',
    activeTintColor: '#121212', // Color del texto activo
    inactiveTintColor: '#C7C7C7', // Color del texto inactivo ////////////////////////
    activeBackgroundColor: '#C7C7C7', // Color de fondo del elemento activo
  },
  background: {
    ...commonStyles.background,
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    drawerBackground: '#121212', // Fondo oscuro para el drawer
  },
  title: {
    ...commonStyles.title,
    color: '#F0F0F0',
  },
  normalText: {
    ...commonStyles.normalText,
    color: '#F0F0F0',
  },
  button: {
    ...commonStyles.button,
    backgroundColor: '#333333',
    borderColor: '#444',
    borderWidth: 1,
  },
  buttonText: {
    ...commonStyles.buttonText,
    color: '#FFFFFF',
  },
  textInputContainer: {
    ...commonStyles.textInputContainer,
    backgroundColor: '#333333',
  },
  textInput: {
    ...commonStyles.textInput,
    backgroundColor: '#444',
    color: '#fff',
    borderColor: '#555',
    borderWidth: 1,
  },

    // Estilos específicos para la navegación en modo oscuro
    tabBarBackgroundColor: '#161616',
    tabBarActiveTintColor: '#FFFFFF',
    tabBarInactiveTintColor: '#888888',
    tabBarIconShadowColor: '#FFFFFF',
    headerBackgroundColor: '#121212',
    headerTintColor: '#FFFFFF',
};

export const getThemeStyles = (isDarkMode) => (isDarkMode ? darkTheme : lightTheme);
