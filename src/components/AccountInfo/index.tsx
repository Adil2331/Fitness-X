import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Arrow from '../../assets/ProfileImg/Arrow';
import ProfileIcon from '../../assets/ProfileImg/PtofileIcon';
import Achievement from '../../assets/ProfileImg/Achievement';
import ActivityIcon from '../../assets/ProfileImg/ActivityIcon';
import WorkoutIcon from '../../assets/ProfileImg/WorkoutIcon';

interface IAccountItem {
  img: React.JSX.Element;
  text: string;
}

const AcountItems: IAccountItem[] = [
  {img: <ProfileIcon />, text: 'Personal Data'},
  {img: <Achievement />, text: 'Achievement'},
  {img: <ActivityIcon />, text: 'Activity History'},
  {img: <WorkoutIcon />, text: 'Workout Progress'},
];

export const AccountInfo = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainTitle}>Account</Text>
      {AcountItems.map((e, i) => (
        <TouchableOpacity style={styles.mainItem} key={i}>
          <View style={styles.mainItemContainer}>
            {e.img}
            <Text style={styles.mainItemText}>{e.text}</Text>
          </View>

          <Arrow />
        </TouchableOpacity>
      ))}
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
