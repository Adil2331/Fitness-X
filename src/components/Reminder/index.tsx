import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// assets
import Clock from '../../assets/icons/ProgressPhotoImg/Clock';
import CloseIcon from '../../assets/icons/Close';

export const Reminder = () => {
  return (
    <View style={styles.reminderContainer}>
      <View style={styles.reminder}>
        <Clock />
        <View style={styles.reminderTextContainer}>
          <Text style={styles.reminderTitle}>Reminder!</Text>
          <Text style={styles.reminderText}>Next Photos Fall On July 08</Text>
        </View>
      </View>
      <TouchableOpacity>
        <CloseIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  reminderContainer: {
    backgroundColor: '#ffd1dc',
    borderRadius: 20,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  reminder: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reminderTextContainer: {
    marginLeft: 10,
  },
  reminderTitle: {
    color: '#F00',
    fontSize: 12,
    fontWeight: '400',
    marginBottom: 5,
  },
  reminderText: {
    fontSize: 14,
    fontWeight: '500',
  },
});
