import React, {useState} from 'react';
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
import BackNavs from '../../assets/svg/BackNavs';
import DetailsNavs from '../../assets/svg/DetailsNavs';

// components
import {SafeAreaLayout} from '../../components/SafeAreaLayout/SafeAreaLayout';
import {BtnLayout} from '../../components/BtnLayout/BtnLayout';
import {AverageProgess} from './AverageProgess';
import {Statistic} from './Statistic';

export const Result = () => {
  const {goBack} = useNavigation<PrivateStackScreenProps['navigation']>();
  const [activeTab, setActiveTab] = useState('photo');

  return (
    <SafeAreaLayout top bottom style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.headerBtn} onPress={goBack}>
          <BackNavs />
        </TouchableOpacity>
        <Text style={styles.title}>Result</Text>
        <TouchableOpacity style={styles.headerBtn}>
          <DetailsNavs />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tabBtn,
              activeTab === 'photo'
                ? styles.tabActiveBtn
                : styles.tabInactiveBtn,
            ]}
            onPress={() => setActiveTab('photo')}>
            <Text
              style={[
                styles.tabText,
                activeTab === 'photo'
                  ? styles.tabActiveText
                  : styles.tabInactiveText,
              ]}>
              Photo
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabBtn,
              activeTab === 'statistic'
                ? styles.tabActiveBtn
                : styles.tabInactiveBtn,
            ]}
            onPress={() => setActiveTab('statistic')}>
            <Text
              style={[
                styles.tabText,
                activeTab === 'statistic'
                  ? styles.tabActiveText
                  : styles.tabInactiveText,
              ]}>
              Statistic
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mainContainer}>
          {activeTab === 'photo' ? <AverageProgess /> : <Statistic />}
        </View>
      </ScrollView>
      <View style={styles.bottom}>
        <BtnLayout text="Back to Home" onPress={goBack} />
      </View>
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
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 99,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginTop: 10,
  },
  tabBtn: {
    paddingVertical: 8,
    borderRadius: 99,
    width: 130,
  },
  tabActiveBtn: {
    backgroundColor: '#92A3FD',
  },
  tabInactiveBtn: {
    backgroundColor: 'transparent',
  },
  tabText: {
    textAlign: 'center',
    fontSize: 16,
  },
  tabActiveText: {
    color: 'white',
    fontWeight: '500',
  },
  tabInactiveText: {
    color: '#ADA4A5',
    fontWeight: '400',
  },
  mainContainer: {
    marginTop: 30,
  },
  bottom: {marginBottom: 20, paddingTop: 20},
});
