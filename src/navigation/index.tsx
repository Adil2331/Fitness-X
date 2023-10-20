import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Private} from './Private';
import {Public} from './Public';
import {useAppSelector} from '../redux/store';

export const Navigator = () => {
  const login = useAppSelector(state => state.loginSlice.login);

  return (
    <NavigationContainer>
      {!login ? <Public /> : <Private />}
    </NavigationContainer>
  );
};
