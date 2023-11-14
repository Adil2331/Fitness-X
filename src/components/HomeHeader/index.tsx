import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

const width = Dimensions.get('screen').width;

export const HomeHeader = () => {
  return (
    <>
      <View style={styles.imgConatiner}>
        <Image
          source={require('../../assets/HomeImg/HomeBanner-1.png')}
          style={{width: width - 15}}
        />
      </View>
      <View style={styles.imgConatiner}>
        <Image
          source={require('../../assets/HomeImg/Action.png')}
          style={{width: width - 63}}
        />
      </View>
      <Text style={styles.adtivityTitle}>Activity Status</Text>
      <View style={styles.imgConatiner}>
        <Image
          source={require('../../assets/HomeImg/HomeStatus.png')}
          style={{width: width - 20}}
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
