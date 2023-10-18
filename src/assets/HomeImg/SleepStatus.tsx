import * as React from 'react';
import Svg, {
  SvgProps,
  Mask,
  Rect,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const SleepStatus = (props: SvgProps) => (
  <Svg width={110} height={78} fill="none" {...props}>
    <Mask
      id="a"
      width={110}
      height={78}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}>
      <Rect width={110} height={78} fill="#C4C4C4" rx={12} />
    </Mask>
    <G mask="url(#a)">
      <Path
        stroke="url(#b)"
        d="M-20 53c5.286-14.973 18.27-24.16 38.864-27.5 23.267-3.773 34.074 25.074 55.863 18C90.741 38.301 86.965 25.103 99.318 16 109.69 8.357 116.751 4.675 130 0"
        opacity={0.3}
      />
      <Path
        stroke="url(#c)"
        d="M-20 65c5.286-14.973 18.27-24.16 38.864-27.5 23.267-3.773 34.074 25.074 55.863 18C90.741 50.301 86.965 37.103 99.318 28 109.69 20.357 116.751 16.675 130 12"
        opacity={0.3}
      />
      <Path
        stroke="url(#d)"
        d="M-20 61c5.286-14.973 18.27-24.16 38.864-27.5 23.267-3.773 34.074 25.074 55.863 18C90.741 46.301 86.965 33.103 99.318 24 109.69 16.357 116.751 12.675 130 8"
        opacity={0.3}
      />
      <Path
        stroke="url(#e)"
        d="M-20 57c5.286-14.973 18.27-24.16 38.864-27.5 23.267-3.773 34.074 25.074 55.863 18C90.741 42.301 86.965 29.103 99.318 20 109.69 12.357 116.751 8.675 130 4"
        opacity={0.3}
      />
      <Path
        stroke="url(#f)"
        strokeWidth={1.2}
        d="M-4 19c5.04 14.973 17.418 24.16 37.05 27.5 22.181 3.773 32.484-25.074 53.257-18 15.266 5.199 11.666 18.397 23.443 27.5 9.887 7.643 16.619 11.325 29.25 16"
        opacity={0.8}
      />
      <Path
        stroke="url(#g)"
        strokeWidth={1.2}
        d="M-4 7c5.04 14.973 17.418 24.16 37.05 27.5 22.181 3.773 32.484-25.074 53.257-18 15.266 5.198 11.666 18.397 23.443 27.5 9.887 7.643 16.619 11.325 29.25 16"
        opacity={0.8}
      />
      <Path
        stroke="url(#h)"
        strokeWidth={1.2}
        d="M-4 11c5.04 14.973 17.418 24.16 37.05 27.5 22.181 3.773 32.484-25.074 53.257-18 15.266 5.198 11.666 18.397 23.443 27.5 9.887 7.643 16.619 11.325 29.25 16"
        opacity={0.8}
      />
      <Path
        stroke="url(#i)"
        strokeWidth={1.2}
        d="M-4 15c5.04 14.973 17.418 24.16 37.05 27.5 22.181 3.773 32.484-25.074 53.257-18 15.266 5.198 11.666 18.397 23.443 27.5 9.887 7.643 16.619 11.325 29.25 16"
        opacity={0.8}
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={130}
        x2={-61.912}
        y1={53}
        y2={10.971}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#C58BF2" />
        <Stop offset={1} stopColor="#EEA4CE" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={130}
        x2={-61.912}
        y1={65}
        y2={22.971}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#C58BF2" />
        <Stop offset={1} stopColor="#EEA4CE" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={130}
        x2={-61.912}
        y1={61}
        y2={18.971}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#C58BF2" />
        <Stop offset={1} stopColor="#EEA4CE" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={130}
        x2={-61.912}
        y1={57}
        y2={14.971}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#C58BF2" />
        <Stop offset={1} stopColor="#EEA4CE" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={139}
        x2={-44.722}
        y1={19}
        y2={57.358}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={139}
        x2={-44.722}
        y1={7}
        y2={45.358}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={139}
        x2={-44.722}
        y1={11}
        y2={49.358}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={139}
        x2={-44.722}
        y1={15}
        y2={53.358}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SleepStatus;
