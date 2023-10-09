import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Private} from './Private';
import {Public} from './Public';

export const Navigator = () => {
  const [isAuth, setIsAuth] = useState(true);
  return (
    <NavigationContainer>
      {!isAuth ? <Public /> : <Private />}
    </NavigationContainer>
  );
};
