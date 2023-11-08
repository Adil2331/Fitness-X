import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import {TabNavigator} from './TabNavigator';
import {Activity} from '../screens/Activity';
import {Profile} from '../screens/Profile';
import {ProgressPhoto} from '../screens/ProgressPhoto';
import {Notification} from '../screens/Notification';
import {Comparison} from '../screens/Comparison';
import {Result} from '../screens/Result';
type PrivateStackParamList = {
  TabNavigator: undefined;
  Activity: undefined;
  Profile: undefined;
  ProgressPhoto: undefined;
  Notification: undefined;
  Comparison: undefined;
  Result: undefined;
};
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
      <Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <Screen
        name="Comparison"
        component={Comparison}
        options={{headerShown: false}}
      />
      <Screen name="Result" component={Result} options={{headerShown: false}} />
    </Navigator>
  );
};
