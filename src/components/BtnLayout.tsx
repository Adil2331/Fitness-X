import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
type BtnLayoutProps = {
  onPress: () => void;
  text: string;
};
export const BtnLayout: FC<BtnLayoutProps> = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <LinearGradient
        colors={['#92A3FD', '#9DCEFF']}
        start={{x: 0.3, y: 0}}
        end={{x: 0, y: 0.6}}
        style={styles.welcomeBtn}>
        <Text style={styles.btnText}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  welcomeBtn: {
    borderRadius: 99,
  },
  btnText: {
    textAlign: 'center',
    paddingVertical: 18,
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
