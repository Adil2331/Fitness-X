import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// assets
import GoHomeImg from '../../assets/svg/GoHome-Img';

// components
import {SafeAreaLayout} from '../../components/SafeAreaLayout/SafeAreaLayout';
import {BtnLayout} from '../../components/BtnLayout/BtnLayout';

// redux
import {setLogin} from '../../redux/loginSlice';
import {useAppDispatch} from '../../redux/store';

export const GoToHome = () => {
  const dispatch = useAppDispatch();
  return (
    <SafeAreaLayout top bottom style={styles.container}>
      <View style={styles.headerContainer}>
        <GoHomeImg />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome, Stefani</Text>
        <Text style={styles.text}>
          You are all set now, let’s reach your goals together with us
        </Text>
      </View>
      <View style={styles.bottomConatiner}>
        <BtnLayout onPress={() => dispatch(setLogin())} text="Go To Home" />
      </View>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  headerContainer: {
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 30,
  },
  text: {
    color: '#7B6F72',
    textAlign: 'center',
    fontSize: 12,
    width: 214,
    lineHeight: 18,
    marginBottom: 50,
  },
  bottomConatiner: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
