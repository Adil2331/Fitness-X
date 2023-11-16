import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaLayout} from '../../components/SafeAreaLayout/SafeAreaLayout';
import {UserInfo} from '../../components/UserInfo';
import {AccountInfo} from '../../components/AccountInfo';
import {NotificationInfo} from '../../components/Notification';
import {OtherInfo} from '../../components/OtherInfo';
import {HeaderLayout} from '../../components/HeaderLayout';

export const Profile = () => {
  return (
    <SafeAreaLayout top bottom style={styles.container}>
      <HeaderLayout text={'Profile'} onPress={() => {}} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <UserInfo />
        <AccountInfo />
        <NotificationInfo />
        <OtherInfo />
      </ScrollView>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 30,
    paddingBottom: 0,
  },
});
