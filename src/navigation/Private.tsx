import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import {Welcome} from '../screens/Welcome';
type PrivateStackParamList = {};
export type PrivateStackScreenProps =
  NativeStackScreenProps<PrivateStackParamList>;

export const Private = () => {
  const {Navigator, Screen} = createNativeStackNavigator();
  return (
    <Navigator initialRouteName="Welcome">
      <Screen
        name="Welcome"
        component={Welcome}
        options={{headerTitle: '', headerShown: false}}
      />
    </Navigator>
  );
};
