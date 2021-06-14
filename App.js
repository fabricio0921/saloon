
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home';
import Menu from './src/pages/Menu';
import HorariosDisponiveis from './src/pages/HorariosDisponiveis';
import Tabs from './src/pages/tabs';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="HorariosDisponiveis" component={HorariosDisponiveis} />
        <Stack.Screen name="Tabs" component={Tabs} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


