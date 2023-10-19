import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaLayout} from '../../components/SafeAreaLayout';
import BackNavs from '../../assets/svg/BackNavs';
import DetailsNavs from '../../assets/svg/DetailsNavs';
import Clock from '../../assets/ProgressPhotoImg/Clock';
import CloseIcon from '../../assets/svg/Close';
import CalendarIcon from '../../assets/ProgressPhotoImg/Calendar';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {PrivateStackScreenProps} from '../../navigation/Private';

export const ProgressPhoto = () => {
  const {navigate} = useNavigation<PrivateStackScreenProps['navigation']>();
  const obj = {
    1: require('../../assets/Photo1.png'),
    2: require('../../assets/Photo2.png'),
    3: require('../../assets/Photo3.png'),
    4: require('../../assets/Photo6.png'),
    5: require('../../assets/Photo5.png'),
    6: require('../../assets/Photo4.png'),
  };
  const arr = Object.values(obj);
  return (
    <SafeAreaLayout top bottom style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.headerBtn}>
          <BackNavs />
        </TouchableOpacity>
        <Text style={styles.title}>Progress Photo</Text>
        <TouchableOpacity style={styles.headerBtn}>
          <DetailsNavs />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.reminderContainer}>
          <View style={styles.reminder}>
            <Clock />
            <View style={styles.reminderTextContainer}>
              <Text style={styles.reminderTitle}>Reminder!</Text>
              <Text style={styles.reminderText}>
                Next Photos Fall On July 08
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <CloseIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.calendar}>
          <View>
            <Text style={styles.calendarText}>
              Track Your Progress Each Month With{' '}
              <Text style={styles.calendarTextInner}>Photo</Text>
            </Text>
            <TouchableOpacity style={styles.calendarBtnContainer}>
              <LinearGradient
                colors={['#92A3FD', '#9DCEFF']}
                start={{x: 0.3, y: 0}}
                end={{x: 0, y: 0.6}}
                style={styles.calendarBtn}>
                <Text style={styles.calendarBtnText}>Learn More</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <CalendarIcon />
        </View>
        <View style={styles.compare}>
          <Text style={styles.compareText}>Compare my Photo</Text>
          <TouchableOpacity onPress={() => navigate('Comparison')}>
            <LinearGradient
              colors={['#92A3FD', '#9DCEFF']}
              start={{x: 0.3, y: 0}}
              end={{x: 0, y: 0.6}}
              style={styles.compareBtn}>
              <Text style={styles.compareBtnText}>Compare</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.gallery}>
          <View style={styles.galleryHeader}>
            <Text style={styles.galleryHeaderTitle}>Gallery</Text>
            <TouchableOpacity onPress={() => navigate('Result')}>
              <Text style={styles.galleryHeaderBtn}>See more</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.galleryText}>2 June</Text>
            <ScrollView
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.galleryItems}>
                {arr.map((img, i) => (
                  <Image source={img} style={styles.galleryItem} key={i} />
                ))}
              </View>
            </ScrollView>
          </View>
          <View>
            <Text style={styles.galleryText}>5 May</Text>
            <ScrollView
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.galleryItems}>
                {arr.reverse().map((img, i) => (
                  <Image
                    source={img}
                    style={i !== arr.length - 1 && styles.galleryItem}
                    key={i}
                  />
                ))}
              </View>
            </ScrollView>
          </View>
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
  reminderContainer: {
    backgroundColor: '#ffd1dc',
    borderRadius: 20,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  reminder: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reminderTextContainer: {
    marginLeft: 10,
  },
  reminderTitle: {
    color: '#F00',
    fontSize: 12,
    fontWeight: '400',
    marginBottom: 5,
  },
  reminderText: {
    fontSize: 14,
    fontWeight: '500',
  },
  calendar: {
    backgroundColor: '#c9e9ff',
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 22,
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarText: {
    maxWidth: 165,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
  },
  calendarTextInner: {
    color: '#4281f5',
  },
  calendarBtnContainer: {width: 97, marginTop: 15},
  calendarBtn: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
  },
  calendarBtnText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#fff',
  },
  compare: {
    backgroundColor: '#c9e9ff',
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  compareText: {
    fontSize: 14,
    fontWeight: '500',
  },
  compareBtn: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
  },
  compareBtnText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#fff',
  },
  gallery: {
    marginBottom: 30,
  },
  galleryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  galleryHeaderTitle: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
  },
  galleryHeaderBtn: {
    color: '#ADA4A5',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
  },
  galleryText: {
    color: '#7B6F72',
    fontSize: 12,
    fontWeight: '400',
    marginBottom: 10,
    marginTop: 15,
  },
  galleryItems: {
    flexDirection: 'row',
  },
  galleryItem: {
    marginRight: 10,
  },
});
