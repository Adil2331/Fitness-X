import React, {FC, PropsWithChildren} from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type SafeAreaLayoutProps =
  | {
      top?: boolean;
      bottom?: boolean;
      bgGradient?: false;
      start?: {x: number; y: number};
      end?: {x: number; y: number};
      colors?: string[];
      style?: any;
    }
  | {
      top?: boolean;
      bottom?: boolean;
      bgGradient: true;
      start?: {x: number; y: number};
      end?: {x: number; y: number};
      colors: string[];
      style?: any;
    };
export const SafeAreaLayout: FC<PropsWithChildren<SafeAreaLayoutProps>> = ({
  top,
  bottom,
  children,
  style,
  bgGradient,
  colors,
  start,
  end,
}) => {
  const {top: up, bottom: down} = useSafeAreaInsets();

  return bgGradient && colors ? (
    <LinearGradient
      colors={colors}
      start={start}
      end={end}
      style={[style, top && {paddingTop: up}, bottom && {paddingBottom: down}]}>
      {children}
    </LinearGradient>
  ) : (
    <View
      style={[top && {paddingTop: up}, bottom && {paddingBottom: down}, style]}>
      {children}
    </View>
  );
};
