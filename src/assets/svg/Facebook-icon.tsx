import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const FacebookIcon = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill="#1877F2"
      d="M15 1.667h-2.5a4.167 4.167 0 0 0-4.167 4.166v2.5h-2.5v3.334h2.5v6.666h3.334v-6.666h2.5L15 8.333h-3.333v-2.5A.833.833 0 0 1 12.5 5H15V1.667Z"
    />
  </Svg>
);
export default FacebookIcon;
