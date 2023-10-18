import * as React from 'react';
import Svg, {
  SvgProps,
  G,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SearchNav = (props: SvgProps) => (
  <Svg width={104} height={102} fill="none" {...props}>
    <G filter="url(#a)">
      <Circle cx={52} cy={42} r={30} fill="url(#b)" />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={82}
        x2={2.032}
        y1={72}
        y2={65.812}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SearchNav;
