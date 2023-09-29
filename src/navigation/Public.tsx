import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import Onboarding from '../screens/Onboarding';
import {Welcome} from '../screens/Welcome';
import {Regiter} from '../screens/Regiter';
import {Goal} from '../screens/Goal';

type PublicStackParamList = {
  Welcome: undefined;
  Onboarding: undefined;
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
        component={Regiter}
        options={{headerTitle: '', headerShown: false}}
      />
      <Screen
        name="Goal"
        component={Goal}
        options={{headerTitle: '', headerShown: false}}
      />
    </Navigator>
  );
};
