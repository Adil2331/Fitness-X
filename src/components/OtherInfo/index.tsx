import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Arrow from '../../assets/ProfileImg/Arrow';
import MessageIcon from '../../assets/ProfileImg/MessegeIcon';
import PrivacyIcon from '../../assets/ProfileImg/PrivacyIcon';
import SettingIcon from '../../assets/ProfileImg/SettingIcon';

interface IOthertItem {
  img: React.JSX.Element;
  text: string;
}

const Other: IOthertItem[] = [
  {img: <MessageIcon />, text: 'Contact Us'},
  {img: <PrivacyIcon />, text: 'Privacy Policy'},
  {img: <SettingIcon />, text: 'Settings'},
];

export const OtherInfo = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainTitle}>Other</Text>
      {Other.map((e, i) => (
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
