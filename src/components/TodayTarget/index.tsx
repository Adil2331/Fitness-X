import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const TodayTarget = () => {
  return (
    <LinearGradient
      colors={['#92A3FD', '#9DCEFF']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 0}}
      style={styles.bgColor}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Today Target</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/images/ButtonPlus.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.items}>
          <View style={styles.itemsInner}>
            <Image source={require('../../assets/images/glass.png')} />
            <View style={styles.innerContainer}>
              <Text style={styles.innerTitle}>8L</Text>
              <Text style={styles.innerText}>Water Intake</Text>
            </View>
          </View>
          <View style={styles.itemsInner}>
            <Image source={require('../../assets/images/boots.png')} />
            <View style={styles.innerContainer}>
              <Text style={styles.innerTitle}>2400</Text>
              <Text style={styles.innerText}>Foot steps</Text>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  bgColor: {
    borderRadius: 22,
    marginTop: 15,
  },
  container: {
    borderRadius: 22,
    padding: 20,
  },
  headerContainer: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 21,
  },
  items: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemsInner: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    flexBasis: '45%',
  },
  innerContainer: {
    marginLeft: 8,
  },
  innerTitle: {
    color: '#4281f5',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
  },
  innerText: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
  },
});
