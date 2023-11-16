import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaLayout} from '../../components/SafeAreaLayout';
import {Reminder} from '../../components/Reminder';
import {TrackProgress} from '../../components/TrackProgress';
import {ComparePhoto} from '../../components/ComparePhoto';
import {Gallery} from '../../components/Gallery';
import {HeaderLayout} from '../../components/HeaderLayout';

export const ProgressPhoto = () => {
  return (
    <SafeAreaLayout top bottom style={styles.container}>
      <HeaderLayout text={'Progress Photo'} onPress={() => {}} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Reminder />
        <TrackProgress />
        <ComparePhoto />
        <Gallery />
      </ScrollView>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 30,
    paddingBottom: 0,
  },
});
