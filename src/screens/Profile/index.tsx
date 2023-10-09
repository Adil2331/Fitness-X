import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaLayout} from '../../components/SafeAreaLayout';
import BackNavs from '../../assets/svg/BackNavs';
import DetailsNavs from '../../assets/svg/DetailsNavs';
import {InnerBtn} from '../../components/InnerBtn';
import ProfileIcon from '../../assets/ProfileImg/PtofileIcon';
import Achievement from '../../assets/ProfileImg/Achievement';
import ActivityIcon from '../../assets/ProfileImg/ActivityIcon';
import WorkoutIcon from '../../assets/ProfileImg/WorkoutIcon';
import Arrow from '../../assets/ProfileImg/Arrow';
import NotifeIcon from '../../assets/ProfileImg/NotifIcon';
import MessageIcon from '../../assets/ProfileImg/MessegeIcon';
import PrivacyIcon from '../../assets/ProfileImg/PrivacyIcon';
import SettingIcon from '../../assets/ProfileImg/SettingIcon';
import FirstPerson from '../../assets/svg/FirstPerson';

const Data = [
  {title: '180cm', text: 'Height'},
  {title: '85kg', text: 'Weight'},
  {title: '22yo', text: 'Age'},
];

const AcountItems = [
  {img: <ProfileIcon />, text: 'Personal Data'},
  {img: <Achievement />, text: 'Achievement'},
  {img: <ActivityIcon />, text: 'Activity History'},
  {img: <WorkoutIcon />, text: 'Workout Progress'},
];

const Other = [
  {img: <MessageIcon />, text: 'Contact Us'},
  {img: <PrivacyIcon />, text: 'Privacy Policy'},
  {img: <SettingIcon />, text: 'Settings'},
];

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
        <View style={styles.userContainer}>
          {/* <Image source={require('../../assets/Person.png')} /> */}
          <FirstPerson />
          <View style={styles.userTextContainer}>
            <Text style={styles.userTitle}>Stefani Wong</Text>
            <Text style={styles.userText}>Lose a Fat Program</Text>
          </View>
          <InnerBtn text="Edit" />
        </View>
        <View style={styles.userInfoContainer}>
          {Data.map((e, i) => (
            <View style={styles.userInfiItmes} key={i}>
              <Text style={styles.userInfoTitle}>{e.title}</Text>
              <Text style={styles.userInfoText}>{e.text}</Text>
            </View>
          ))}
        </View>
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
        <View style={styles.mainContainer}>
          <Text style={styles.mainTitle}>Notification</Text>
          <View style={styles.mainItem}>
            <View style={styles.mainItemContainer}>
              <NotifeIcon />
              <Text style={styles.mainItemText}>Pop-up Notification</Text>
            </View>
            <Switch
              value={true}
              trackColor={{false: '#767577', true: '#C58BF2'}}
            />
          </View>
        </View>
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
  mainContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 16,
    marginTop: 30,
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
