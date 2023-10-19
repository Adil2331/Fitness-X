import * as React from 'react';
import Svg, {
  SvgProps,
  Circle,
  Mask,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const HomeActivity1 = (props: SvgProps) => (
  <Svg width={50} height={50} fill="none" {...props}>
    <Circle cx={25} cy={25} r={25} fill="url(#a)" opacity={0.3} />
    <Mask
      id="b"
      width={50}
      height={50}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}>
      <Circle cx={25} cy={25} r={25} fill="#C4C4C4" />
    </Mask>
    <G mask="url(#b)">
      <Path
        fill="url(#c)"
        d="M24.296 61.066c-.856.002-1.71-.089-2.547-.27a10.086 10.086 0 0 1-4.036-1.825 10.122 10.122 0 0 1-2.87-3.38 18.01 18.01 0 0 1-1.223-3.873l-.06-.254c-.857-3.665-1.938-7.54-3.933-11.043a49.2 49.2 0 0 0-1.012-1.669 21.959 21.959 0 0 1-2.072-3.902c-.858-2.344-.699-4.676.472-6.212a2.109 2.109 0 0 1 1.368-.925 1.243 1.243 0 0 1 .953.284.93.93 0 0 1 .347.676h-.279a.66.66 0 0 0-.249-.47.99.99 0 0 0-.737-.223 1.93 1.93 0 0 0-1.18.817c-1.11 1.468-1.287 3.692-.429 5.946a21.568 21.568 0 0 0 2.059 3.872c.339.546.69 1.11 1.017 1.677 1.998 3.528 3.092 7.425 3.95 11.112l.06.254c.255 1.31.658 2.588 1.201 3.807a9.826 9.826 0 0 0 2.79 3.285 9.792 9.792 0 0 0 3.923 1.77c2.875.572 5.86.166 8.48-1.153a8.778 8.778 0 0 0 2.787-1.974 10.432 10.432 0 0 0 1.832-3.296c.716-1.884 1.287-3.871 1.801-5.786.794-2.856 1.613-5.812 3.003-8.488.429-.782.858-1.553 1.312-2.297a24.218 24.218 0 0 0 2.145-4.229c.493-1.402.515-2.58.069-3.441a2.23 2.23 0 0 0-1.523-1.119 1.471 1.471 0 0 0-1.287.306l-.184-.211a1.749 1.749 0 0 1 1.522-.379 2.516 2.516 0 0 1 1.716 1.29c.485.947.463 2.178-.056 3.658a23.857 23.857 0 0 1-2.179 4.276c-.428.744-.9 1.51-1.286 2.284-1.373 2.65-2.188 5.593-2.977 8.432-.536 1.927-1.09 3.919-1.814 5.812a10.666 10.666 0 0 1-1.88 3.386 9.093 9.093 0 0 1-2.877 2.039 14.172 14.172 0 0 1-6.117 1.436Z"
      />
      <Path
        fill="#3B2645"
        d="M27.445 10.974c.221-.353.349-.757.369-1.174a1.294 1.294 0 0 0-.33-1.041c-.108-.103-.24-.185-.34-.297-.098-.112-.145-.228-.227-.336a.944.944 0 0 0-.75-.37c-.296 0-.61.138-.858 0-.155-.077-.258-.232-.43-.318a.77.77 0 0 0-.523-.064 1.318 1.318 0 0 1-.48.073c-.232-.035-.39-.241-.596-.357a.814.814 0 0 0-1.15.486.666.666 0 0 0 0 .331c.047.262.228.473.24.736.013.262-.145.49 0 .722.146.233.36.241.464.46.137.298 0 .685.124 1.003.065.202.099.49.288.62.261.18.832.03 1.145 0l1.214-.1c.536-.051 1.196 0 1.681-.266a.575.575 0 0 0 .159-.108Z"
      />
      <Path
        fill="#E0855C"
        d="M23.327 10.785a.46.46 0 0 0-.742 0c-.373.43.258 1.29.742 1.342.028-.447.028-.895 0-1.342Z"
      />
      <Path
        fill="#FFEDE5"
        d="M29.354 17.99a20.557 20.557 0 0 1-.455 2.152c-.03.133-.056.262-.073.387-.017.125-.034.22-.056.378v.095c0 .103-.03.21-.043.327l-.54 5.055c-3.359.925-6.863 0-6.863 0v-.19c-.056-.572-.227-2.391-.399-4.443v-.044a.83.83 0 0 0 0-.094 132.18 132.18 0 0 1-.197-2.642c-.103-1.51-.168-2.903-.155-3.768 0-.318.742-.284 1.249-.353a15.654 15.654 0 0 1 1.831-.129h.189l.043-.499L24 13.01c.057.014.114.025.172.03.106.02.214.031.322.034h.399l.184-.021h.107c.12-.021.236-.047.343-.077.108-.03.142-.043.21-.065.314-.1.612-.245.884-.43l.039-.026.073-.056.051-.039v.112c-.034.284-.073.646-.09 1.003 0 .25-.026.494-.034.705-.009.21-.077.516.073.624a.6.6 0 0 0 .171.064c.236.038.474.053.712.048h.22c.182-.01.365-.01.548 0a.955.955 0 0 1 .686.288c.111.161.182.347.206.542l.052.353c.081.628.09 1.263.026 1.893Z"
      />
      <Path
        fill="#E0855C"
        d="M26.767 12.33a2.124 2.124 0 0 1-1.062 1.466 2.111 2.111 0 0 1-1.803.108l.081-.89a3.422 3.422 0 0 0 2.784-.685Z"
      />
      <Path
        fill="#FFEDE5"
        d="M23.413 9.494c-.249.259-.27.835-.287 1.472-.065 1.936.514 2.538 1.497 2.645.982.108 2.016-.275 2.226-2.065.107-.899.218-1.72-.108-2.112-.467-.576-2.573-.731-3.328.06Z"
      />
      <Path
        fill="#FFEDE5"
        d="M26.703 11.284s.3-.8.776-.374c.476.426-.18 1.634-.91 1.544.01 0-.09-.895.134-1.17Z"
      />
      <Path
        fill="#E0855C"
        d="M27.269 11.275a.647.647 0 0 0-.292.19.808.808 0 0 0-.21.27c0 .03.03.052.052.03.06-.06.117-.122.171-.189.04.044.088.078.142.1.043 0 .077-.04.06-.074a.36.36 0 0 0-.116-.111c.08-.052.156-.11.227-.173a.034.034 0 0 0-.006-.03.034.034 0 0 0-.013-.01.033.033 0 0 0-.015-.003Z"
      />
      <Path
        fill="#3B2645"
        d="M23.97 10.922s-.167.06-.14-.236c.025-.297.14-.228.14-.228s.117 0 .1.232c-.018.232-.1.232-.1.232ZM25.656 10.922s-.163.06-.137-.236c.026-.297.137-.228.137-.228s.116 0 .099.232-.099.232-.099.232ZM24.15 10.024a.368.368 0 0 0-.428.047.039.039 0 0 0 .015.05.04.04 0 0 0 .02.006c.06 0 .11-.035.17-.039a.448.448 0 0 1 .185.03c.056.018.095-.069.039-.094ZM25.91 10.17c-.07-.172-.365-.185-.494-.082a.05.05 0 0 0-.015.064.05.05 0 0 0 .015.018 1.4 1.4 0 0 0 .232 0c.062.01.123.029.18.056a.05.05 0 0 0 .068.013.05.05 0 0 0 .013-.07Z"
      />
      <Path
        fill="#fff"
        d="M24.31 12.308a1.81 1.81 0 0 0 1.055-.18.894.894 0 0 1-.528.494c-.373.103-.528-.314-.528-.314Z"
      />
      <Path
        fill="#FFEDE5"
        d="M22.143 15.199c.987.693 1.077 2.04.596 3.115-.326.718-.93 1.221-1.286 1.901-.371.66-.802 1.283-1.287 1.863a132.124 132.124 0 0 1-2.466 3.046c-1.343 1.609-4.165 3.734-5.182 4.474-.232.172-.369.266-.369.266s-.973-.512-.716-1.458c0 0 3.86-4.113 4.43-4.952a35.909 35.909 0 0 0 1.716-3.364 95.97 95.97 0 0 1 2.055-3.777c.326-.572.742-1.29 1.458-1.42.29-.032.581.03.832.177.076.038.15.08.22.129Z"
      />
      <Path
        fill="#FFEDE5"
        d="M11.433 28.41a2.05 2.05 0 0 1 .318 0s.926.516.767 1.188c0 0-.098.09-.253.228-.154.137-.322.3-.523.507-.202.207-.66.86-.858.805a.258.258 0 0 1-.116-.086l-.399-.43c-.223-.25-.596-.672-.313-1.003-.206.125-.686.43-.922.284l-.099-.16s.708-.528 1-.79c.393-.332.885-.522 1.398-.543Z"
      />
      <Path
        fill="#D6BED3"
        d="M23.314 21.79a.566.566 0 0 0 0 .069h.03l-.03-.07Z"
      />
      <Path
        fill="#FFEDE5"
        d="M24.905 35.732c-.394 3.17-.857 5.928-.857 5.928.064.766.094 1.596.094 2.448 0 1.67-.111 3.442-.253 5.003-.18 1.992-.429 3.687-.536 4.539v.107c.159 5.649-1.446 6.397-2.196 5.163-.75-1.235 0-4.875 0-4.875a.682.682 0 0 0 0-.099 41.562 41.562 0 0 1-.63-5.114c-.258-4.156.184-7 .132-7.516-.896-9.034.356-14.016.356-14.016a5.081 5.081 0 0 1 1.034-1.966c.913-.99 2.012-.74 2.702.47.073.123.139.25.197.382a6.52 6.52 0 0 1 .472 2.181c.069 1.871-.193 4.758-.515 7.365Z"
      />
      <Path
        fill="#FFEDE5"
        d="M29.336 48.612a42.138 42.138 0 0 1-.626 5.223l-.039.21s.75 3.653 0 4.875c-.75 1.221-2.337.507-2.196-5.085v-.074a86.33 86.33 0 0 1-.549-4.633c-.146-1.574-.257-3.338-.257-5.007 0-.86.034-1.687.098-2.457 0 0-.476-2.757-.857-5.923-.322-2.612-.588-5.498-.476-7.352.032-.75.193-1.488.476-2.182.056-.135.122-.265.197-.391.794-1.381 2.115-1.501 3.088.056.28.451.498.937.652 1.445 0 0 1.253 4.97.356 14.016-.064.508.36 3.252.133 7.28Z"
      />
      <Path
        fill="#3B2645"
        d="M11.33 31.202a.892.892 0 0 0 .69.31.454.454 0 0 0 .335-.568.861.861 0 0 0-.236-.34 48.103 48.103 0 0 0-1.986-1.888.789.789 0 0 0-.429-.25.65.65 0 0 0-.643.546c0 .276.236.379.429.534.609.542 1.218 1.11 1.84 1.656Z"
      />
      <Path
        fill="#FFEDE5"
        d="M11.236 30.44a.336.336 0 0 0 .064-.094.301.301 0 0 0-.056-.258c-.158-.263-.484-.684-.806-.723a.608.608 0 0 0-.54.275 1.047 1.047 0 0 0-.12.964c.094.285.287.526.544.68a.539.539 0 0 0 .7-.267c.064-.16.042-.353.145-.486a.526.526 0 0 1 .069-.09ZM27.65 15.199c-.99.693-1.08 2.04-.595 3.115.321.718.926 1.221 1.286 1.901.374.657.805 1.28 1.287 1.863a144.94 144.94 0 0 0 2.466 3.046c1.347 1.617 4.17 3.734 5.186 4.474l.373.266s.97-.512.712-1.458c0 0-3.86-4.113-4.43-4.951a34.874 34.874 0 0 1-1.716-3.365 86.129 86.129 0 0 0-2.06-3.777c-.325-.572-.737-1.29-1.457-1.42-.29-.032-.581.03-.833.177-.076.037-.149.08-.218.129Z"
      />
      <Path
        fill="#FFEDE5"
        d="M38.36 28.41a2.132 2.132 0 0 0-.32 0s-.927.516-.768 1.188c0 0 .102.09.253.228.15.137.325.3.523.507.197.207.665.86.858.805a.284.284 0 0 0 .116-.087l.394-.43c.227-.25.596-.67.318-1.002.201.125.681.43.922.284l.081-.16s-.708-.528-1.004-.79a2.3 2.3 0 0 0-1.372-.543Z"
      />
      <Path
        fill="#3B2645"
        d="M38.46 31.202a.893.893 0 0 1-.69.31.453.453 0 0 1-.344-.568.86.86 0 0 1 .24-.322 58.999 58.999 0 0 1 1.99-1.89.776.776 0 0 1 .43-.249.647.647 0 0 1 .638.547c0 .275-.231.378-.428.533-.605.525-1.214 1.093-1.836 1.64Z"
      />
      <Path
        fill="#FFEDE5"
        d="M38.558 30.44a.28.28 0 0 1-.069-.094.318.318 0 0 1 .06-.258c.155-.263.48-.684.803-.723a.608.608 0 0 1 .54.275 1.035 1.035 0 0 1 .107.964 1.212 1.212 0 0 1-.544.68.539.539 0 0 1-.7-.267c-.06-.16-.038-.353-.145-.486l-.052-.09Z"
      />
      <Path
        fill="#3B2645"
        d="M29.4 45.854v1.67c0 .352-.025.718-.042 1.092-1.11.307-2.254.48-3.406.512a70.982 70.982 0 0 1-.146-1.906c0-.292-.064-1.118-.068-1.23a45.811 45.811 0 0 1-.043-1.871c0-.8.03-1.584.09-2.31v-.147c0-.047-.476-2.753-.858-5.924a138.356 138.356 0 0 1-.87 5.924 29.6 29.6 0 0 1 .094 2.448c0 .65 0 1.29-.047 1.97 0 .112-.086 1.55-.1 1.687-.03.46-.068.912-.106 1.346-.6-.026-1.193-.064-1.78-.116-.464-.039-1.047-.065-1.613-.146a36.348 36.348 0 0 1-.056-1.119v-1.686c0-2.607.253-4.324.215-4.732-.897-9.034.356-14.016.356-14.016a5.081 5.081 0 0 1 1.033-1.966c.368.057.729.152 1.077.284.53.139 1.078.201 1.626.185h.394c.476 0 .952-.056 1.424-.069h.318c.452-.007.904.037 1.346.13.265.455.47.944.61 1.453.346 1.624.55 3.275.608 4.934a59.99 59.99 0 0 1-.253 9.082c-.051.383.176 2.022.198 4.521Z"
      />
      <Path
        fill="#F7F8F8"
        d="M12.21 14.687c0-.026-.052-.026-.056 0-.215 1.467-.09 3.011-.09 4.512 0 1.588-.052 3.188.043 4.771a.078.078 0 0 0 .075.06.077.077 0 0 0 .075-.06c.09-1.583.038-3.183.038-4.77 0-1.468.125-3.034-.085-4.513ZM14.084 15.186a.094.094 0 0 0-.185 0c0 1.41-.09 2.848 0 4.254a.09.09 0 0 0 .09.09.09.09 0 0 0 .09-.09c.1-1.406.013-2.843.005-4.254ZM33.26 29.959a.06.06 0 0 0-.057-.044.06.06 0 0 0-.058.044c-.12 1.847-.145 3.7-.073 5.55 0 1.85 0 3.695.069 5.545a.064.064 0 0 0 .124 0c.06-1.85.06-3.696.069-5.546.07-1.85.045-3.702-.073-5.55ZM36.568 19.14a34.006 34.006 0 0 0-.24-3.683c0-.073-.116-.052-.12 0a36.558 36.558 0 0 0 .116 3.962c.055 1.226.042 2.482.205 3.695 0 .112.19.078.193-.026.06-1.312-.077-2.65-.154-3.949ZM37.426 19.823a.047.047 0 0 0-.045-.033.048.048 0 0 0-.045.033 44.75 44.75 0 0 0-.026 5.309.073.073 0 0 0 .128.063.074.074 0 0 0 .013-.063 44.75 44.75 0 0 0-.025-5.309Z"
      />
      <Path
        fill="#291B30"
        d="M24.777 36.73c.006-.335.05-.668.128-.994-.042.336-.085.671-.128.994ZM29.444 32.252c-.58-3.49-5.362-3.653-5.362-3.653-.296-1.436 1.634-1.867 1.634-1.867l1.128-.976c.453-.007.904.036 1.347.129.28.447.5.928.657 1.432a29.04 29.04 0 0 1 .596 4.935Z"
      />
      <Path
        fill="url(#d)"
        d="M28.916 27.692c-3.86 1.82-8.055.15-8.055.15.304-.86.077-5.248.055-6.083v-.043a.88.88 0 0 0 0-.095c.811-1.884.901-5.515.905-6.762a11.03 11.03 0 0 1 1.077-.103c.129 1.393.588 4.968 1.866 4.814 1.278-.155 1.887-3.339 2.11-4.733.235.04.474.056.712.048h.219c-.112 1.905.944 5.91.974 6.022v.095c0 .103-.03.21-.043.327v.073c-.27 2.426.18 6.29.18 6.29Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="a"
        x1={50}
        x2={-16.64}
        y1={50}
        y2={44.843}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={43.831}
        x2={-6.504}
        y1={61.066}
        y2={56.65}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={28.916}
        x2={18.138}
        y1={28.541}
        y2={28.054}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default HomeActivity1;