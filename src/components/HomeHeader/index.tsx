import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

// styles
import {spaces} from '../../theme';

export const HomeHeader = () => {
  return (
    <>
      <View style={styles.imgConatiner}>
        <Image
          source={require('../../assets/icons/HomeImg/HomeBanner-1.png')}
          style={{width: spaces.windowWidth - 15}}
        />
      </View>
      <View style={styles.imgConatiner}>
        <Image
          source={require('../../assets/icons/HomeImg/Action.png')}
          style={{width: spaces.windowWidth - 60}}
        />
      </View>
      <Text style={styles.adtivityTitle}>Activity Status</Text>
      <View style={styles.imgConatiner}>
        <Image
          source={require('../../assets/icons/HomeImg/HomeStatus.png')}
          style={{width: spaces.windowWidth - 20}}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imgConatiner: {
    alignItems: 'center',
    paddingTop: 15,
  },
  adtivityTitle: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    paddingTop: 30,
  },
});
