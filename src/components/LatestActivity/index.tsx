import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// assets
import MoreIcon from '../../assets/svg/MoreIcon';
import FirstPerson from '../../assets/svg/FirstPerson';
import SecondPerson from '../../assets/svg/SecondPerson';

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

export const LatestActivity = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
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
