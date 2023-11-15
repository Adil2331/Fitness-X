import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FirstPerson from '../../assets/svg/FirstPerson';
import {InnerBtn} from '../InnerBtn';
import {useDispatch} from 'react-redux';
import {setLogin} from '../../redux/loginSlice';

interface IDataItem {
  title: string;
  text: string;
}

const Data: IDataItem[] = [
  {title: '180cm', text: 'Height'},
  {title: '85kg', text: 'Weight'},
  {title: '22yo', text: 'Age'},
];

export const UserInfo = () => {
  const dispatch = useDispatch();
  return (
    <>
      <View style={styles.userContainer}>
        <FirstPerson />
        <View style={styles.userTextContainer}>
          <Text style={styles.userTitle}>Stefani Wong</Text>
          <Text style={styles.userText}>Lose a Fat Program</Text>
        </View>
        <InnerBtn text="Edit" onPress={() => dispatch(setLogin())} />
      </View>
      <View style={styles.userInfoContainer}>
        {Data.map((e, i) => (
          <View style={styles.userInfiItmes} key={i}>
            <Text style={styles.userInfoTitle}>{e.title}</Text>
            <Text style={styles.userInfoText}>{e.text}</Text>
          </View>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userTextContainer: {
    marginRight: 50,
  },
  userTitle: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
  },
  userText: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    color: '#7B6F72',
  },
  userInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    paddingHorizontal: 2,
  },
  userInfiItmes: {
    borderRadius: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 11,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  userInfoTitle: {
    color: '#4281f5',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    marginBottom: 5,
  },
  userInfoText: {
    color: '#7B6F72',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
  },
});
