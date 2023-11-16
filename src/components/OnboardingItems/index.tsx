import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import OnbGroup1 from '../../assets/svg/OnbGroup1';
import Btn1 from '../../assets/svg/Btn1';
import Btn2 from '../../assets/svg/Btn2';
import Btn3 from '../../assets/svg/Btn3';
import Btn4 from '../../assets/svg/Btn4';
import OnbGroup2 from '../../assets/svg/OnbGroup2';
import OnbGroup3 from '../../assets/svg/OnbGroup3';
import OnbGroup4 from '../../assets/svg/OnbGroup4';
import {SafeAreaLayout} from '../SafeAreaLayout';
import {useNavigation} from '@react-navigation/native';
import {PublicStackScreenProps} from '../../navigation/Public';
import {spaces} from '../../theme';

type IOnboardingItems = {
  state: number;
  setState: (e: number) => void;
};

interface IDataItem {
  id: number;
  img: React.JSX.Element;
  title: string;
  description: string;
  icon: React.JSX.Element;
}

const OnboardingData: IDataItem[] = [
  {
    id: 0,
    img: <OnbGroup1 width={spaces.windowWidth} />,
    title: 'Track Your Goal',
    description:
      "Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals",
    icon: <Btn1 />,
  },
  {
    id: 1,
    img: <OnbGroup2 width={spaces.windowWidth} />,
    title: 'Get Burn',
    description:
      'Let’s keep burning, to achive yours goals, it hurts only temporarily, if you give up now you will be in pain forever',
    icon: <Btn2 />,
  },
  {
    id: 2,
    img: <OnbGroup3 width={spaces.windowWidth} />,
    title: 'Eat Well',
    description:
      "Let's start a healthy lifestyle with us, we can determine your diet every day. healthy eating is fun",
    icon: <Btn3 />,
  },
  {
    id: 3,
    img: <OnbGroup4 width={spaces.windowWidth} />,
    title: 'Improve Sleep  Quality',
    description:
      'Improve the quality of your sleep with us, good quality sleep can bring a good mood in the morning',
    icon: <Btn4 />,
  },
];

export const OnboardingItems: FC<IOnboardingItems> = ({state, setState}) => {
  const {navigate} = useNavigation<PublicStackScreenProps['navigation']>();
  return (
    <SafeAreaLayout style={[styles.container]} bottom>
      <View style={styles.headerContainer}>{OnboardingData[state].img}</View>
      <View style={styles.innerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{OnboardingData[state].title}</Text>
          <Text style={styles.text}>{OnboardingData[state].description}</Text>
        </View>
        <View style={styles.btnContainer}>
          {state < 3 ? (
            <TouchableOpacity onPress={() => setState(state + 1)}>
              {OnboardingData[state].icon}
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => navigate('Register')}>
              {OnboardingData[state].icon}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    minHeight: '57.5%',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    alignItems: 'flex-start',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 15,
  },
  text: {
    color: '#7B6F72',
    fontSize: 14,
    fontWeight: '400',
  },
  btnContainer: {
    alignItems: 'flex-end',
  },
});
