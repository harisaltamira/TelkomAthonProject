import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useIsFocused} from '@react-navigation/core';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Testbed from '../Testbed/Testbed';
import FlatlistPostTest from '../Flatlist/FlatlistPostTest';
import FlatlistStarWars from '../Flatlist/FlatlistStarWars';
import FlatlistSession18 from '../Flatlist/FlatlistSession18';
import Movies from '../API/Movies';

const Tab = createBottomTabNavigator();

function BottomTabsNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        style: {
          position: 'absolute',
          marginBottom: '7%',
          marginHorizontal: '10%',
          height: '7%',
          elevation: 10,
          paddingHorizontal: 5,
          paddingTop: 2,
          paddingBottom: 5,
          justifyContent: 'center',
          shadowOpacity: 0.3,
          shadowOffset: {width: 0, height: 1},
          shadowRadius: 3,
          borderRadius: 10,
        },
        tabStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 2,
        },
        labelStyle: {fontSize: 14},
        activeTintColor: '#2bb3e0',
      }}
      sceneContainerStyle={{backgroundColor: `#f5f5f5`}}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="home"
              color={useIsFocused() ? '#2bb3e0' : `#d3d3d3`}
              size={30}
            />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Flatlist"
        options={{
          tabBarLabel: 'Flatlist',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="view-list"
              color={useIsFocused() ? '#2bb3e0' : `#d3d3d3`}
              size={30}
            />
          ),
        }}
        component={FlatlistPostTest}
      />
      <Tab.Screen
        name="Flatlist Star Wars"
        options={{
          tabBarLabel: 'Star Wars',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="database"
              color={useIsFocused() ? '#2bb3e0' : `#d3d3d3`}
              size={30}
            />
          ),
        }}
        component={FlatlistStarWars}
      />
      <Tab.Screen
        name="Movies"
        options={{
          tabBarLabel: 'Movies',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="filmstrip-box-multiple"
              color={useIsFocused() ? '#2bb3e0' : `#d3d3d3`}
              size={30}
            />
          ),
        }}
        component={Movies}
      />
      {/* <Tab.Screen
        name="Trial"
        options={{
          tabBarLabel: 'Testbed',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="cogs"
              color={useIsFocused() ? '#2bb3e0' : `#d3d3d3`}
              size={30}
            />
          ),
        }}
        component={Testbed}
      /> */}
      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="account"
              color={useIsFocused() ? '#2bb3e0' : `#d3d3d3`}
              size={30}
            />
          ),
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
}

export default function app() {
  return <BottomTabsNavigation />;
}
