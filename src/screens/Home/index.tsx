import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaLayout} from '../../components/SafeAreaLayout';
import NotificationIcon from '../../assets/svg/NotificationIcon';
import {useNavigation} from '@react-navigation/native';
import {PrivateStackScreenProps} from '../../navigation/Private';
import WaterGraph from '../../assets/HomeImg/WaterGraph';
import TimeStatus from '../../assets/HomeImg/TimeStatus';
import WaterText from '../../assets/HomeImg/WaterText';
import SleepText from '../../assets/HomeImg/SleepText';
import SleepStatus from '../../assets/HomeImg/SleepStatus';
import CaloriesText from '../../assets/HomeImg/CaloriesText';
import CaloriesStatus from '../../assets/HomeImg/CaloriesStatus';
import {InnerBtn} from '../../components/InnerBtn';
import WorkoutBtn from '../../assets/HomeImg/WorkoutBtn';
import LinearGradient from 'react-native-linear-gradient';
import HomeActivity1 from '../../assets/HomeImg/HomeActivity1';
import HomeActivity2 from '../../assets/HomeImg/HomeActivity2';
import HomeActivity3 from '../../assets/HomeImg/HomeActivity3';

const width = Dimensions.get('screen').width;

const WorkoutItems = [
  {
    img: <HomeActivity1 />,
    title: 'Fullbody Workout',
    text: '180 Calories Burn | 20minutes',
    width: 40,
  },
  {
    img: <HomeActivity2 />,
    title: 'Lowerbody Workout',
    text: '200 Calories Burn | 30minutes',
    width: 100,
  },
  {
    img: <HomeActivity3 />,
    title: 'Ab Workout',
    text: '150 Calories Burn | 30minutes',
    width: 150,
  },
];

export const Home = () => {
  const {navigate} = useNavigation<PrivateStackScreenProps['navigation']>();
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
        <View style={styles.imgConatiner}>
          <Image
            source={require('../../assets/HomeImg/HomeBanner-1.png')}
            style={{width: width - 15}}
          />
        </View>
        <View style={styles.imgConatiner}>
          <Image
            source={require('../../assets/HomeImg/Action.png')}
            style={{width: width - 63}}
          />
        </View>
        <Text style={styles.adtivityTitle}>Activity Status</Text>
        <View style={styles.imgConatiner}>
          <Image
            source={require('../../assets/HomeImg/HomeStatus.png')}
            style={{width: width - 20}}
          />
        </View>
        <View style={styles.mode}>
          <View style={styles.whater}>
            <WaterGraph />
            <View style={styles.waterInner}>
              <WaterText style={styles.waterText} />
              <TimeStatus />
            </View>
          </View>
          <View>
            <View style={styles.sleep}>
              <SleepText />
              <SleepStatus />
            </View>
            <View style={styles.calories}>
              <CaloriesText />
              <CaloriesStatus style={styles.caloriesInner} />
            </View>
          </View>
        </View>
        <View style={styles.workout}>
          <View style={styles.workoutInner}>
            <Text style={styles.workoutTitle}>Workout Progress</Text>
            <InnerBtn text="Weekly" />
          </View>
          <View style={styles.workoutImg}>
            <Image source={require('../../assets/HomeImg/Graph.png')} />
          </View>
        </View>
        <View>
          <View style={styles.latestActivity}>
            <Text style={styles.latestActivityTitle}>Latest Activity</Text>
            <TouchableOpacity>
              <Text style={styles.latestActivityText}>See more</Text>
            </TouchableOpacity>
          </View>
          {WorkoutItems.map((e, i) => (
            <View key={i} style={styles.main}>
              {e.img}
              <View>
                <Text style={styles.mainTitle}>{e.title}</Text>
                <Text style={styles.mainText}>{e.text}</Text>
                <View style={styles.mainLine}>
                  <LinearGradient
                    colors={['#C58BF2', '#92A3FD']}
                    start={{x: 1, y: 0.1}}
                    end={{x: 0.7, y: 0.8}}
                    style={[styles.mainLineInner, {width: e.width}]}
                  />
                </View>
              </View>
              <TouchableOpacity>
                <WorkoutBtn />
              </TouchableOpacity>
            </View>
          ))}
        </View>
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
  imgConatiner: {
    alignItems: 'center',
    paddingTop: 15,
  },
  adtivityTitle: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    paddingTop: 30,
  },
  mode: {
    flexDirection: 'row',
  },
  whater: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    marginRight: 15,
    marginLeft: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  waterInner: {
    marginLeft: 10,
    alignItems: 'flex-start',
  },
  waterText: {
    marginLeft: 5,
    marginBottom: 10,
  },
  sleep: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 20,
    marginBottom: 15,
    marginRight: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  calories: {
    backgroundColor: 'white',
    padding: 20,
    paddingBottom: 0,
    borderRadius: 18,
    marginRight: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  caloriesInner: {
    marginLeft: 10,
  },
  workout: {
    marginVertical: 30,
  },
  workoutInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  workoutTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  workoutImg: {
    alignItems: 'center',
  },
  latestActivity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  latestActivityTitle: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
  },
  latestActivityText: {
    color: '#ADA4A5',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 15,
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
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
  },
  mainText: {
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 15,
    color: '#A4A9AD',
    marginBottom: 9,
  },
  mainLine: {
    width: 190,
    height: 10,
    borderRadius: 50,
    backgroundColor: '#f8f8f8',
  },
  mainLineInner: {
    height: 10,
    borderRadius: 50,
  },
});
