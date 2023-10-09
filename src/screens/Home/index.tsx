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
const width = Dimensions.get('screen').width;
export const Home = () => {
  return (
    <SafeAreaLayout style={styles.container} bottom top>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.headerText}>Welcome Back,</Text>
            <Text style={styles.headerTitle}>Stefani Wong</Text>
          </View>
          <TouchableOpacity style={styles.notificationBtn}>
            <NotificationIcon />
          </TouchableOpacity>
        </View>
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
            // resizeMode="cover"
          />
        </View>
        {/* <View
          style={
            {
              // flexDirection: 'row',
              // justifyContent: 'center',
              // alignItems: 'center',
            }
          }>
          <Image source={require('../../assets/HomeImg/HomeStatus-1.png')} />
          <View style={{backgroundColor: 'red', padding: 0, }}>
            <Image source={require('../../assets/HomeImg/HomeStatus-2.png')} />
            <Image source={require('../../assets/HomeImg/HomeStatus-3.png')} />
          </View>
        </View> */}
      </ScrollView>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    padding: 11,
    borderRadius: 8,
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
});
