import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import {TabNavigator} from './TabNavigator';
import {Activity} from '../screens/Activity';
import {Profile} from '../screens/Profile';
import {ProgressPhoto} from '../screens/ProgressPhoto';
type PrivateStackParamList = {};
export type PrivateStackScreenProps =
  NativeStackScreenProps<PrivateStackParamList>;

export const Private = () => {
  const {Navigator, Screen} = createNativeStackNavigator();
  return (
    <Navigator initialRouteName="Welcome">
      <Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Screen
        name="Activity"
        component={Activity}
        options={{headerShown: false}}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Screen
        name="ProgressPhoto"
        component={ProgressPhoto}
        options={{headerShown: false}}
      />
    </Navigator>
  );
};
