import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

// components
import {SafeAreaLayout} from '../../components/SafeAreaLayout/SafeAreaLayout';
import {TodayTarget} from '../../components/TodayTarget';
import {ActivityProgress} from '../../components/ActivityProgress';
import {LatestActivity} from '../../components/LatestActivity';
import {HeaderLayout} from '../../components/HeaderLayout';

export const Activity = () => {
  return (
    <SafeAreaLayout top bottom style={styles.container}>
      <HeaderLayout text={'Activity Tracker'} onPress={() => {}} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TodayTarget />
        <ActivityProgress />
        <LatestActivity />
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
