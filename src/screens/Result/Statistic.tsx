import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const width = Dimensions.get('screen').width;

const StatisticItems = [
  {title: 'Lose Weight', firstParam: '33%', secontParam: '67%'},
  {title: 'Height Increase', firstParam: '88%', secontParam: '12%'},
  {title: 'Muscle Mass Increase', firstParam: '57%', secontParam: '43%'},
  {title: 'Abs', firstParam: '89%', secontParam: '11%'},
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
            <Text style={styles.mainInnerText}>{e.firstParam}</Text>
            <LinearGradient
              colors={['#EEA4CE', '#C58BF2']}
              start={{x: 1, y: 0}}
              end={{x: 1, y: 0}}
              style={[styles.firstParam, {width: e.firstParam}]}
            />
            <LinearGradient
              colors={['#92A3FD', '#9DCEFF']}
              start={{x: 0.5, y: 1}}
              end={{x: 0, y: 1}}
              style={[styles.secondParam, {width: e.secontParam}]}
            />
            <Text style={styles.mainInnerText}>{e.secontParam}</Text>
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
    maxWidth: width - 122,
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
