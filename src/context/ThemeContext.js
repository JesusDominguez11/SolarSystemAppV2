// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';
// import { useColorScheme } from 'react-native';

// Crear el contexto de tema
const ThemeContext = createContext();

// Proveedor de tema que envolverá la app
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [forceDarkMode, setForceDarkMode] = useState(false); // Nuevo estado

  // Función para alternar entre modos
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const setForceDark = (value) => {
    setForceDarkMode(value); // Método para forzar el modo oscuro
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, forceDarkMode, setForceDark }}>
      {children}
    </ThemeContext.Provider>

  );
};

// Hook personalizado para acceder al tema desde cualquier componente
export const useTheme = () =>  useContext(ThemeContext);
