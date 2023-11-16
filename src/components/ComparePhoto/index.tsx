import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {PrivateStackScreenProps} from '../../navigation/Private';

export const ComparePhoto = () => {
  const {navigate} = useNavigation<PrivateStackScreenProps['navigation']>();
  return (
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
  );
};

const styles = StyleSheet.create({
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
});
