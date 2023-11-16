import * as React from 'react';
import Svg, {
  SvgProps,
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const WorkoutProgress = (props: SvgProps, width) => (
  <Svg width={191} height={10} fill="none" {...props}>
    <Rect width={191} height={10} fill="#F7F8F8" rx={5} />
    <Path
      fill="url(#a)"
      d={`M0 5a5 5 0 0 1 5-5h56${width}v10H5a5 5 0 0 1-5-5Z`}
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={104}
        x2={15.269}
        y1={5}
        y2={-21.255}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#C58BF2" />
        <Stop offset={1} stopColor="#92A3FD" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default WorkoutProgress;
