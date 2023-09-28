import * as React from 'react';
import Svg, {SvgProps, Mask, Path, G} from 'react-native-svg';
const FirstName = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Mask id="a" width={12} height={7} x={3} y={10} maskUnits="userSpaceOnUse">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M3 10.872h11.88v5.53H3v-5.53Z"
        clipRule="evenodd"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#7B6F72"
        fillRule="evenodd"
        d="M8.94 11.997c-3.195 0-4.815.55-4.815 1.633 0 1.093 1.62 1.648 4.816 1.648 3.195 0 4.814-.55 4.814-1.633 0-1.094-1.62-1.648-4.814-1.648Zm0 4.406c-1.468 0-5.94 0-5.94-2.773 0-2.472 3.39-2.758 5.94-2.758 1.47 0 5.94 0 5.94 2.773 0 2.472-3.39 2.758-5.94 2.758Z"
        clipRule="evenodd"
      />
    </G>
    <Mask id="b" width={9} height={9} x={4} y={1} maskUnits="userSpaceOnUse">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M4.958 1.5h7.964v7.964H4.958V1.5Z"
        clipRule="evenodd"
      />
    </Mask>
    <G mask="url(#b)">
      <Path
        fill="#7B6F72"
        fillRule="evenodd"
        d="M8.94 2.57A2.915 2.915 0 0 0 6.03 5.483a2.905 2.905 0 0 0 2.89 2.912l.022.535v-.535a2.915 2.915 0 0 0 2.91-2.912 2.914 2.914 0 0 0-2.91-2.911Zm0 6.894h-.023a3.975 3.975 0 0 1-3.96-3.984A3.987 3.987 0 0 1 8.942 1.5a3.986 3.986 0 0 1 3.981 3.982 3.986 3.986 0 0 1-3.981 3.982Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default FirstName;
