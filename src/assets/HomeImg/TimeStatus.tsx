import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Circle,
  G,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const TimeStatus = (props: SvgProps) => (
  <Svg width={97} height={199} fill="none" {...props}>
    <Path
      fill="#ADA4A5"
      d="M26.72 24.592c-.117-.592-.483-.888-1.096-.888-.475 0-.83.184-1.064.552-.235.363-.35.963-.344 1.8a1.35 1.35 0 0 1 .608-.648c.288-.16.608-.24.96-.24.55 0 .987.17 1.312.512.33.341.496.813.496 1.416 0 .363-.072.688-.216.976a1.59 1.59 0 0 1-.64.688c-.283.17-.627.256-1.032.256-.55 0-.979-.123-1.288-.368-.31-.245-.525-.584-.648-1.016-.123-.432-.184-.965-.184-1.6 0-1.957.683-2.936 2.048-2.936.523 0 .933.141 1.232.424.299.283.475.64.528 1.072h-.672Zm-1.088 1.192c-.23 0-.445.048-.648.144-.203.09-.368.232-.496.424a1.226 1.226 0 0 0-.184.688c0 .405.117.736.352.992.235.25.57.376 1.008.376.373 0 .67-.115.888-.344.224-.235.336-.55.336-.944 0-.416-.107-.741-.32-.976-.213-.24-.525-.36-.936-.36Zm2.79 1.008c0-.448.09-.84.272-1.176.181-.341.43-.605.744-.792.32-.187.675-.28 1.064-.28.384 0 .718.083 1 .248.283.165.494.373.632.624v-.8h.736V29h-.736v-.816c-.144.256-.36.47-.648.64a1.93 1.93 0 0 1-.992.248c-.39 0-.741-.096-1.056-.288a2.02 2.02 0 0 1-.744-.808 2.517 2.517 0 0 1-.272-1.184Zm3.712.008c0-.33-.066-.619-.2-.864a1.376 1.376 0 0 0-.544-.56 1.428 1.428 0 0 0-.744-.2c-.272 0-.52.064-.744.192a1.394 1.394 0 0 0-.536.56c-.133.245-.2.533-.2.864 0 .336.067.63.2.88.134.245.312.435.536.568.224.128.472.192.744.192s.52-.064.744-.192c.23-.133.41-.323.544-.568.134-.25.2-.541.2-.872Zm7.238-2.264c.342 0 .646.072.912.216.267.139.478.35.632.632.155.283.232.627.232 1.032V29h-.72v-2.48c0-.437-.109-.77-.328-1-.213-.235-.504-.352-.872-.352-.378 0-.68.123-.904.368-.224.24-.336.59-.336 1.048V29h-.72v-2.48c0-.437-.109-.77-.328-1-.213-.235-.504-.352-.872-.352-.378 0-.68.123-.904.368-.224.24-.336.59-.336 1.048V29H34.1v-4.384h.728v.632c.144-.23.336-.405.576-.528a1.78 1.78 0 0 1 .808-.184c.368 0 .694.083.976.248.283.165.494.408.632.728.123-.31.326-.55.608-.72a1.79 1.79 0 0 1 .944-.256Zm8.143 1.224v.616h-3.192v-.616h3.192Zm4.435.232a1.485 1.485 0 0 1-.688-.512 1.367 1.367 0 0 1-.24-.816c0-.288.072-.547.216-.776.144-.235.358-.419.64-.552.288-.139.635-.208 1.04-.208.406 0 .75.07 1.032.208a1.446 1.446 0 0 1 .872 1.328c0 .31-.082.581-.248.816-.165.23-.392.4-.68.512.331.101.592.28.784.536.198.25.296.555.296.912 0 .347-.085.65-.256.912-.17.256-.413.456-.728.6-.309.139-.666.208-1.072.208-.405 0-.762-.07-1.072-.208a1.716 1.716 0 0 1-.712-.6 1.63 1.63 0 0 1-.256-.912c0-.357.096-.664.288-.92.192-.256.454-.432.784-.528Zm2.168-1.24c0-.325-.106-.576-.32-.752-.213-.176-.506-.264-.88-.264-.368 0-.658.088-.872.264-.213.176-.32.43-.32.76 0 .299.11.539.328.72.224.181.512.272.864.272.358 0 .646-.09.864-.272a.903.903 0 0 0 .336-.728Zm-1.2 1.56c-.394 0-.717.093-.968.28-.25.181-.376.456-.376.824 0 .341.12.616.36.824.246.208.574.312.984.312.411 0 .736-.104.976-.312.24-.208.36-.483.36-.824 0-.357-.122-.63-.368-.816-.245-.192-.568-.288-.968-.288Zm2.871.48c0-.448.091-.84.272-1.176.182-.341.43-.605.744-.792.32-.187.675-.28 1.064-.28.384 0 .718.083 1 .248.283.165.494.373.632.624v-.8h.736V29h-.736v-.816c-.144.256-.36.47-.648.64a1.93 1.93 0 0 1-.992.248c-.389 0-.741-.096-1.056-.288a2.02 2.02 0 0 1-.744-.808 2.517 2.517 0 0 1-.272-1.184Zm3.712.008c0-.33-.066-.619-.2-.864a1.377 1.377 0 0 0-.544-.56 1.428 1.428 0 0 0-.744-.2c-.272 0-.52.064-.744.192a1.393 1.393 0 0 0-.536.56c-.133.245-.2.533-.2.864 0 .336.067.63.2.88.134.245.312.435.536.568.224.128.472.192.744.192s.52-.064.744-.192c.23-.133.411-.323.544-.568.134-.25.2-.541.2-.872Zm7.239-2.264c.34 0 .645.072.912.216.266.139.477.35.632.632.154.283.232.627.232 1.032V29h-.72v-2.48c0-.437-.11-.77-.328-1-.214-.235-.504-.352-.872-.352-.38 0-.68.123-.904.368-.224.24-.336.59-.336 1.048V29h-.72v-2.48c0-.437-.11-.77-.328-1-.214-.235-.504-.352-.872-.352-.38 0-.68.123-.904.368-.224.24-.336.59-.336 1.048V29h-.728v-4.384h.728v.632c.144-.23.336-.405.576-.528a1.78 1.78 0 0 1 .808-.184c.368 0 .693.083.976.248.282.165.493.408.632.728.122-.31.325-.55.608-.72a1.79 1.79 0 0 1 .944-.256Z"
    />
    <Path
      fill="url(#a)"
      d="M26.616 39.52c-.059-.245-.165-.43-.32-.552-.155-.123-.37-.184-.648-.184-.421 0-.736.163-.944.488-.208.32-.317.853-.328 1.6.139-.235.341-.416.608-.544a1.97 1.97 0 0 1 .864-.192c.352 0 .661.077.928.232.272.15.483.368.632.656.155.288.232.632.232 1.032 0 .373-.075.707-.224 1a1.63 1.63 0 0 1-.648.696c-.288.165-.635.248-1.04.248-.55 0-.981-.12-1.296-.36-.31-.245-.528-.59-.656-1.032-.123-.443-.184-.995-.184-1.656 0-1.952.688-2.928 2.064-2.928.533 0 .952.144 1.256.432.31.288.49.643.544 1.064h-.84Zm-.968 1.384c-.325 0-.603.099-.832.296-.224.192-.336.472-.336.84s.104.661.312.88c.213.213.51.32.888.32.336 0 .6-.104.792-.312.197-.208.296-.485.296-.832 0-.363-.096-.65-.288-.864-.187-.219-.464-.328-.832-.328Zm2.965.104c0-.923.154-1.643.464-2.16.314-.523.853-.784 1.616-.784.762 0 1.298.261 1.608.784.314.517.472 1.237.472 2.16 0 .933-.158 1.664-.472 2.192-.31.523-.846.784-1.608.784-.763 0-1.302-.261-1.616-.784-.31-.528-.464-1.259-.464-2.192Zm3.264 0c0-.432-.03-.797-.088-1.096a1.421 1.421 0 0 0-.336-.728c-.17-.192-.424-.288-.76-.288s-.59.096-.76.288c-.17.187-.285.43-.344.728-.053.299-.08.664-.08 1.096 0 .448.026.824.08 1.128.053.304.165.55.336.736.176.187.432.28.768.28s.59-.093.76-.28c.176-.187.29-.432.344-.736.053-.304.08-.68.08-1.128Zm1.86 0c0-.923.155-1.643.465-2.16.315-.523.853-.784 1.616-.784.763 0 1.299.261 1.608.784.314.517.472 1.237.472 2.16 0 .933-.158 1.664-.472 2.192-.31.523-.846.784-1.608.784-.763 0-1.301-.261-1.616-.784-.31-.528-.464-1.259-.464-2.192Zm3.265 0c0-.432-.03-.797-.088-1.096a1.421 1.421 0 0 0-.336-.728c-.17-.192-.424-.288-.76-.288s-.59.096-.76.288c-.17.187-.285.43-.344.728-.053.299-.08.664-.08 1.096 0 .448.026.824.08 1.128.053.304.165.55.336.736.176.187.432.28.768.28s.59-.093.76-.28c.176-.187.29-.432.344-.736.053-.304.08-.68.08-1.128Zm7.317-1.488c.346 0 .656.072.928.216.277.144.493.357.648.64.16.283.24.624.24 1.024V44h-.904v-2.464c0-.395-.099-.696-.296-.904-.198-.213-.467-.32-.808-.32-.342 0-.614.107-.816.32-.197.208-.296.51-.296.904V44h-.904v-2.464c0-.395-.099-.696-.296-.904-.197-.213-.467-.32-.808-.32s-.613.107-.816.32c-.198.208-.296.51-.296.904V44h-.912v-4.408h.912v.504c.15-.181.338-.323.568-.424.23-.101.474-.152.736-.152.352 0 .666.075.944.224.277.15.49.365.64.648.133-.267.341-.477.624-.632.283-.16.587-.24.912-.24Zm3.888-1.44V44h-.912v-5.92h.912Z"
    />
    <Path
      fill="#ADA4A5"
      d="M24.432 65.448c.053.304.176.539.368.704.197.165.461.248.792.248.443 0 .768-.173.976-.52.213-.347.315-.93.304-1.752-.112.24-.299.43-.56.568a1.89 1.89 0 0 1-.872.2c-.357 0-.677-.072-.96-.216a1.631 1.631 0 0 1-.656-.648c-.16-.283-.24-.624-.24-1.024 0-.57.165-1.03.496-1.376.33-.352.8-.528 1.408-.528.747 0 1.27.243 1.568.728.304.485.456 1.208.456 2.168 0 .672-.061 1.227-.184 1.664-.117.437-.32.77-.608 1-.283.23-.672.344-1.168.344-.544 0-.968-.147-1.272-.44a1.726 1.726 0 0 1-.52-1.12h.672Zm1.128-1.168c.357 0 .65-.11.88-.328.23-.224.344-.525.344-.904 0-.4-.112-.723-.336-.968-.224-.245-.539-.368-.944-.368-.373 0-.672.117-.896.352-.219.235-.328.544-.328.928 0 .39.11.701.328.936.219.235.536.352.952.352Zm2.823.512c0-.448.09-.84.272-1.176.181-.341.43-.605.744-.792.32-.187.675-.28 1.064-.28.384 0 .717.083 1 .248.283.165.493.373.632.624v-.8h.736V67h-.736v-.816c-.144.256-.36.47-.648.64a1.93 1.93 0 0 1-.992.248c-.39 0-.741-.096-1.056-.288a2.02 2.02 0 0 1-.744-.808 2.516 2.516 0 0 1-.272-1.184Zm3.712.008c0-.33-.067-.619-.2-.864a1.378 1.378 0 0 0-.544-.56 1.428 1.428 0 0 0-.744-.2c-.272 0-.52.064-.744.192a1.393 1.393 0 0 0-.536.56c-.133.245-.2.533-.2.864 0 .336.067.63.2.88.133.245.312.435.536.568.224.128.472.192.744.192s.52-.064.744-.192c.23-.133.41-.323.544-.568.133-.25.2-.541.2-.872Zm7.238-2.264c.342 0 .646.072.912.216.267.139.478.35.632.632.155.283.232.627.232 1.032V67h-.72v-2.48c0-.437-.109-.77-.328-1-.213-.235-.504-.352-.872-.352-.378 0-.68.123-.904.368-.224.24-.336.59-.336 1.048V67h-.72v-2.48c0-.437-.109-.77-.328-1-.213-.235-.504-.352-.872-.352-.378 0-.68.123-.904.368-.224.24-.336.59-.336 1.048V67h-.728v-4.384h.728v.632c.144-.23.336-.405.576-.528a1.78 1.78 0 0 1 .808-.184c.368 0 .694.083.976.248.283.165.494.408.632.728.123-.31.326-.55.608-.72a1.79 1.79 0 0 1 .944-.256Zm8.143 1.224v.616h-3.192v-.616h3.192Zm3.187-1.88v-.664h1.504V67h-.736v-5.12h-.768Zm2.563 0v-.664h1.504V67h-.736v-5.12h-.768Zm2.602 2.912c0-.448.091-.84.272-1.176.182-.341.43-.605.744-.792.32-.187.675-.28 1.064-.28.384 0 .718.083 1 .248.283.165.494.373.632.624v-.8h.736V67h-.736v-.816c-.144.256-.36.47-.648.64a1.93 1.93 0 0 1-.992.248c-.389 0-.741-.096-1.056-.288a2.02 2.02 0 0 1-.744-.808 2.516 2.516 0 0 1-.272-1.184Zm3.712.008c0-.33-.066-.619-.2-.864a1.378 1.378 0 0 0-.544-.56 1.428 1.428 0 0 0-.744-.2c-.272 0-.52.064-.744.192a1.393 1.393 0 0 0-.536.56c-.133.245-.2.533-.2.864 0 .336.067.63.2.88.134.245.312.435.536.568.224.128.472.192.744.192s.52-.064.744-.192c.23-.133.411-.323.544-.568.134-.25.2-.541.2-.872Zm7.239-2.264c.341 0 .645.072.912.216.266.139.477.35.632.632.154.283.232.627.232 1.032V67h-.72v-2.48c0-.437-.11-.77-.328-1-.214-.235-.504-.352-.872-.352-.379 0-.68.123-.904.368-.224.24-.336.59-.336 1.048V67h-.72v-2.48c0-.437-.11-.77-.328-1-.214-.235-.504-.352-.872-.352-.379 0-.68.123-.904.368-.224.24-.336.59-.336 1.048V67h-.728v-4.384h.728v.632c.144-.23.336-.405.576-.528.245-.123.514-.184.808-.184.368 0 .693.083.976.248.282.165.493.408.632.728.122-.31.325-.55.608-.72.282-.17.597-.256.944-.256Z"
    />
    <Path
      fill="url(#b)"
      d="M27.24 76.952h-2.68v1.592a1.27 1.27 0 0 1 .496-.376c.224-.101.461-.152.712-.152.448 0 .81.096 1.088.288.283.192.483.435.6.728.123.293.184.603.184.928 0 .395-.077.747-.232 1.056a1.67 1.67 0 0 1-.68.72c-.299.176-.667.264-1.104.264-.581 0-1.048-.144-1.4-.432a1.749 1.749 0 0 1-.632-1.144h.888c.059.25.19.45.392.6.203.144.456.216.76.216.379 0 .661-.115.848-.344.192-.23.288-.533.288-.912 0-.384-.096-.677-.288-.88-.192-.208-.475-.312-.848-.312a1.09 1.09 0 0 0-.664.2 1.084 1.084 0 0 0-.384.528h-.864v-3.368h3.52v.8Zm1.35 2.056c0-.923.154-1.643.463-2.16.315-.523.854-.784 1.616-.784.763 0 1.299.261 1.608.784.315.517.472 1.237.472 2.16 0 .933-.157 1.664-.472 2.192-.309.523-.845.784-1.608.784-.762 0-1.301-.261-1.616-.784-.309-.528-.464-1.259-.464-2.192Zm3.263 0c0-.432-.029-.797-.088-1.096a1.423 1.423 0 0 0-.336-.728c-.17-.192-.424-.288-.76-.288s-.589.096-.76.288c-.17.187-.285.43-.344.728-.053.299-.08.664-.08 1.096 0 .448.027.824.08 1.128.054.304.166.55.336.736.176.187.432.28.768.28s.59-.093.76-.28c.176-.187.291-.432.344-.736.054-.304.08-.68.08-1.128Zm1.861 0c0-.923.155-1.643.464-2.16.315-.523.854-.784 1.616-.784.763 0 1.299.261 1.608.784.315.517.472 1.237.472 2.16 0 .933-.157 1.664-.472 2.192-.309.523-.845.784-1.608.784-.762 0-1.301-.261-1.616-.784-.309-.528-.464-1.259-.464-2.192Zm3.264 0c0-.432-.029-.797-.088-1.096a1.423 1.423 0 0 0-.336-.728c-.17-.192-.424-.288-.76-.288s-.589.096-.76.288c-.17.187-.285.43-.344.728-.053.299-.08.664-.08 1.096 0 .448.027.824.08 1.128.054.304.166.55.336.736.176.187.432.28.768.28s.59-.093.76-.28c.176-.187.291-.432.344-.736.054-.304.08-.68.08-1.128Zm7.317-1.488c.347 0 .656.072.928.216.278.144.494.357.648.64.16.283.24.624.24 1.024V82h-.904v-2.464c0-.395-.098-.696-.296-.904-.197-.213-.466-.32-.808-.32-.341 0-.613.107-.816.32-.197.208-.296.51-.296.904V82h-.904v-2.464c0-.395-.098-.696-.296-.904-.197-.213-.466-.32-.808-.32-.341 0-.613.107-.816.32-.197.208-.296.51-.296.904V82h-.912v-4.408h.912v.504c.15-.181.339-.323.568-.424a1.8 1.8 0 0 1 .736-.152c.352 0 .667.075.944.224.278.15.491.365.64.648.134-.267.342-.477.624-.632.283-.16.587-.24.912-.24Zm3.889-1.44V82h-.912v-5.92h.912Z"
    />
    <Path
      fill="#7B6F72"
      d="M9.44 11 7.78 8.15h-1.1V11h-.91V4.03h2.25c.527 0 .97.09 1.33.27.367.18.64.423.82.73.18.307.27.657.27 1.05 0 .48-.14.903-.42 1.27-.273.367-.687.61-1.24.73L10.53 11H9.44ZM6.68 7.42h1.34c.493 0 .863-.12 1.11-.36.247-.247.37-.573.37-.98 0-.413-.123-.733-.37-.96-.24-.227-.61-.34-1.11-.34H6.68v2.64Zm10.174.63c0 .173-.01.357-.03.55h-4.38c.033.54.217.963.55 1.27.34.3.75.45 1.23.45.393 0 .72-.09.98-.27.267-.187.453-.433.56-.74h.98a2.38 2.38 0 0 1-.88 1.29c-.44.327-.987.49-1.64.49-.52 0-.987-.117-1.4-.35a2.495 2.495 0 0 1-.96-.99c-.233-.433-.35-.933-.35-1.5s.113-1.063.34-1.49c.227-.427.543-.753.95-.98.413-.233.887-.35 1.42-.35.52 0 .98.113 1.38.34.4.227.707.54.92.94.22.393.33.84.33 1.34Zm-.94-.19c0-.347-.077-.643-.23-.89a1.447 1.447 0 0 0-.63-.57c-.26-.133-.55-.2-.87-.2-.46 0-.853.147-1.18.44-.32.293-.503.7-.55 1.22h3.46Zm1.801.38c0-.56.113-1.05.34-1.47.227-.427.537-.757.93-.99.4-.233.843-.35 1.33-.35.48 0 .897.103 1.25.31.354.207.617.467.79.78v-1h.92V11h-.92V9.98c-.18.32-.45.587-.81.8-.353.207-.767.31-1.24.31-.486 0-.927-.12-1.32-.36a2.524 2.524 0 0 1-.93-1.01c-.227-.433-.34-.927-.34-1.48Zm4.64.01c0-.413-.083-.773-.25-1.08a1.722 1.722 0 0 0-.68-.7c-.28-.167-.59-.25-.93-.25-.34 0-.65.08-.93.24a1.74 1.74 0 0 0-.67.7c-.166.307-.25.667-.25 1.08 0 .42.084.787.25 1.1.167.307.39.543.67.71.28.16.59.24.93.24.34 0 .65-.08.93-.24a1.79 1.79 0 0 0 .68-.71c.167-.313.25-.677.25-1.09Zm3.368-4.65V11h-.91V3.6h.91Zm5.327 2.67V9.5c0 .267.057.457.17.57.113.107.31.16.59.16h.67V11h-.82c-.507 0-.887-.117-1.14-.35-.253-.233-.38-.617-.38-1.15V6.27h-.71v-.75h.71V4.14h.91v1.38h1.43v.75h-1.43Zm3.003-1.64a.599.599 0 0 1-.44-.18.599.599 0 0 1-.18-.44c0-.173.06-.32.18-.44s.266-.18.44-.18c.166 0 .306.06.42.18.12.12.18.267.18.44s-.06.32-.18.44a.555.555 0 0 1-.42.18Zm.44.89V11h-.91V5.52h.91Zm8.14-.1c.427 0 .807.09 1.14.27.334.173.597.437.79.79.194.353.29.783.29 1.29V11h-.9V7.9c0-.547-.136-.963-.41-1.25-.266-.293-.63-.44-1.09-.44-.473 0-.85.153-1.13.46-.28.3-.42.737-.42 1.31V11h-.9V7.9c0-.547-.136-.963-.41-1.25-.266-.293-.63-.44-1.09-.44-.473 0-.85.153-1.13.46-.28.3-.42.737-.42 1.31V11h-.91V5.52h.91v.79c.18-.287.42-.507.72-.66.307-.153.644-.23 1.01-.23.46 0 .867.103 1.22.31.354.207.617.51.79.91.154-.387.407-.687.76-.9a2.24 2.24 0 0 1 1.18-.32Zm8.713 2.63c0 .173-.01.357-.03.55h-4.38c.033.54.217.963.55 1.27.34.3.75.45 1.23.45.393 0 .72-.09.98-.27.267-.187.454-.433.56-.74h.98a2.38 2.38 0 0 1-.88 1.29c-.44.327-.986.49-1.64.49-.52 0-.986-.117-1.4-.35a2.495 2.495 0 0 1-.96-.99c-.233-.433-.35-.933-.35-1.5s.114-1.063.34-1.49c.227-.427.544-.753.95-.98.413-.233.887-.35 1.42-.35.52 0 .98.113 1.38.34.4.227.707.54.92.94.22.393.33.84.33 1.34Zm-.94-.19c0-.347-.076-.643-.23-.89a1.448 1.448 0 0 0-.63-.57c-.26-.133-.55-.2-.87-.2-.46 0-.853.147-1.18.44-.32.293-.503.7-.55 1.22h3.46Zm9.667-2.34V11h-.91v-.81a1.8 1.8 0 0 1-.73.66 2.25 2.25 0 0 1-1.02.23c-.426 0-.81-.087-1.15-.26a1.99 1.99 0 0 1-.81-.8c-.193-.353-.29-.783-.29-1.29V5.52h.9v3.09c0 .54.137.957.41 1.25.274.287.647.43 1.12.43.487 0 .87-.15 1.15-.45.28-.3.42-.737.42-1.31V5.52h.91Zm2.447 1.01c.18-.313.447-.573.8-.78.36-.213.777-.32 1.25-.32.487 0 .927.117 1.32.35.4.233.713.563.94.99.227.42.34.91.34 1.47 0 .553-.114 1.047-.34 1.48a2.502 2.502 0 0 1-2.26 1.37c-.467 0-.88-.103-1.24-.31a2.304 2.304 0 0 1-.81-.79v3.61h-.91V5.52h.91v1.01Zm3.72 1.71c0-.413-.084-.773-.25-1.08a1.72 1.72 0 0 0-.68-.7c-.28-.16-.59-.24-.93-.24-.334 0-.643.083-.93.25-.28.16-.507.397-.68.71-.167.307-.25.663-.25 1.07 0 .413.083.777.25 1.09.173.307.4.543.68.71.286.16.596.24.93.24.34 0 .65-.08.93-.24a1.79 1.79 0 0 0 .68-.71c.166-.313.25-.68.25-1.1Zm1.788 0c0-.56.113-1.05.34-1.47.226-.427.536-.757.93-.99.4-.233.846-.35 1.34-.35.426 0 .823.1 1.19.3.366.193.646.45.84.77V3.6h.92V11h-.92V9.97c-.18.327-.447.597-.8.81-.354.207-.767.31-1.24.31-.487 0-.93-.12-1.33-.36a2.524 2.524 0 0 1-.93-1.01c-.227-.433-.34-.927-.34-1.48Zm4.64.01c0-.413-.084-.773-.25-1.08a1.722 1.722 0 0 0-.68-.7c-.28-.167-.59-.25-.93-.25-.34 0-.65.08-.93.24a1.74 1.74 0 0 0-.67.7c-.167.307-.25.667-.25 1.08 0 .42.083.787.25 1.1.166.307.39.543.67.71.28.16.59.24.93.24.34 0 .65-.08.93-.24a1.79 1.79 0 0 0 .68-.71c.166-.313.25-.677.25-1.09Zm2.117-.01c0-.56.114-1.05.34-1.47.227-.427.537-.757.93-.99.4-.233.844-.35 1.33-.35.48 0 .897.103 1.25.31.354.207.617.467.79.78v-1h.92V11h-.92V9.98c-.18.32-.45.587-.81.8-.353.207-.766.31-1.24.31-.486 0-.926-.12-1.32-.36a2.524 2.524 0 0 1-.93-1.01c-.226-.433-.34-.927-.34-1.48Zm4.64.01c0-.413-.083-.773-.25-1.08a1.722 1.722 0 0 0-.68-.7c-.28-.167-.59-.25-.93-.25-.34 0-.65.08-.93.24a1.74 1.74 0 0 0-.67.7c-.166.307-.25.667-.25 1.08 0 .42.084.787.25 1.1.167.307.39.543.67.71.28.16.59.24.93.24.34 0 .65-.08.93-.24a1.79 1.79 0 0 0 .68-.71c.167-.313.25-.677.25-1.09Zm3.568-1.98V9.5c0 .267.057.457.17.57.114.107.31.16.59.16h.67V11h-.82c-.506 0-.886-.117-1.14-.35-.253-.233-.38-.617-.38-1.15V6.27h-.71v-.75h.71V4.14h.91v1.38h1.43v.75h-1.43Zm7.533 1.78c0 .173-.01.357-.03.55h-4.38c.033.54.216.963.55 1.27.34.3.75.45 1.23.45.393 0 .72-.09.98-.27.266-.187.453-.433.56-.74h.98a2.38 2.38 0 0 1-.88 1.29c-.44.327-.987.49-1.64.49-.52 0-.987-.117-1.4-.35a2.495 2.495 0 0 1-.96-.99c-.234-.433-.35-.933-.35-1.5s.113-1.063.34-1.49c.227-.427.543-.753.95-.98.413-.233.886-.35 1.42-.35.52 0 .98.113 1.38.34.4.227.707.54.92.94.22.393.33.84.33 1.34Zm-.94-.19c0-.347-.077-.643-.23-.89a1.448 1.448 0 0 0-.63-.57c-.26-.133-.55-.2-.87-.2-.46 0-.853.147-1.18.44-.32.293-.504.7-.55 1.22h3.46Zm4.081 3.23c-.42 0-.797-.07-1.13-.21a1.965 1.965 0 0 1-.79-.6c-.193-.26-.3-.557-.32-.89h.94a.928.928 0 0 0 .38.67c.233.173.537.26.91.26.347 0 .62-.077.82-.23.2-.153.3-.347.3-.58a.561.561 0 0 0-.32-.53c-.213-.12-.543-.237-.99-.35a8.151 8.151 0 0 1-1-.32 1.9 1.9 0 0 1-.66-.49c-.18-.22-.27-.507-.27-.86 0-.28.083-.537.25-.77a1.66 1.66 0 0 1 .71-.55c.307-.14.657-.21 1.05-.21.607 0 1.097.153 1.47.46.373.307.573.727.6 1.26h-.91a.934.934 0 0 0-.35-.69c-.207-.173-.487-.26-.84-.26-.327 0-.587.07-.78.21a.65.65 0 0 0-.29.55c0 .18.057.33.17.45.12.113.267.207.44.28.18.067.427.143.74.23.393.107.713.213.96.32.247.1.457.253.63.46.18.207.273.477.28.81 0 .3-.083.57-.25.81-.167.24-.403.43-.71.57-.3.133-.647.2-1.04.2Z"
    />
    <Path
      fill="#ADA4A5"
      d="M23.304 99.88v-.664h1.504V105h-.736v-5.12h-.768Zm2.563 0v-.664h1.503V105h-.736v-5.12h-.768Zm2.602 2.912c0-.448.09-.84.272-1.176a1.98 1.98 0 0 1 .744-.792 2.07 2.07 0 0 1 1.064-.28c.384 0 .717.083 1 .248.283.165.493.373.632.624v-.8h.736V105h-.736v-.816c-.144.256-.36.469-.648.64a1.932 1.932 0 0 1-.992.248c-.39 0-.741-.096-1.056-.288a2.017 2.017 0 0 1-.744-.808 2.517 2.517 0 0 1-.272-1.184Zm3.712.008a1.78 1.78 0 0 0-.2-.864 1.379 1.379 0 0 0-.544-.56 1.43 1.43 0 0 0-.744-.2c-.272 0-.52.064-.744.192a1.395 1.395 0 0 0-.536.56 1.78 1.78 0 0 0-.2.864c0 .336.067.629.2.88.133.245.312.435.536.568.224.128.472.192.744.192s.52-.064.744-.192c.23-.133.41-.323.544-.568.133-.251.2-.541.2-.872Zm7.238-2.264c.342 0 .646.072.912.216.267.139.478.349.632.632.155.283.232.627.232 1.032V105h-.72v-2.48c0-.437-.11-.771-.328-1-.213-.235-.504-.352-.872-.352-.378 0-.68.123-.904.368-.224.24-.336.589-.336 1.048V105h-.72v-2.48c0-.437-.11-.771-.328-1-.213-.235-.504-.352-.872-.352-.378 0-.68.123-.904.368-.224.24-.336.589-.336 1.048V105h-.728v-4.384h.728v.632a1.45 1.45 0 0 1 .576-.528c.246-.123.515-.184.808-.184a1.9 1.9 0 0 1 .976.248c.283.165.494.408.632.728a1.44 1.44 0 0 1 .608-.72c.283-.171.598-.256.944-.256Zm8.143 1.224v.616H44.37v-.616h3.192Zm3.291 2.656a37.645 37.645 0 0 0 1.592-1.336c.384-.352.707-.717.968-1.096.267-.384.4-.76.4-1.128 0-.347-.085-.619-.256-.816-.165-.203-.434-.304-.808-.304-.362 0-.645.115-.848.344-.197.224-.304.525-.32.904h-.704c.022-.597.203-1.059.544-1.384.342-.325.782-.488 1.32-.488.55 0 .984.152 1.304.456.326.304.488.723.488 1.256 0 .443-.133.875-.4 1.296-.261.416-.56.784-.896 1.104-.336.315-.765.683-1.288 1.104h2.752v.608h-3.848v-.52Zm5.538-2.992a1.71 1.71 0 0 1 .64-.624 1.921 1.921 0 0 1 1-.256c.39 0 .741.093 1.056.28.32.187.57.451.752.792.181.336.272.728.272 1.176 0 .443-.09.837-.272 1.184a2 2 0 0 1-1.808 1.096 1.96 1.96 0 0 1-.992-.248 1.842 1.842 0 0 1-.648-.632v2.888h-.728v-6.464h.728v.808Zm2.976 1.368a1.78 1.78 0 0 0-.2-.864 1.38 1.38 0 0 0-.544-.56 1.473 1.473 0 0 0-.744-.192c-.267 0-.515.067-.744.2a1.431 1.431 0 0 0-.544.568c-.133.245-.2.531-.2.856 0 .331.067.621.2.872.139.245.32.435.544.568.23.128.477.192.744.192.272 0 .52-.064.744-.192.23-.133.41-.323.544-.568.133-.251.2-.544.2-.88Zm6.974-2.256c.342 0 .646.072.912.216.267.139.478.349.632.632.155.283.232.627.232 1.032V105h-.72v-2.48c0-.437-.11-.771-.328-1-.213-.235-.504-.352-.872-.352-.379 0-.68.123-.904.368-.224.24-.336.589-.336 1.048V105h-.72v-2.48c0-.437-.11-.771-.328-1-.213-.235-.504-.352-.872-.352-.379 0-.68.123-.904.368-.224.24-.336.589-.336 1.048V105h-.728v-4.384h.728v.632a1.45 1.45 0 0 1 .576-.528c.245-.123.515-.184.808-.184a1.9 1.9 0 0 1 .976.248c.283.165.493.408.632.728.123-.309.326-.549.608-.72.283-.171.597-.256.944-.256Z"
    />
    <Path
      fill="url(#c)"
      d="M23.36 115v-.832h1.664V120h-.92v-5h-.744Zm2.917 2.008c0-.923.154-1.643.464-2.16.314-.523.853-.784 1.616-.784.762 0 1.299.261 1.608.784.314.517.472 1.237.472 2.16 0 .933-.158 1.664-.472 2.192-.31.523-.846.784-1.608.784-.763 0-1.302-.261-1.616-.784-.31-.528-.464-1.259-.464-2.192Zm3.264 0c0-.432-.03-.797-.088-1.096a1.423 1.423 0 0 0-.336-.728c-.17-.192-.424-.288-.76-.288s-.59.096-.76.288c-.17.187-.286.429-.344.728-.053.299-.08.664-.08 1.096 0 .448.027.824.08 1.128.053.304.165.549.336.736.176.187.432.28.768.28s.59-.093.76-.28c.176-.187.29-.432.344-.736.053-.304.08-.68.08-1.128Zm1.86 0c0-.923.155-1.643.465-2.16.315-.523.853-.784 1.616-.784.763 0 1.299.261 1.608.784.314.517.472 1.237.472 2.16 0 .933-.157 1.664-.472 2.192-.31.523-.846.784-1.608.784-.763 0-1.301-.261-1.616-.784-.31-.528-.464-1.259-.464-2.192Zm3.265 0c0-.432-.03-.797-.088-1.096a1.423 1.423 0 0 0-.336-.728c-.17-.192-.424-.288-.76-.288s-.59.096-.76.288c-.17.187-.285.429-.344.728-.053.299-.08.664-.08 1.096 0 .448.026.824.08 1.128.053.304.165.549.336.736.176.187.432.28.768.28s.59-.093.76-.28c.176-.187.29-.432.344-.736.053-.304.08-.68.08-1.128Zm1.86 0c0-.923.155-1.643.465-2.16.315-.523.853-.784 1.616-.784.763 0 1.299.261 1.608.784.314.517.472 1.237.472 2.16 0 .933-.157 1.664-.472 2.192-.31.523-.846.784-1.608.784-.763 0-1.301-.261-1.616-.784-.31-.528-.464-1.259-.464-2.192Zm3.265 0c0-.432-.03-.797-.088-1.096a1.423 1.423 0 0 0-.336-.728c-.17-.192-.424-.288-.76-.288s-.59.096-.76.288c-.17.187-.285.429-.344.728-.053.299-.08.664-.08 1.096 0 .448.026.824.08 1.128.053.304.165.549.336.736.176.187.432.28.768.28s.59-.093.76-.28c.176-.187.29-.432.344-.736.053-.304.08-.68.08-1.128Zm7.317-1.488c.347 0 .656.072.928.216.277.144.493.357.648.64.16.283.24.624.24 1.024v2.6h-.904v-2.464c0-.395-.099-.696-.296-.904-.197-.213-.467-.32-.808-.32s-.613.107-.816.32c-.197.208-.296.509-.296.904V120H44.9v-2.464c0-.395-.099-.696-.296-.904-.197-.213-.467-.32-.808-.32s-.614.107-.816.32c-.197.208-.296.509-.296.904V120h-.912v-4.408h.912v.504c.15-.181.339-.323.568-.424.23-.101.474-.152.736-.152.352 0 .666.075.944.224.277.149.49.365.64.648.133-.267.341-.477.624-.632.282-.16.587-.24.912-.24Zm3.888-1.44V120h-.912v-5.92h.912Z"
    />
    <Path
      fill="#ADA4A5"
      d="M23.408 142.416A37.645 37.645 0 0 0 25 141.08c.384-.352.707-.717.968-1.096.267-.384.4-.76.4-1.128 0-.347-.085-.619-.256-.816-.165-.203-.435-.304-.808-.304-.363 0-.645.115-.848.344-.197.224-.304.525-.32.904h-.704c.021-.597.203-1.059.544-1.384.341-.325.781-.488 1.32-.488.55 0 .984.152 1.304.456.325.304.488.723.488 1.256 0 .443-.133.875-.4 1.296-.261.416-.56.784-.896 1.104-.336.315-.765.683-1.288 1.104h2.752v.608h-3.848v-.52Zm5.538-2.992a1.71 1.71 0 0 1 .64-.624 1.921 1.921 0 0 1 1-.256c.389 0 .74.093 1.056.28.32.187.57.451.752.792.18.336.272.728.272 1.176 0 .443-.091.837-.272 1.184a2 2 0 0 1-1.808 1.096 1.96 1.96 0 0 1-.992-.248 1.842 1.842 0 0 1-.648-.632v2.888h-.728v-6.464h.728v.808Zm2.976 1.368a1.78 1.78 0 0 0-.2-.864 1.38 1.38 0 0 0-.544-.56 1.473 1.473 0 0 0-.744-.192c-.267 0-.515.067-.744.2a1.431 1.431 0 0 0-.544.568c-.134.245-.2.531-.2.856 0 .331.066.621.2.872.138.245.32.435.544.568.229.128.477.192.744.192.272 0 .52-.064.744-.192.229-.133.41-.323.544-.568.133-.251.2-.544.2-.88Zm6.974-2.256c.341 0 .645.072.912.216.267.139.477.349.632.632.154.283.232.627.232 1.032V143h-.72v-2.48c0-.437-.11-.771-.328-1-.214-.235-.504-.352-.872-.352-.379 0-.68.123-.904.368-.224.24-.336.589-.336 1.048V143h-.72v-2.48c0-.437-.11-.771-.328-1-.213-.235-.504-.352-.872-.352-.379 0-.68.123-.904.368-.224.24-.336.589-.336 1.048V143h-.728v-4.384h.728v.632a1.45 1.45 0 0 1 .576-.528c.245-.123.515-.184.808-.184a1.9 1.9 0 0 1 .976.248c.282.165.493.408.632.728a1.44 1.44 0 0 1 .608-.72c.282-.171.597-.256.944-.256Zm8.143 1.224v.616h-3.192v-.616h3.192Zm3.203 1.952v-.552l2.808-3.888h.872v3.808h.8v.632h-.8V143h-.72v-1.288h-2.96Zm2.992-3.68-2.152 3.048h2.152v-3.048Zm3.063 1.392a1.71 1.71 0 0 1 .64-.624 1.921 1.921 0 0 1 1-.256c.39 0 .742.093 1.056.28.32.187.57.451.752.792.181.336.272.728.272 1.176 0 .443-.09.837-.272 1.184a2 2 0 0 1-1.808 1.096 1.96 1.96 0 0 1-.992-.248 1.844 1.844 0 0 1-.648-.632v2.888h-.728v-6.464h.728v.808Zm2.976 1.368a1.78 1.78 0 0 0-.2-.864 1.378 1.378 0 0 0-.544-.56 1.473 1.473 0 0 0-.744-.192c-.266 0-.514.067-.744.2a1.432 1.432 0 0 0-.544.568c-.133.245-.2.531-.2.856 0 .331.067.621.2.872.139.245.32.435.544.568.23.128.478.192.744.192.272 0 .52-.064.744-.192.23-.133.41-.323.544-.568.133-.251.2-.544.2-.88Zm6.974-2.256c.342 0 .646.072.912.216.267.139.478.349.632.632.155.283.232.627.232 1.032V143h-.72v-2.48c0-.437-.109-.771-.328-1-.213-.235-.504-.352-.872-.352-.378 0-.68.123-.904.368-.224.24-.336.589-.336 1.048V143h-.72v-2.48c0-.437-.109-.771-.328-1-.213-.235-.504-.352-.872-.352-.378 0-.68.123-.904.368-.224.24-.336.589-.336 1.048V143h-.728v-4.384h.728v.632a1.45 1.45 0 0 1 .576-.528c.246-.123.515-.184.808-.184a1.9 1.9 0 0 1 .976.248c.283.165.494.408.632.728a1.44 1.44 0 0 1 .608-.72c.283-.171.598-.256.944-.256Z"
    />
    <Path
      fill="url(#d)"
      d="M27.176 152.872 24.952 158h-.92l2.248-5.032h-2.96v-.776h3.856v.68Zm.78 2.136c0-.923.155-1.643.465-2.16.314-.523.853-.784 1.616-.784.762 0 1.298.261 1.608.784.314.517.472 1.237.472 2.16 0 .933-.158 1.664-.472 2.192-.31.523-.846.784-1.608.784-.763 0-1.302-.261-1.616-.784-.31-.528-.464-1.259-.464-2.192Zm3.265 0c0-.432-.03-.797-.088-1.096a1.423 1.423 0 0 0-.336-.728c-.171-.192-.424-.288-.76-.288s-.59.096-.76.288c-.171.187-.286.429-.344.728-.054.299-.08.664-.08 1.096 0 .448.026.824.08 1.128.053.304.165.549.336.736.176.187.432.28.768.28s.589-.093.76-.28c.176-.187.29-.432.344-.736.053-.304.08-.68.08-1.128Zm1.86 0c0-.923.155-1.643.465-2.16.314-.523.853-.784 1.616-.784.762 0 1.298.261 1.608.784.314.517.472 1.237.472 2.16 0 .933-.158 1.664-.472 2.192-.31.523-.846.784-1.608.784-.763 0-1.302-.261-1.616-.784-.31-.528-.464-1.259-.464-2.192Zm3.265 0c0-.432-.03-.797-.088-1.096a1.423 1.423 0 0 0-.336-.728c-.171-.192-.424-.288-.76-.288s-.59.096-.76.288c-.171.187-.286.429-.344.728-.054.299-.08.664-.08 1.096 0 .448.026.824.08 1.128.053.304.165.549.336.736.176.187.432.28.768.28s.589-.093.76-.28c.176-.187.29-.432.344-.736.053-.304.08-.68.08-1.128Zm7.317-1.488c.346 0 .656.072.928.216.277.144.493.357.648.64.16.283.24.624.24 1.024v2.6h-.904v-2.464c0-.395-.1-.696-.296-.904-.198-.213-.467-.32-.808-.32-.342 0-.614.107-.816.32-.198.208-.296.509-.296.904V158h-.904v-2.464c0-.395-.1-.696-.296-.904-.198-.213-.467-.32-.808-.32-.342 0-.614.107-.816.32-.198.208-.296.509-.296.904V158h-.912v-4.408h.912v.504c.149-.181.338-.323.568-.424.229-.101.474-.152.736-.152.352 0 .666.075.944.224.277.149.49.365.64.648.133-.267.34-.477.624-.632.282-.16.586-.24.912-.24Zm3.888-1.44V158h-.912v-5.92h.912Z"
    />
    <Path
      fill="#ADA4A5"
      d="M23.32 179.712v-.552l2.808-3.888H27v3.808h.8v.632H27V181h-.72v-1.288h-2.96Zm2.992-3.68-2.152 3.048h2.152v-3.048Zm3.063 1.392a1.71 1.71 0 0 1 .64-.624 1.921 1.921 0 0 1 1-.256c.39 0 .742.093 1.056.28.32.187.57.451.752.792.182.336.272.728.272 1.176 0 .443-.09.837-.272 1.184a2 2 0 0 1-1.808 1.096 1.96 1.96 0 0 1-.992-.248 1.842 1.842 0 0 1-.648-.632v2.888h-.728v-6.464h.728v.808Zm2.976 1.368a1.78 1.78 0 0 0-.2-.864 1.38 1.38 0 0 0-.544-.56 1.473 1.473 0 0 0-.744-.192c-.266 0-.514.067-.744.2a1.431 1.431 0 0 0-.544.568c-.133.245-.2.531-.2.856 0 .331.067.621.2.872.139.245.32.435.544.568.23.128.478.192.744.192.272 0 .52-.064.744-.192.23-.133.41-.323.544-.568.134-.251.2-.544.2-.88Zm6.974-2.256c.342 0 .646.072.912.216.267.139.478.349.633.632.154.283.232.627.232 1.032V181h-.72v-2.48c0-.437-.11-.771-.328-1-.214-.235-.505-.352-.873-.352-.378 0-.68.123-.903.368-.224.24-.337.589-.337 1.048V181h-.72v-2.48c0-.437-.109-.771-.327-1-.214-.235-.505-.352-.872-.352-.38 0-.68.123-.904.368-.224.24-.337.589-.337 1.048V181h-.727v-4.384h.727v.632a1.45 1.45 0 0 1 .577-.528c.245-.123.514-.184.808-.184a1.9 1.9 0 0 1 .976.248c.282.165.493.408.631.728a1.44 1.44 0 0 1 .608-.72c.283-.171.598-.256.944-.256Zm8.143 1.224v.616h-3.192v-.616h3.192Zm5.636-1.224c.533 0 .965.163 1.296.488.33.32.496.784.496 1.392V181h-.72v-2.48c0-.437-.11-.771-.328-1-.22-.235-.518-.352-.896-.352-.384 0-.691.12-.92.36-.224.24-.336.589-.336 1.048V181h-.728v-4.384h.728v.624c.144-.224.338-.397.584-.52.25-.123.525-.184.824-.184Zm4.893 4.536c-.41 0-.784-.093-1.12-.28a2.04 2.04 0 0 1-.784-.792 2.493 2.493 0 0 1-.28-1.2c0-.448.096-.843.288-1.184a2 2 0 0 1 .8-.792 2.28 2.28 0 0 1 1.128-.28c.416 0 .792.093 1.128.28.336.181.6.443.792.784.197.341.296.739.296 1.192 0 .453-.102.853-.304 1.2a2.065 2.065 0 0 1-.808.792c-.342.187-.72.28-1.136.28Zm0-.64c.261 0 .506-.061.736-.184.23-.123.413-.307.552-.552.144-.245.216-.544.216-.896s-.07-.651-.208-.896a1.335 1.335 0 0 0-.544-.544 1.488 1.488 0 0 0-.728-.184c-.267 0-.512.061-.736.184a1.3 1.3 0 0 0-.528.544c-.134.245-.2.544-.2.896 0 .357.064.659.192.904.133.245.31.429.528.552.218.117.458.176.72.176Zm9.045-3.816L65.674 181h-.752l-1.056-3.48L62.81 181h-.752l-1.376-4.384h.744l1.008 3.68 1.088-3.68h.744l1.064 3.688.992-3.688h.72Z"
    />
    <Path
      fill="url(#e)"
      d="M24.616 194.416c.053.267.168.469.344.608.176.139.413.208.712.208.379 0 .656-.149.832-.448.176-.299.264-.808.264-1.528-.128.181-.31.323-.544.424-.23.096-.48.144-.752.144a2.11 2.11 0 0 1-.944-.208 1.633 1.633 0 0 1-.672-.632c-.16-.283-.24-.624-.24-1.024 0-.587.17-1.053.512-1.4.347-.352.821-.528 1.424-.528.725 0 1.24.243 1.544.728.31.48.464 1.219.464 2.216 0 .688-.059 1.251-.176 1.688-.112.437-.31.768-.592.992-.283.224-.675.336-1.176.336-.57 0-1.01-.149-1.32-.448a1.709 1.709 0 0 1-.52-1.128h.84Zm1.016-1.36c.32 0 .57-.099.752-.296.187-.203.28-.469.28-.8 0-.368-.099-.653-.296-.856-.192-.208-.456-.312-.792-.312s-.603.107-.8.32c-.192.208-.288.483-.288.824 0 .325.093.595.28.808.192.208.48.312.864.312Zm2.926-.048c0-.923.155-1.643.464-2.16.315-.523.854-.784 1.616-.784.763 0 1.299.261 1.608.784.315.517.472 1.237.472 2.16 0 .933-.157 1.664-.472 2.192-.31.523-.845.784-1.608.784-.763 0-1.301-.261-1.616-.784-.31-.528-.464-1.259-.464-2.192Zm3.264 0c0-.432-.03-.797-.088-1.096a1.421 1.421 0 0 0-.336-.728c-.17-.192-.424-.288-.76-.288s-.59.096-.76.288c-.17.187-.285.429-.344.728-.053.299-.08.664-.08 1.096 0 .448.027.824.08 1.128.053.304.166.549.336.736.176.187.432.28.768.28s.59-.093.76-.28c.176-.187.29-.432.344-.736.053-.304.08-.68.08-1.128Zm1.861 0c0-.923.155-1.643.464-2.16.315-.523.854-.784 1.616-.784.763 0 1.299.261 1.608.784.315.517.472 1.237.472 2.16 0 .933-.157 1.664-.472 2.192-.31.523-.845.784-1.608.784-.762 0-1.301-.261-1.616-.784-.31-.528-.464-1.259-.464-2.192Zm3.264 0c0-.432-.03-.797-.088-1.096a1.421 1.421 0 0 0-.336-.728c-.17-.192-.424-.288-.76-.288s-.59.096-.76.288c-.17.187-.285.429-.344.728-.053.299-.08.664-.08 1.096 0 .448.027.824.08 1.128.053.304.166.549.336.736.176.187.432.28.768.28s.59-.093.76-.28c.176-.187.29-.432.344-.736.053-.304.08-.68.08-1.128Zm7.317-1.488c.347 0 .656.072.928.216.277.144.493.357.648.64.16.283.24.624.24 1.024v2.6h-.904v-2.464c0-.395-.099-.696-.296-.904-.197-.213-.467-.32-.808-.32s-.613.107-.816.32c-.197.208-.296.509-.296.904V196h-.904v-2.464c0-.395-.098-.696-.296-.904-.197-.213-.466-.32-.808-.32-.341 0-.613.107-.816.32-.197.208-.296.509-.296.904V196h-.912v-4.408h.912v.504c.15-.181.339-.323.568-.424.23-.101.475-.152.736-.152.352 0 .667.075.944.224.277.149.49.365.64.648.133-.267.341-.477.624-.632.283-.16.587-.24.912-.24Zm3.889-1.44V196h-.912v-5.92h.912Z"
    />
    <Circle cx={10} cy={26} r={3} fill="url(#f)" opacity={0.5} />
    <Circle cx={10} cy={64} r={3} fill="url(#g)" opacity={0.5} />
    <Path
      stroke="url(#h)"
      strokeDasharray="3 3"
      strokeWidth={0.5}
      d="M10.25 34v22"
      opacity={0.5}
    />
    <Circle cx={10} cy={102} r={3} fill="url(#i)" opacity={0.5} />
    <Path
      stroke="url(#j)"
      strokeDasharray="3 3"
      strokeWidth={0.5}
      d="M10.25 72v22"
      opacity={0.5}
    />
    <Circle cx={10} cy={140} r={3} fill="url(#k)" opacity={0.5} />
    <Path
      stroke="url(#l)"
      strokeDasharray="3 3"
      strokeWidth={0.5}
      d="M10.25 110v22"
      opacity={0.5}
    />
    <Path
      stroke="url(#m)"
      strokeDasharray="3 3"
      strokeWidth={0.5}
      d="M10.25 148v22"
      opacity={0.5}
    />
    <G filter="url(#n)">
      <Circle cx={10} cy={178} r={5} fill="#fff" />
      <Circle cx={10} cy={178} r={4.6} stroke="url(#o)" strokeWidth={0.8} />
    </G>
    <Circle cx={10} cy={178} r={3} fill="url(#p)" />
    <Defs>
      <LinearGradient
        id="a"
        x1={49}
        x2={15.093}
        y1={47}
        y2={41.315}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#C58BF2" />
        <Stop offset={1} stopColor="#EEA4CE" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={49}
        x2={15.093}
        y1={85}
        y2={79.315}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#C58BF2" />
        <Stop offset={1} stopColor="#EEA4CE" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={52}
        x2={14.431}
        y1={123}
        y2={115.975}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#C58BF2" />
        <Stop offset={1} stopColor="#EEA4CE" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={49}
        x2={15.093}
        y1={161}
        y2={155.315}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#C58BF2" />
        <Stop offset={1} stopColor="#EEA4CE" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={49}
        x2={15.093}
        y1={199}
        y2={193.315}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#C58BF2" />
        <Stop offset={1} stopColor="#EEA4CE" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={13}
        x2={5.003}
        y1={29}
        y2={28.381}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#C58BF2" />
        <Stop offset={1} stopColor="#EEA4CE" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={13}
        x2={5.003}
        y1={67}
        y2={66.381}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#C58BF2" />
        <Stop offset={1} stopColor="#EEA4CE" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={9}
        x2={21.882}
        y1={56}
        y2={48.433}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#C58BF2" />
        <Stop offset={1} stopColor="#EEA4CE" />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={13}
        x2={5.003}
        y1={105}
        y2={104.381}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#C58BF2" />
        <Stop offset={1} stopColor="#EEA4CE" />
      </LinearGradient>
      <LinearGradient
        id="j"
        x1={9}
        x2={21.882}
        y1={94}
        y2={86.433}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#C58BF2" />
        <Stop offset={1} stopColor="#EEA4CE" />
      </LinearGradient>
      <LinearGradient
        id="k"
        x1={13}
        x2={5.003}
        y1={143}
        y2={142.381}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#C58BF2" />
        <Stop offset={1} stopColor="#EEA4CE" />
      </LinearGradient>
      <LinearGradient
        id="l"
        x1={9}
        x2={21.882}
        y1={132}
        y2={124.433}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#C58BF2" />
        <Stop offset={1} stopColor="#EEA4CE" />
      </LinearGradient>
      <LinearGradient
        id="m"
        x1={9}
        x2={21.882}
        y1={170}
        y2={162.433}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#C58BF2" />
        <Stop offset={1} stopColor="#EEA4CE" />
      </LinearGradient>
      <LinearGradient
        id="o"
        x1={15}
        x2={1.672}
        y1={183}
        y2={181.969}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#C58BF2" />
        <Stop offset={1} stopColor="#EEA4CE" />
      </LinearGradient>
      <LinearGradient
        id="p"
        x1={13}
        x2={5.003}
        y1={181}
        y2={180.381}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#C58BF2" />
        <Stop offset={1} stopColor="#EEA4CE" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default TimeStatus;
