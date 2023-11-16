import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const MoreIcon = (props: SvgProps) => (
  <Svg width={14} height={14} fill="none" {...props}>
    <Path
      fill="#ADA4A5"
      stroke="#ADA4A5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 7.583a.583.583 0 1 0 0-1.166.583.583 0 0 0 0 1.166ZM7 3.5a.583.583 0 1 0 0-1.167A.583.583 0 0 0 7 3.5ZM7 11.667A.583.583 0 1 0 7 10.5a.583.583 0 0 0 0 1.167Z"
    />
  </Svg>
);
export default MoreIcon;
