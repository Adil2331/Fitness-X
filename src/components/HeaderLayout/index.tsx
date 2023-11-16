import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// assets
import BackNavs from '../../assets/svg/BackNavs';
import DetailsNavs from '../../assets/svg/DetailsNavs';

type HeaderLayoutProps = {
  onPress: () => void;
  text: string;
};

export const HeaderLayout: FC<HeaderLayoutProps> = ({onPress, text}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.headerBtn} onPress={onPress}>
        <BackNavs />
      </TouchableOpacity>
      <Text style={styles.title}>{text}</Text>
      <TouchableOpacity style={styles.headerBtn}>
        <DetailsNavs />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
