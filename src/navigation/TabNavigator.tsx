import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// assets
import HomeNav from '../assets/icons/HomeNav';
import ProfileNav from '../assets/icons/ProfileNav';
import ActivityNav from '../assets/icons/ActivityNav';
import HomeNavActive from '../assets/icons/HomeNavActive';
import ProfileNavActive from '../assets/icons/ProvileNavActive';
import CameraNavActive from '../assets/icons/CameraNavActive';
import CameraNav from '../assets/icons/CameraNav';
import ActivityNavActive from '../assets/icons/ActiveNavActive';

// screens
import {ProgressPhoto} from '../screens/ProgressPhoto';
import {Home} from '../screens/Home';
import {Activity} from '../screens/Activity';
import {Profile} from '../screens/Profile';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'Home') {
            return focused ? <HomeNavActive /> : <HomeNav />;
          } else if (route.name === 'Activity') {
            return focused ? <ActivityNavActive /> : <ActivityNav />;
          } else if (route.name === 'Profile') {
            return focused ? <ProfileNavActive /> : <ProfileNav />;
          } else if (route.name === 'ProgressPhoto') {
            return focused ? <CameraNavActive /> : <CameraNav />;
          }
        },
        tabBarShowLabel: false,
        tabBarStyle: {
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
