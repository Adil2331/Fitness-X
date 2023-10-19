import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const CaloriesText = (props: SvgProps) => (
  <Svg width={62} height={44} fill="none" {...props}>
    <Path
      fill="#1D1617"
      d="M.444 8.812c0-.816.188-1.548.564-2.196a4.07 4.07 0 0 1 1.548-1.512 4.316 4.316 0 0 1 2.148-.552c.888 0 1.676.22 2.364.66.696.432 1.2 1.048 1.512 1.848H6.936c-.216-.44-.516-.768-.9-.984-.384-.216-.828-.324-1.332-.324-.552 0-1.044.124-1.476.372a2.628 2.628 0 0 0-1.02 1.068c-.24.464-.36 1.004-.36 1.62 0 .616.12 1.156.36 1.62.248.464.588.824 1.02 1.08.432.248.924.372 1.476.372.504 0 .948-.108 1.332-.324.384-.216.684-.544.9-.984H8.58c-.312.8-.816 1.416-1.512 1.848-.688.432-1.476.648-2.364.648-.784 0-1.5-.18-2.148-.54a4.16 4.16 0 0 1-1.548-1.524C.632 10.36.444 9.628.444 8.812Zm9.281.852c0-.664.136-1.252.408-1.764a3.047 3.047 0 0 1 2.712-1.62c.52 0 .972.104 1.356.312.392.2.704.452.936.756v-.96h1.38V13h-1.38v-.984a2.717 2.717 0 0 1-.948.78c-.4.208-.856.312-1.368.312a2.938 2.938 0 0 1-1.56-.432 3.206 3.206 0 0 1-1.128-1.224c-.272-.528-.408-1.124-.408-1.788Zm5.412.024c0-.456-.096-.852-.288-1.188a1.938 1.938 0 0 0-.732-.768 1.93 1.93 0 0 0-.984-.264c-.352 0-.68.088-.984.264-.304.168-.552.42-.744.756-.184.328-.276.72-.276 1.176 0 .456.092.856.276 1.2.192.344.44.608.744.792a1.974 1.974 0 0 0 1.968 0c.304-.176.548-.432.732-.768.192-.344.288-.744.288-1.2Zm4.545-5.568V13h-1.368V4.12h1.368Zm4.664 8.988c-.624 0-1.188-.14-1.692-.42a3.113 3.113 0 0 1-1.188-1.2c-.288-.52-.432-1.12-.432-1.8 0-.672.148-1.268.444-1.788.296-.52.7-.92 1.212-1.2a3.517 3.517 0 0 1 1.716-.42c.632 0 1.204.14 1.716.42.512.28.916.68 1.212 1.2.296.52.444 1.116.444 1.788 0 .672-.152 1.268-.456 1.788-.304.52-.72.924-1.248 1.212-.52.28-1.096.42-1.728.42Zm0-1.188c.352 0 .68-.084.984-.252.312-.168.564-.42.756-.756.192-.336.288-.744.288-1.224s-.092-.884-.276-1.212a1.855 1.855 0 0 0-.732-.756 2.002 2.002 0 0 0-.984-.252c-.352 0-.68.084-.984.252-.296.168-.532.42-.708.756-.176.328-.264.732-.264 1.212 0 .712.18 1.264.54 1.656.368.384.828.576 1.38.576Zm6.152-4.572c.2-.336.464-.596.793-.78.335-.192.732-.288 1.187-.288v1.416h-.348c-.536 0-.944.136-1.224.408-.271.272-.407.744-.407 1.416V13H29.13V6.388h1.367v.96Zm3.934-1.836a.847.847 0 0 1-.624-.252.847.847 0 0 1-.252-.624c0-.248.084-.456.252-.624a.847.847 0 0 1 .624-.252c.24 0 .444.084.612.252a.847.847 0 0 1 .252.624.847.847 0 0 1-.252.624.833.833 0 0 1-.612.252Zm.672.876V13h-1.368V6.388h1.368Zm7.856 3.144c0 .248-.016.472-.048.672H37.86c.04.528.236.952.588 1.272.352.32.784.48 1.296.48.736 0 1.256-.308 1.56-.924h1.476a2.998 2.998 0 0 1-1.092 1.5c-.52.384-1.168.576-1.944.576-.632 0-1.2-.14-1.704-.42a3.139 3.139 0 0 1-1.176-1.2c-.28-.52-.42-1.12-.42-1.8 0-.68.136-1.276.408-1.788.28-.52.668-.92 1.164-1.2.504-.28 1.08-.42 1.728-.42.624 0 1.18.136 1.668.408.488.272.868.656 1.14 1.152.272.488.408 1.052.408 1.692ZM41.532 9.1c-.008-.504-.188-.908-.54-1.212-.352-.304-.788-.456-1.308-.456-.472 0-.876.152-1.212.456-.336.296-.536.7-.6 1.212h3.66Zm5.174 4.008c-.52 0-.988-.092-1.404-.276a2.536 2.536 0 0 1-.972-.768 1.943 1.943 0 0 1-.384-1.092h1.416a.99.99 0 0 0 .396.708c.248.184.556.276.924.276.384 0 .68-.072.888-.216.216-.152.324-.344.324-.576 0-.248-.12-.432-.36-.552-.232-.12-.604-.252-1.116-.396a10.83 10.83 0 0 1-1.212-.396 2.176 2.176 0 0 1-.816-.588c-.224-.264-.336-.612-.336-1.044 0-.352.104-.672.312-.96.208-.296.504-.528.888-.696.392-.168.84-.252 1.344-.252.752 0 1.356.192 1.812.576.464.376.712.892.744 1.548h-1.368a.974.974 0 0 0-.36-.708c-.216-.176-.508-.264-.876-.264-.36 0-.636.068-.828.204a.632.632 0 0 0-.288.54c0 .176.064.324.192.444s.284.216.468.288c.184.064.456.148.816.252.48.128.872.26 1.176.396.312.128.58.32.804.576.224.256.34.596.348 1.02 0 .376-.104.712-.312 1.008-.208.296-.504.528-.888.696-.376.168-.82.252-1.332.252Z"
    />
    <Path
      fill="url(#a)"
      d="M7.238 29.278 3.514 38H1.526l3.752-8.498H.49v-1.68h6.748v1.456Zm6.466 1.064c-.093-.392-.257-.686-.49-.882-.224-.196-.55-.294-.98-.294-.644 0-1.12.261-1.428.784-.299.513-.453 1.353-.462 2.52a2.23 2.23 0 0 1 .98-.868c.43-.215.896-.322 1.4-.322.607 0 1.143.13 1.61.392.467.261.83.644 1.092 1.148.261.495.392 1.092.392 1.792 0 .663-.135 1.255-.406 1.778a2.833 2.833 0 0 1-1.162 1.204c-.513.29-1.125.434-1.834.434-.97 0-1.736-.215-2.296-.644-.55-.43-.938-1.027-1.162-1.792-.215-.775-.322-1.727-.322-2.856 0-1.708.294-2.996.882-3.864.588-.877 1.517-1.316 2.786-1.316.98 0 1.74.266 2.282.798.541.532.854 1.195.938 1.988h-1.82Zm-1.428 2.548c-.495 0-.91.145-1.246.434-.336.29-.504.71-.504 1.26s.154.985.462 1.302c.317.317.76.476 1.33.476.504 0 .9-.154 1.19-.462.299-.308.448-.723.448-1.246 0-.541-.145-.97-.434-1.288-.28-.317-.695-.476-1.246-.476Zm5.091-.126c0-1.615.29-2.88.868-3.794.588-.915 1.559-1.372 2.912-1.372s2.32.457 2.898 1.372c.588.915.882 2.18.882 3.794 0 1.624-.294 2.898-.882 3.822-.579.924-1.545 1.386-2.898 1.386-1.353 0-2.324-.462-2.912-1.386-.579-.924-.868-2.198-.868-3.822Zm5.628 0c0-.69-.047-1.27-.14-1.736-.084-.476-.261-.863-.532-1.162-.261-.299-.653-.448-1.176-.448-.523 0-.92.15-1.19.448-.261.299-.439.686-.532 1.162-.084.467-.126 1.045-.126 1.736 0 .71.042 1.307.126 1.792.084.476.261.863.532 1.162.27.29.667.434 1.19.434.523 0 .92-.145 1.19-.434.27-.299.448-.686.532-1.162.084-.485.126-1.083.126-1.792ZM34.57 38l-2.632-3.304V38h-1.96V27.64h1.96v5.894l2.604-3.29h2.548l-3.416 3.892L37.118 38H34.57Zm3.108-4.9c0-.961.214-1.82.644-2.576a4.649 4.649 0 0 1 1.777-1.778c.757-.43 1.601-.644 2.535-.644 1.091 0 2.048.28 2.87.84.82.56 1.395 1.335 1.721 2.324h-2.254c-.223-.467-.54-.817-.951-1.05-.402-.233-.869-.35-1.4-.35-.57 0-1.078.135-1.526.406a2.737 2.737 0 0 0-1.037 1.12c-.242.485-.364 1.055-.364 1.708 0 .644.122 1.213.364 1.708.252.485.598.863 1.036 1.134.448.261.957.392 1.526.392.532 0 1-.117 1.4-.35.411-.243.729-.597.953-1.064h2.253c-.326.999-.9 1.778-1.721 2.338-.813.55-1.77.826-2.87.826-.934 0-1.779-.21-2.535-.63a4.78 4.78 0 0 1-1.777-1.778c-.43-.756-.645-1.615-.645-2.576Zm10.718.994c0-.784.154-1.48.462-2.086.317-.607.742-1.073 1.274-1.4a3.428 3.428 0 0 1 1.806-.49c.578 0 1.082.117 1.512.35.438.233.788.527 1.05.882v-1.106h1.974V38H54.5v-1.134c-.252.364-.602.667-1.05.91-.44.233-.948.35-1.526.35-.654 0-1.251-.168-1.792-.504-.532-.336-.957-.807-1.274-1.414-.308-.616-.462-1.32-.462-2.114Zm6.104.028c0-.476-.094-.882-.28-1.218a1.916 1.916 0 0 0-.756-.784 1.981 1.981 0 0 0-1.022-.28c-.364 0-.7.089-1.008.266a2.04 2.04 0 0 0-.756.784c-.187.336-.28.737-.28 1.204 0 .467.093.877.28 1.232.196.345.448.611.756.798.317.187.653.28 1.008.28.364 0 .704-.089 1.022-.266.317-.187.569-.448.756-.784.186-.345.28-.756.28-1.232Zm5.848-6.482V38h-1.96V27.64h1.96Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={62}
        x2={-17.005}
        y1={44}
        y2={25.951}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default CaloriesText;