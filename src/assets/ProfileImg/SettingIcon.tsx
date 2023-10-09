import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const SettingIcon = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="m17.339 6.353-.519-.9a1.594 1.594 0 0 0-2.174-.587v0a1.587 1.587 0 0 1-2.174-.565 1.526 1.526 0 0 1-.213-.763v0a1.594 1.594 0 0 0-1.594-1.64H9.62a1.587 1.587 0 0 0-1.587 1.595v0a1.594 1.594 0 0 1-1.594 1.571 1.526 1.526 0 0 1-.763-.214v0a1.594 1.594 0 0 0-2.174.588l-.557.915c-.438.76-.179 1.733.58 2.174v0a1.594 1.594 0 0 1 0 2.761v0a1.587 1.587 0 0 0-.58 2.166v0l.527.908a1.594 1.594 0 0 0 2.174.618v0a1.579 1.579 0 0 1 2.166.58c.137.23.21.494.213.763v0c0 .88.714 1.594 1.595 1.594h1.045c.877 0 1.59-.71 1.594-1.587v0a1.587 1.587 0 0 1 1.594-1.594c.268.007.53.08.763.213v0c.76.439 1.732.18 2.174-.58v0l.549-.915a1.587 1.587 0 0 0-.58-2.173v0a1.587 1.587 0 0 1-.58-2.174c.139-.242.339-.442.58-.58v0a1.594 1.594 0 0 0 .58-2.166v0-.008Z"
      clipRule="evenodd"
    />
    <Circle
      cx={10.146}
      cy={9.907}
      r={2.197}
      stroke="url(#b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={17.555}
        x2={-2.218}
        y1={17.917}
        y2={16.501}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={12.343}
        x2={6.487}
        y1={12.104}
        y2={11.651}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SettingIcon;
