import * as React from 'react';
import Svg, {
  SvgProps,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const ProfileNavActive = (props: SvgProps) => (
  <Svg width={24} height={31} fill="none" {...props}>
    <Circle cx={12} cy={29} r={2} fill="url(#a)" />
    <Path
      fill="url(#b)"
      fillRule="evenodd"
      d="M17.294 7.291A5.274 5.274 0 0 1 12 12.583a5.275 5.275 0 0 1-5.294-5.292A5.274 5.274 0 0 1 12 2a5.273 5.273 0 0 1 5.294 5.291ZM12 22c-4.338 0-8-.705-8-3.425 0-2.721 3.685-3.401 8-3.401 4.339 0 8 .705 8 3.425C20 21.32 16.315 22 12 22Z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={14}
        x2={8.669}
        y1={31}
        y2={30.587}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#C58BF2" />
        <Stop offset={1} stopColor="#EEA4CE" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={20}
        x2={-1.37}
        y1={22}
        y2={20.677}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#C58BF2" />
        <Stop offset={1} stopColor="#EEA4CE" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default ProfileNavActive;
