import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const MessageIcon = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="m14.919 7.376-3.703 3.01c-.7.556-1.684.556-2.383 0l-3.734-3.01"
    />
    <Path
      stroke="url(#b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M14.09 17.5c2.535.007 4.243-2.075 4.243-4.635V7.142c0-2.56-1.708-4.642-4.242-4.642H5.909c-2.534 0-4.242 2.082-4.242 4.642v5.723c0 2.56 1.708 4.642 4.242 4.635h8.182Z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={14.919}
        x2={2.369}
        y1={10.803}
        y2={8.02}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={18.333}
        x2={-3.849}
        y1={17.5}
        y2={15.593}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default MessageIcon;
