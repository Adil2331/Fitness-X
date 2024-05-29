import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {PrivateStackScreenProps} from '../../navigation/Private';

// assets
import NotificationIcon from '../../assets/icons/NotificationIcon';

// components
import {SafeAreaLayout} from '../../components/SafeAreaLayout/SafeAreaLayout';
import {HomeHeader} from '../../components/HomeHeader';
import {HomeMode} from '../../components/HomeMode';
import {WorkoutProgress} from '../../components/WorkoutProgress';
import {HomeLatestActivity} from '../../components/HomeLatestActivity';

export const Home: React.FC = () => {
  const {navigate} = useNavigation<PrivateStackScreenProps['navigation']>();
  console.log('test');
  return (
    <SafeAreaLayout style={styles.container} bottom top>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headerText}>Welcome Back,</Text>
          <Text style={styles.headerTitle}>Stefani Wong</Text>
        </View>
        <TouchableOpacity
          style={styles.notificationBtn}
          onPress={() => navigate('Notification')}>
          <NotificationIcon />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <HomeMode />
        <WorkoutProgress />
        <HomeLatestActivity />
      </ScrollView>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingBottom: 0,
    backgroundColor: '#f8f8f8',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 30,
  },
  headerText: {
    color: '#ADA4A5',
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
  },
  notificationBtn: {
    backgroundColor: '#F7F8F8',
    padding: 7,
    borderRadius: 8,
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
