//import { StyleSheet, Text, View, StatusBar } from 'react-native';
//navigation
import { NavigationContainer } from '@react-navigation/native'; //<NavigationContainer>
//screen controllers
import AuthenticationNavigator from './src/navigation/AuthenticationNavigator';
//context
import { ThemeProvider } from './src/context/ThemeContext';

export default function App() {

  return (
    <ThemeProvider>
      <NavigationContainer>        
          <AuthenticationNavigator />               
      </NavigationContainer>
      </ThemeProvider>
  );
}