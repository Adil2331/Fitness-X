import React from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';

// assets
import NotifeIcon from '../../assets/ProfileImg/NotifIcon';

export const NotificationInfo = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainTitle}>Notification</Text>
      <View style={styles.mainItem}>
        <View style={styles.mainItemContainer}>
          <NotifeIcon />
          <Text style={styles.mainItemText}>Pop-up Notification</Text>
        </View>
        <Switch value={true} trackColor={{false: '#767577', true: '#C58BF2'}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 16,
    marginTop: 30,
    marginHorizontal: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  mainTitle: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    marginBottom: 16,
  },
  mainItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  mainItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainItemText: {
    marginLeft: 10,
    color: '#7B6F72',
    fontSize: 12,
    fontWeight: '400',
  },
});
