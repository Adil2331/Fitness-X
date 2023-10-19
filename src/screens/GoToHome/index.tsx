import React from 'react';
import {SafeAreaLayout} from '../../components/SafeAreaLayout';
import GoHomeImg from '../../assets/svg/GoHome-Img';
import {StyleSheet, Text, View} from 'react-native';
import {BtnLayout} from '../../components/BtnLayout';
import {useDispatch} from 'react-redux';
import {setLogin} from '../../redux/loginSlice';

export const GoToHome = () => {
  const dispatch = useDispatch();
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
