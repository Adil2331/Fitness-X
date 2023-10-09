import React from 'react';
import {SafeAreaLayout} from '../../components/SafeAreaLayout';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BackNavs from '../../assets/svg/BackNavs';
import DetailsNavs from '../../assets/svg/DetailsNavs';
import {useNavigation} from '@react-navigation/native';
import {PrivateStackScreenProps} from '../../navigation/Private';
import NotificationIcon1 from '../../assets/Notification/NotificationIcon1';
import NotificationIcon2 from '../../assets/Notification/NotificationIcon2';
import NotificationIcon3 from '../../assets/Notification/NotificationIcon3';
import NotificationIcon4 from '../../assets/Notification/NotificationIcon4';
import MoreIcon from '../../assets/svg/MoreIcon';

const Data = [
  {
    img: <NotificationIcon1 />,
    title: 'Hey, it’s time for lunch',
    text: 'About 1 minutes ago',
  },
  {
    img: <NotificationIcon2 />,
    title: 'Don’t miss your lowerbody workout',
    text: 'About 3 hours ago',
  },
  {
    img: <NotificationIcon3 />,
    title: 'Hey, let’s add some meals for your b..',
    text: 'About 3 hours ago',
  },
  {
    img: <NotificationIcon4 />,
    title: 'Congratulations, You have finished A..',
    text: '29 May',
  },
  {
    img: <NotificationIcon1 />,
    title: 'Hey, it’s time for lunch',
    text: '8 April',
  },
  {
    img: <NotificationIcon2 />,
    title: 'Ups, You have missed your Lowerbo...',
    text: '3 April',
  },
];

export const Notification = () => {
  const {navigate} = useNavigation<PrivateStackScreenProps['navigation']>();

  return (
    <SafeAreaLayout top bottom style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.headerBtn}
          onPress={() => navigate('Home')}>
          <BackNavs />
        </TouchableOpacity>
        <Text style={styles.title}>Notification</Text>
        <TouchableOpacity style={styles.headerBtn}>
          <DetailsNavs />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {Data.map((e, i) => (
          <TouchableOpacity
            key={i}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 15,
              paddingBottom: 15,
              borderBottomWidth: 1,
              borderBottomColor: '#DDDADA',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              {e.img}
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 12, fontWeight: '500', lineHeight: 18}}>
                  {e.title}
                </Text>
                <Text
                  style={{
                    color: '#7B6F72',
                    fontSize: 10,
                    fontWeight: '400',
                    lineHeight: 15,
                  }}>
                  {e.text}
                </Text>
              </View>
            </View>
            <MoreIcon />
          </TouchableOpacity>
        ))}
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
