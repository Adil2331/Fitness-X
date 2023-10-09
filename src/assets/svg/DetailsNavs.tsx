import * as React from 'react';
import Svg, {SvgProps, Rect, Circle} from 'react-native-svg';
const DetailsNavs = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Rect width={32} height={32} fill="#F7F8F8" rx={8} />
    <Circle cx={13} cy={16} r={2} fill="#1D1617" />
    <Circle cx={19} cy={16} r={2} fill="#1D1617" />
  </Svg>
);
export default DetailsNavs;
