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
import BackNavs from '../../assets/svg/BackNavs';
import DetailsNavs from '../../assets/svg/DetailsNavs';
import {TodayTarget} from '../../components/TodayTarget';
import {InnerBtn} from '../../components/InnerBtn';
import FirstPerson from '../../assets/svg/FirstPerson';
import SecondPerson from '../../assets/svg/SecondPerson';
import MoreIcon from '../../assets/svg/MoreIcon';

interface IActivityItem {
  img: React.JSX.Element;
  title: string;
  text: string;
}

const ActivityItems: IActivityItem[] = [
  {
    img: <FirstPerson />,
    title: 'Drinking 300ml Water',
    text: 'About 3 minutes ago',
  },
  {
    img: <SecondPerson />,
    title: 'Eat Snack (Fitbar)',
    text: 'About 10 minutes ago',
  },
];

const width = Dimensions.get('screen').width;
export const Activity = () => {
  return (
    <SafeAreaLayout top bottom style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.headerBtn}>
          <BackNavs />
        </TouchableOpacity>
        <Text style={styles.title}>Activity Tracker</Text>
        <TouchableOpacity style={styles.headerBtn}>
          <DetailsNavs />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TodayTarget />
        <View style={styles.mainContainer}>
          <View style={styles.mainHeader}>
            <Text style={styles.mainTitle}>Activity Progress</Text>
            <InnerBtn text="Weekly" onPress={() => {}} />
          </View>
          <View style={styles.mainInner}>
            <Image
              source={require('../../assets/Graph.png')}
              style={{width: width}}
            />
          </View>
        </View>
        <View>
          <View style={styles.bottomContainer}>
            <Text style={styles.bottomTitle}>Latest Activity</Text>
            <TouchableOpacity>
              <Text style={styles.bottomBtnText}>See more</Text>
            </TouchableOpacity>
          </View>
          {ActivityItems.map((e, i) => (
            <View style={styles.bottomItems} key={i}>
              <View style={styles.bottomItemsContainer}>
                {e.img}
                <View style={styles.bottomItemsInner}>
                  <Text style={styles.bottomInnerTitle}>{e.title}</Text>
                  <Text style={styles.bottomInnerText}>{e.text}</Text>
                </View>
              </View>
              <TouchableOpacity>
                <MoreIcon />
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
  mainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  mainInner: {
    alignItems: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  bottomTitle: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
  },
  bottomBtnText: {
    color: '#ADA4A5',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
  },
  bottomItems: {
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    marginHorizontal: 2,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomItemsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomItemsInner: {
    marginLeft: 8,
  },
  bottomInnerTitle: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
  },
  bottomInnerText: {
    color: '#A4A9AD',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 15,
  },
});
