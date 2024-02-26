import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoadingPage, Home, SignIn} from '../screen';

const Stack = createStackNavigator();
export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
        name='SignIn'
        component={SignIn}
        options={{headerShown: false}}
        />
         <Stack.Screen
        name='LoadingPage'
        component={LoadingPage}
        options={{headerShown: false}}
        />
         <Stack.Screen
        name='Home'
        component={Home}
        options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
