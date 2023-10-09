import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
type InnerBtnProps = {
  onPress: () => void;
  text: string;
};
export const InnerBtn: FC<InnerBtnProps> = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <LinearGradient
        colors={['#92A3FD', '#9DCEFF']}
        start={{x: 1, y: 0.3}}
        end={{x: 0, y: 0.0}}
        style={styles.welcomeBtn}>
        <Text style={styles.btnText}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 80,
    // height: 30,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  welcomeBtn: {
    borderRadius: 99,
  },
  btnText: {
    textAlign: 'center',
    paddingVertical: 8,
    // justifyContent: 'center',

    color: '#FFF',
    fontSize: 12,
    fontWeight: '500',
  },
});
