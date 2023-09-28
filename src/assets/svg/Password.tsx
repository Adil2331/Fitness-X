import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Password = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path
      stroke="#7B6F72"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M12.318 7.086v-1.61a3.414 3.414 0 0 0-3.414-3.414 3.413 3.413 0 0 0-3.427 3.399v1.625"
    />
    <Path
      stroke="#7B6F72"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M11.762 15.937h-5.73a2.844 2.844 0 0 1-2.844-2.844V9.876a2.844 2.844 0 0 1 2.844-2.844h5.73a2.844 2.844 0 0 1 2.845 2.844v3.217a2.844 2.844 0 0 1-2.845 2.844Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#7B6F72"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M8.897 10.652v1.666"
    />
  </Svg>
);
export default Password;
