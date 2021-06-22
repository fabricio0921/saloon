
import React from 'react';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Store from './Store';
import Stories from './Stories';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Horários Disponiveis" component={Home} options={
        {tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clock" color='#6588A6' size={30} />
          ),}
      } />
      <Tab.Screen name="Horários Marcados" component={Store} options={
        {tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="pencil" color='#6588A6' size={30} />
          ),}
      }/>
      <Tab.Screen name="Meu Histórico" component={Stories} options={
        {tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="archive" color='#6588A6' size={30} />
          ),
          tabBarBadge: 3,
          }
      }/>

    </Tab.Navigator>
  );
}







