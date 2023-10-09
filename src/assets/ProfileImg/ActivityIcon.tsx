import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const ActivityIcon = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M14.398 11.574c.563 0 1.034.464.949 1.02a6.715 6.715 0 0 1-6.674 5.692 6.756 6.756 0 0 1-6.756-6.756c0-3.073 2.335-5.936 4.964-6.584.565-.14 1.144.258 1.144.84 0 3.94.132 4.96.88 5.514.749.554 1.628.274 5.493.274Z"
      clipRule="evenodd"
    />
    <Path
      stroke="url(#b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M18.077 8.293c.045-2.532-3.065-6.612-6.854-6.542a.566.566 0 0 0-.544.545c-.096 2.081.033 4.779.105 6.001.022.381.321.68.701.702 1.257.072 4.053.17 6.105-.14a.579.579 0 0 0 .487-.566Z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={15.357}
        x2={-2.555}
        y1={18.286}
        y2={16.892}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={18.078}
        x2={8.173}
        y1={9.073}
        y2={8.295}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default ActivityIcon;
