import React from 'react';
import {SafeAreaLayout} from '../../components/SafeAreaLayout/SafeAreaLayout';
import {StyleSheet, Text, View} from 'react-native';
import {BtnLayout} from '../../components/BtnLayout/BtnLayout';
import {useNavigation} from '@react-navigation/native';
import {PublicStackScreenProps} from '../../navigation/Public';
import {SimpleCarousel} from '../../components/Carousel/Carousel';

export const Goal = () => {
  const {navigate} = useNavigation<PublicStackScreenProps['navigation']>();
  return (
    <SafeAreaLayout top bottom style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>What is your goal ?</Text>
        <Text style={styles.text}>
          It will help us to choose a best program for you
        </Text>
        <View style={styles.carouselContainer}>
          <SimpleCarousel />
        </View>
      </View>
      <View style={styles.btnContainer}>
        <BtnLayout onPress={() => navigate('Login')} text="Confirm" />
      </View>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  headerContainer: {
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
    width: 182,
    lineHeight: 18,
    marginBottom: 50,
  },
  carouselContainer: {
    width: '100%',
  },
  btnContainer: {
    paddingHorizontal: 30,
  },
});
