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
import CalendarIcon from '../../assets/svg/CalendarIcon';
import Arrow from '../../assets/ProfileImg/Arrow';
import {BtnLayout} from '../../components/BtnLayout';

const CompareItems = [
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
        <View style={{marginTop: 30}}>
          {CompareItems.map((e, i) => (
            <TouchableOpacity
              key={i}
              style={{
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
              }}>
              <View style={{flexDirection: 'row'}}>
                <CalendarIcon />
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 12,
                    lineHeight: 18,
                    fontWeight: '400',
                    color: '#7B6F72',
                  }}>
                  {e.title}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    marginRight: 10,
                    fontSize: 12,
                    fontWeight: '400',
                    lineHeight: 15,
                    color: '#ADA4A5',
                  }}>
                  {e.text}
                </Text>
                <Arrow />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={{marginBottom: 30}}>
        <BtnLayout text="Compare" />
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
});
