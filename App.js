import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import registrarUsuario from './src/screens/registrarUsuario'
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function App() {
  return (
    //Cambiar mi pantalla por la suya cuando este la pantalla principal alli si la pone de una vez para yo ir haciendo  la navegacion
    /*<NavigationContainer>

        <Stack.Navigator initialRouteName="registrarUsuario" headerMode = 'none'>
          <Stack.Screen name="registrarUsuario" component={registrarUsuario} />
         
        </Stack.Navigator>
          
      </NavigationContainer>*/      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
