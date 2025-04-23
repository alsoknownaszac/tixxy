import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

export const SvgRight = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={95}
    height={1}
    fill="none"
    {...props}
  >
    <Path stroke="url(#a)" strokeLinecap="round" d="M.5.5h94" />
    <Defs>
      <LinearGradient
        id="a"
        x1={0}
        x2={95}
        y1={1}
        y2={1}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#999" />
        <Stop offset={0.667} stopColor="#4D4D4D" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export const SvgLeft = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={95}
    height={1}
    fill="none"
    {...props}
  >
    <Path stroke="url(#a)" strokeLinecap="round" d="M94.5.5H.5" />
    <Defs>
      <LinearGradient
        id="a"
        x1={95}
        x2={0}
        y1={0}
        y2={0}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#999" />
        <Stop offset={0.667} stopColor="#4D4D4D" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
