import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {InnerBtn} from '../InnerBtn';

const width = Dimensions.get('screen').width;

export const ActivityProgress = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainHeader}>
        <Text style={styles.mainTitle}>Activity Progress</Text>
        <InnerBtn text="Weekly" onPress={() => {}} />
      </View>
      <View style={styles.mainInner}>
        <Image
          source={require('../../assets/Graph.png')}
          style={{width: width}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 30,
  },
  mainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  mainInner: {
    alignItems: 'center',
  },
});
