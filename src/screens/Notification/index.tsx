import React from 'react';
import {SafeAreaLayout} from '../../components/SafeAreaLayout/SafeAreaLayout';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {PrivateStackScreenProps} from '../../navigation/Private';
import NotificationIcon1 from '../../assets/Notification/NotificationIcon1';
import NotificationIcon2 from '../../assets/Notification/NotificationIcon2';
import NotificationIcon3 from '../../assets/Notification/NotificationIcon3';
import NotificationIcon4 from '../../assets/Notification/NotificationIcon4';
import MoreIcon from '../../assets/svg/MoreIcon';
import {HeaderLayout} from '../../components/HeaderLayout';

interface IItem {
  img: React.JSX.Element;
  title: string;
  text: string;
}

const Data: IItem[] = [
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
  const {goBack} = useNavigation<PrivateStackScreenProps['navigation']>();

  return (
    <SafeAreaLayout top bottom style={styles.container}>
      <HeaderLayout text={'Notification'} onPress={goBack} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {Data.map((e, i) => (
          <TouchableOpacity
            key={i}
            style={[
              styles.main,
              i !== Data.length - 1 && styles.mainContainer,
            ]}>
            <View style={styles.mainInner}>
              {e.img}
              <View style={styles.mainInnerContainer}>
                <Text style={styles.mainInnerTitle}>{e.title}</Text>
                <Text style={styles.mainInnerText}>{e.text}</Text>
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
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingBottom: 15,
  },
  mainContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#DDDADA',
  },
  mainInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainInnerContainer: {
    marginLeft: 10,
  },
  mainInnerTitle: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
  },
  mainInnerText: {
    color: '#7B6F72',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 15,
  },
});
