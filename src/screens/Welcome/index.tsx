import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {PublicStackScreenProps} from '../../navigation/Public';

// components
import {SafeAreaLayout} from '../../components/SafeAreaLayout/SafeAreaLayout';
import {BtnLayout} from '../../components/BtnLayout/BtnLayout';

export const Welcome: FC<PublicStackScreenProps> = ({navigation}) => {
  const {navigate} = navigation;
  return (
    <SafeAreaLayout style={styles.welcome} bottom>
      <View style={styles.container}>
        <Image
          style={styles.welcomeImg}
          source={require('../../assets/FitnessX.png')}
        />
        <Text style={styles.welcomeText}>Everybody Can Train</Text>
      </View>
      <BtnLayout onPress={() => navigate('Onboarding')} text="Get Started" />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    paddingHorizontal: 30,
    minHeight: '100%',
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeImg: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  welcomeText: {
    color: '#7B6F72',
    fontSize: 18,
  },
});
