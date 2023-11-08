import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface IPhotoItem {
  title: string;
  firstImg: any;
  secondImg: any;
}

const PhotoItems: IPhotoItem[] = [
  {
    title: 'Front Facing',
    firstImg: require('../../assets/AverageProgress/Average1.png'),
    secondImg: require('../../assets/AverageProgress/Average2.png'),
  },
  {
    title: 'Back Facing',
    firstImg: require('../../assets/AverageProgress/Average3.png'),
    secondImg: require('../../assets/AverageProgress/Average4.png'),
  },
  {
    title: 'Left Facing',
    firstImg: require('../../assets/AverageProgress/Average5.png'),
    secondImg: require('../../assets/AverageProgress/Average6.png'),
  },
  {
    title: 'Right Facing',
    firstImg: require('../../assets/AverageProgress/Average7.png'),
    secondImg: require('../../assets/AverageProgress/Average8.png'),
  },
];

export const AverageProgess = () => {
  return (
    <View>
      <View style={syles.container}>
        <View style={syles.inner}>
          <Text style={syles.innerTitle}>Average Progress</Text>
          <Text style={syles.innerText}>Good</Text>
        </View>
        <View style={syles.progressLine}>
          <LinearGradient
            colors={['#C58BF2', '#92A3FD']}
            start={{x: 1, y: 0.1}}
            end={{x: 0.7, y: 0.8}}
            style={syles.progressInner}>
            <Text style={syles.progressText}>62%</Text>
          </LinearGradient>
        </View>
      </View>
      <View>
        <View style={syles.titleContainer}>
          <Text style={syles.title}>May</Text>
          <Text style={syles.title}>June</Text>
        </View>

        {PhotoItems.map((e, i) => (
          <View key={i} style={syles.main}>
            <Text style={syles.mainText}>{e.title}</Text>
            <View style={syles.mainInner}>
              <Image source={e.firstImg} />
              <Image source={e.secondImg} />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const syles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  innerTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  innerText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#42D742',
  },
  progressLine: {
    backgroundColor: '#fff',
    height: 20,
    borderRadius: 99,
  },
  progressInner: {
    height: 20,
    width: '62%',
    borderTopLeftRadius: 99,
    borderBottomLeftRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#fff',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  main: {
    marginBottom: 15,
  },
  mainText: {
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 14,
    fontWeight: '500',
    color: '#7B6F72',
  },
  mainInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
