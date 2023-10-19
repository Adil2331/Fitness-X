import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Private} from './Private';
import {Public} from './Public';
import {useAppSelector} from '../redux/store';
// import {useDispatch} from 'react-redux';

export const Navigator = () => {
  // const dispatch = useDispatch();
  const login = useAppSelector(state => state.loginSlice.login);
  // const [isAuth, setIsAuth] = useState(true);

  return (
    <NavigationContainer>
      {!login ? <Public /> : <Private />}
    </NavigationContainer>
  );
};
