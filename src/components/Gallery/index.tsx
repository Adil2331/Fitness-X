import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {PrivateStackScreenProps} from '../../navigation/Private';

export const Gallery = () => {
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
  );
};

const styles = StyleSheet.create({
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
