import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 8.066L18.281 22H4.003L.42 8.18 0 8.247v-.18h22z"
        fill="#B5B5B5"
      />
      <Path
        d="M16.108 7.7c0 3.35-2.401 5.7-4.934 5.7-2.532 0-4.933-2.35-4.933-5.7S8.642 2 11.174 2c2.533 0 4.934 2.35 4.934 5.7z"
        stroke="#B5B5B5"
        strokeWidth={4}
      />
    </Svg>
  );
}

export default SvgComponent;
