import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Arrow = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path
      stroke="#7B6F72"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M6.375 3.75 11.625 9l-5.25 5.25"
    />
  </Svg>
);
export default Arrow;
