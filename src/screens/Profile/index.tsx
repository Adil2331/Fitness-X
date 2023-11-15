import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaLayout} from '../../components/SafeAreaLayout';
import BackNavs from '../../assets/svg/BackNavs';
import DetailsNavs from '../../assets/svg/DetailsNavs';
import {UserInfo} from '../../components/UserInfo';
import {AccountInfo} from '../../components/AccountInfo';
import {NotificationInfo} from '../../components/Notification';
import {OtherInfo} from '../../components/OtherInfo';

export const Profile = () => {
  return (
    <SafeAreaLayout top bottom style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.headerBtn}>
          <BackNavs />
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity style={styles.headerBtn}>
          <DetailsNavs />
        </TouchableOpacity>
      </View>
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
  },
  headerBtn: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
