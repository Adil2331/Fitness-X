import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const ProfileIcon = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M9.987 12.789c-3.223 0-5.975.487-5.975 2.438 0 1.952 2.735 2.457 5.975 2.457 3.223 0 5.975-.488 5.975-2.44 0-1.95-2.734-2.455-5.975-2.455Z"
      clipRule="evenodd"
    />
    <Path
      stroke="url(#b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M9.987 10.005a3.83 3.83 0 1 0-3.83-3.83 3.817 3.817 0 0 0 3.803 3.83h.027Z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={15.962}
        x2={0.492}
        y1={17.684}
        y2={14.761}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={13.817}
        x2={3.608}
        y1={10.005}
        y2={9.215}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default ProfileIcon;
