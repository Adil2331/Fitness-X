import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const CalendarIcon = (props: SvgProps) => (
  <Svg width={16} height={18} fill="none" {...props}>
    <Path
      stroke="#7B6F72"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M1.32 7.053h13.367M11.332 9.983h.006M8.003 9.983h.007M4.668 9.983h.007M11.332 12.898h.006M8.003 12.898h.007M4.668 12.898h.007M11.033 1.5v2.468M4.974 1.5v2.468"
    />
    <Path
      stroke="#7B6F72"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M11.179 2.685h-6.35c-2.203 0-3.579 1.227-3.579 3.482v6.787c0 2.29 1.376 3.546 3.578 3.546h6.344c2.21 0 3.578-1.234 3.578-3.49V6.168c.007-2.255-1.362-3.482-3.571-3.482Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default CalendarIcon;
