import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// assets
import CalendarIcon from '../../assets/ProgressPhotoImg/Calendar';

export const TrackProgress = () => {
  return (
    <View style={styles.calendar}>
      <View>
        <Text style={styles.calendarText}>
          Track Your Progress Each Month With{' '}
          <Text style={styles.calendarTextInner}>Photo</Text>
        </Text>
        <TouchableOpacity style={styles.calendarBtnContainer}>
          <LinearGradient
            colors={['#92A3FD', '#9DCEFF']}
            start={{x: 0.3, y: 0}}
            end={{x: 0, y: 0.6}}
            style={styles.calendarBtn}>
            <Text style={styles.calendarBtnText}>Learn More</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <CalendarIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  calendar: {
    backgroundColor: '#c9e9ff',
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 22,
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarText: {
    maxWidth: 165,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
  },
  calendarTextInner: {
    color: '#4281f5',
  },
  calendarBtnContainer: {width: 97, marginTop: 15},
  calendarBtn: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
  },
  calendarBtnText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#fff',
  },
});
