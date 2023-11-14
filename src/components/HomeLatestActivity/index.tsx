import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import WorkoutBtn from '../../assets/HomeImg/WorkoutBtn';
import LinearGradient from 'react-native-linear-gradient';
import HomeActivity1 from '../../assets/HomeImg/HomeActivity1';
import HomeActivity2 from '../../assets/HomeImg/HomeActivity2';
import HomeActivity3 from '../../assets/HomeImg/HomeActivity3';

interface IWorkoutItem {
  img: React.JSX.Element;
  title: string;
  text: string;
  width: number;
}

const WorkoutItems: IWorkoutItem[] = [
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

export const HomeLatestActivity = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
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
