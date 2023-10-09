import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Home} from '../screens/Home';
import {Activity} from '../screens/Activity';
import {Profile} from '../screens/Profile';
import HomeNav from '../assets/svg/HomeNav';
import ProfileNav from '../assets/svg/ProfileNav';
import ActivityNav from '../assets/svg/ActivityNav';
import HomeNavActive from '../assets/svg/HomeNavActive';
import ProfileNavActive from '../assets/svg/ProvileNavActive';
import {ProgressPhoto} from '../screens/ProgressPhoto';
import CameraNavActive from '../assets/svg/CameraNavActive';
import CameraNav from '../assets/svg/CameraNav';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return focused ? <HomeNavActive /> : <HomeNav />;
          } else if (route.name === 'Activity') {
            return <ActivityNav />;
          } else if (route.name === 'Profile') {
            return focused ? <ProfileNavActive /> : <ProfileNav />;
          } else if (route.name === 'ProgressPhoto') {
            return focused ? <CameraNavActive /> : <CameraNav />;
          }
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          // height: 70,
          paddingTop: 30,
          paddingBottom: 30,
        },
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="ProgressPhoto"
        component={ProgressPhoto}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
