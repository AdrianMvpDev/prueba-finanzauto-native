import { Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

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
          component={MyStack}
          options={{
            tabBarIcon: ({ focused, color }) => <Ionicons name="home" size={24} color={focused ? '#081f46' : '#b1abb8'} />,
          }}
        />

        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ focused, color }) => <Ionicons name="search" size={24} color={focused ? '#081f46' : '#b1abb8'} />,
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
