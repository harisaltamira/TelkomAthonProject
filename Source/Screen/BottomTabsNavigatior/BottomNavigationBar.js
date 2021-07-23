import React, { Component, useState } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home/Home'
import { useEffect } from 'react';
import ExampleFlatlist from '../Test/FlatlistMikhael';
const HomeStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const ComponentScreen = () => {


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Component!</Text>
        </View>
    );
}

function ProfilScreen() {
    return (
        <View style={{ flex: 1 }}>
            <ExampleFlatlist/>
        </View>
    );
}
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profil" component={ProfilScreen} />
        </Tab.Navigator>
    );
}

export default function app() {
    return <MyTabs />;
}