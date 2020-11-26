import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import colors from '../styles/colors';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: colors.DarkGreyPrimary},
    }}
    initialRouteName="SignUp">
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="Home" component={Home} />
  </Auth.Navigator>
);

export default AuthRoutes;
