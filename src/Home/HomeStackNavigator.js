import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Icon, Button} from 'native-base';

import Home from './Home';
import Home2 from './Home2';
import Hamburger from '../utils/Hamburger';

const Stack = createStackNavigator();

const HomeStackNavigator = (props) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerLeft: () => <Hamburger drawerObj={props}></Hamburger>,
      }}
    />
    <Stack.Screen name="Home2" component={Home2} />
  </Stack.Navigator>
);

export default HomeStackNavigator;
