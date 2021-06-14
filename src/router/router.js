import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TaskOne from '../screens/TaskOne';
import {TaskTwo} from '../screens/TaskTwo';
import React from 'react';
import {Home} from '../screens/Home';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TaskOne" component={TaskOne} />
        <Stack.Screen name="TaskTwo" component={TaskTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
