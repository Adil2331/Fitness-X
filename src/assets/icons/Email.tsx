import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Email = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path
      stroke="#7B6F72"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="m13.427 6.638-3.332 2.71c-.63.5-1.516.5-2.146 0l-3.36-2.71"
    />
    <Path
      stroke="#7B6F72"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M12.682 15.75c2.28.006 3.818-1.868 3.818-4.171V6.428c0-2.304-1.537-4.178-3.818-4.178H5.318C3.038 2.25 1.5 4.124 1.5 6.428v5.15c0 2.304 1.537 4.178 3.818 4.172h7.364Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Email;
