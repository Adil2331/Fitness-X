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
import BackNavs from '../../assets/icons/BackNavs';
import DetailsNavs from '../../assets/icons/DetailsNavs';
import CalendarIcon from '../../assets/icons/CalendarIcon';
import Arrow from '../../assets/icons/ProfileImg/Arrow';

// components
import {SafeAreaLayout} from '../../components/SafeAreaLayout/SafeAreaLayout';
import {BtnLayout} from '../../components/BtnLayout/BtnLayout';

interface ICompareItem {
  title: string;
  text: string;
}

const CompareItems: ICompareItem[] = [
  {title: 'Select Month 1', text: 'May'},
  {title: 'Select Month 2', text: 'Select Month'},
];

export const Comparison = () => {
  const {goBack} = useNavigation<PrivateStackScreenProps['navigation']>();

  return (
    <SafeAreaLayout top bottom style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.headerBtn} onPress={goBack}>
          <BackNavs />
        </TouchableOpacity>
        <Text style={styles.title}>Comparison</Text>
        <TouchableOpacity style={styles.headerBtn}>
          <DetailsNavs />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          {CompareItems.map((e, i) => (
            <TouchableOpacity key={i} style={styles.main}>
              <View style={styles.mainInner}>
                <CalendarIcon />
                <Text style={styles.mainTitle}>{e.title}</Text>
              </View>
              <View style={styles.mainInner}>
                <Text style={styles.mainText}>{e.text}</Text>
                <Arrow />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={styles.bottom}>
        <BtnLayout text="Compare" onPress={() => {}} />
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
  mainContainer: {
    marginTop: 30,
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 16,
    marginHorizontal: 1,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  mainInner: {
    flexDirection: 'row',
  },
  mainTitle: {
    marginLeft: 10,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
    color: '#7B6F72',
  },
  mainText: {
    marginRight: 10,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 15,
    color: '#ADA4A5',
  },
  bottom: {
    marginBottom: 30,
  },
});
