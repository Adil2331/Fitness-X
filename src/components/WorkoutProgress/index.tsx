import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {InnerBtn} from '../InnerBtn';

export const WorkoutProgress = () => {
  return (
    <View style={styles.workout}>
      <View style={styles.workoutInner}>
        <Text style={styles.workoutTitle}>Workout Progress</Text>
        <InnerBtn text="Weekly" onPress={() => {}} />
      </View>
      <View style={styles.workoutImg}>
        <Image source={require('../../assets/HomeImg/Graph.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  workout: {
    marginVertical: 30,
  },
  workoutInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  workoutTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  workoutImg: {
    alignItems: 'center',
  },
});
