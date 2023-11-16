import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import Onboarding from '../screens/Onboarding';
import {Welcome} from '../screens/Welcome';
import {Goal} from '../screens/Goal';
import {Login} from '../screens/Login';
import {GoToHome} from '../screens/GoToHome';
import {Register} from '../screens/Register';

type PublicStackParamList = {
  Welcome: undefined;
  Onboarding: undefined;
  Register: undefined;
  Goal: undefined;
  Login: undefined;
  GoToHome: undefined;
};
export type PublicStackScreenProps =
  NativeStackScreenProps<PublicStackParamList>;

export const Public = () => {
  const {Navigator, Screen} = createNativeStackNavigator();
  return (
    <Navigator initialRouteName="Welcome">
      <Screen
        name="Welcome"
        component={Welcome}
        options={{headerTitle: '', headerShown: false}}
      />
      <Screen
        name="Onboarding"
        component={Onboarding}
        options={{headerTitle: '', headerShown: false}}
      />
      <Screen
        name="Register"
        component={Register}
        options={{headerTitle: '', headerShown: false}}
      />
      <Screen
        name="Goal"
        component={Goal}
        options={{headerTitle: '', headerShown: false}}
      />
      <Screen
        name="Login"
        component={Login}
        options={{headerTitle: '', headerShown: false}}
      />
      <Screen
        name="GoToHome"
        component={GoToHome}
        options={{headerTitle: '', headerShown: false}}
      />
    </Navigator>
  );
};
