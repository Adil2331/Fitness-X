import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const CloseIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      stroke="#7B6F72"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="m12 4-8 8M4 4l8 8"
    />
  </Svg>
);
export default CloseIcon;
