import React from 'react';
import {StyleSheet, View} from 'react-native';
import WaterGraph from '../../assets/HomeImg/WaterGraph';
import WaterText from '../../assets/HomeImg/WaterText';
import TimeStatus from '../../assets/HomeImg/TimeStatus';
import SleepText from '../../assets/HomeImg/SleepText';
import SleepStatus from '../../assets/HomeImg/SleepStatus';
import CaloriesText from '../../assets/HomeImg/CaloriesText';
import CaloriesStatus from '../../assets/HomeImg/CaloriesStatus';

export const HomeMode = () => {
  return (
    <View style={styles.mode}>
      <View style={styles.whater}>
        <WaterGraph />
        <View style={styles.waterInner}>
          <WaterText style={styles.waterText} />
          <TimeStatus />
        </View>
      </View>
      <View>
        <View style={styles.sleep}>
          <SleepText />
          <SleepStatus />
        </View>
        <View style={styles.calories}>
          <CaloriesText />
          <CaloriesStatus style={styles.caloriesInner} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mode: {
    flexDirection: 'row',
  },
  whater: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    marginRight: 15,
    marginLeft: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  waterInner: {
    marginLeft: 10,
    alignItems: 'flex-start',
  },
  waterText: {
    marginLeft: 5,
    marginBottom: 10,
  },
  sleep: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 20,
    marginBottom: 15,
    marginRight: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  calories: {
    backgroundColor: 'white',
    padding: 20,
    paddingBottom: 0,
    borderRadius: 18,
    marginRight: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  caloriesInner: {
    marginLeft: 10,
  },
});
