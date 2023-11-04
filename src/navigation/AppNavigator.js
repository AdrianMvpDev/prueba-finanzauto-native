import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import CreateScreen from '../screens/CreateScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import NotificationScreen from '../screens/NotificationScreen';
import UserDetailScreen from '../screens/UserDetailScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function AppNavigator() {
  const HomeStackNavigator = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function MyStack() {
    return (
      <HomeStackNavigator.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <HomeStackNavigator.Screen name="HomeScreen" component={HomeScreen} />
        <HomeStackNavigator.Screen name="UserDetail" component={UserDetailScreen} />
      </HomeStackNavigator.Navigator>
    );
  }

  function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarStyle: {
            height: 97,
            bottom: 0,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={MyStack}
          options={{
            tabBarIcon: ({ focused, color }) => <Ionicons name="home" size={27} color={focused ? '#166D6B' : '#9DA6B2'} />,
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ focused, color }) => <Ionicons name="search" size={27} color={focused ? '#166D6B' : '#9DA6B2'} />,
          }}
        />
        <Tab.Screen
          name="Create"
          component={CreateScreen}
          options={{
            tabBarIcon: ({ focused, color }) => <Ionicons name="add" size={27} color={'#FFFFFF'} />,
            tabBarIconStyle: {
              backgroundColor: '#A2D033',
              borderRadius: 50,
              width: 79,
              maxHeight: 79,
              alignItems: 'center',
              justifyContent: 'center',
              bottom: 45,
            },
          }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            tabBarIcon: ({ focused, color }) => <Ionicons name="notifications-outline" size={27} color={focused ? '#166D6B' : '#9DA6B2'} />,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ focused, color }) => <Ionicons name="settings-outline" size={27} color={focused ? '#166D6B' : '#9DA6B2'} />,
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
