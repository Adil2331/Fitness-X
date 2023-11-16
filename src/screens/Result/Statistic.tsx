import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// styles
import {spaces} from '../../theme';

interface IStaticItem {
  title: string;
  firstParam: number;
  secondParam: number;
}

const StatisticItems: IStaticItem[] = [
  {title: 'Lose Weight', firstParam: 33, secondParam: 67},
  {title: 'Height Increase', firstParam: 88, secondParam: 12},
  {title: 'Muscle Mass Increase', firstParam: 57, secondParam: 43},
  {title: 'Abs', firstParam: 89, secondParam: 11},
];

export const Statistic = () => {
  return (
    <View>
      <View style={styles.container}>
        <Image source={require('../../assets/StatisticGraph.png')} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>May</Text>
        <Text style={styles.title}>June</Text>
      </View>
      {StatisticItems.map((e, i) => (
        <View key={i} style={styles.main}>
          <Text style={styles.mainTitle}>{e.title}</Text>
          <View style={styles.mainInner}>
            <Text style={styles.mainInnerText}>{e.firstParam}%</Text>
            <LinearGradient
              colors={['#EEA4CE', '#C58BF2']}
              start={{x: 1, y: 0}}
              end={{x: 1, y: 0}}
              style={[styles.firstParam, {width: `${e.firstParam}%`}]}
            />
            <LinearGradient
              colors={['#92A3FD', '#9DCEFF']}
              start={{x: 0.5, y: 1}}
              end={{x: 0, y: 1}}
              style={[styles.secondParam, {width: `${e.secondParam}%`}]}
            />
            <Text style={styles.mainInnerText}>{e.secondParam}%</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  main: {
    marginBottom: 15,
  },
  mainTitle: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    marginBottom: 15,
  },
  mainInner: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: spaces.windowWidth - 122,
  },
  mainInnerText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#7B6F72',
  },
  firstParam: {
    height: 10,
    borderTopLeftRadius: 99,
    borderBottomLeftRadius: 99,
    marginLeft: 5,
  },
  secondParam: {
    height: 10,
    borderTopRightRadius: 99,
    borderBottomRightRadius: 99,
    marginRight: 5,
  },
});
