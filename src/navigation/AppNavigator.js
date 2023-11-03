import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import CreateScreen from '../screens/CreateScreen';

export default function AppNavigator() {
  const Tab = createBottomTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          showIcon: true,
          tabBarLabel: () => null,
          tabBarStyle: {
            height: 60,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color }) => <Ionicons name="home" size={24} color={focused ? '#081f46' : '#b1abb8'} />,
          }}
        />

        <Tab.Screen
          name="Create"
          component={CreateScreen} 
          options={{
            tabBarIcon: ({ focused, color }) => <Ionicons name="create" size={24} color={focused ? '#081f46' : '#b1abb8'} />,
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
