import * as React from "react";
import Svg, { Path } from "react-native-svg";

function HomeIconActive(props) {
  return (
    <Svg
      width={20}
      height={23}
      viewBox="0 0 20 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.043 5.747l.127 16.4 7.022-.054-.062-8 5.37-.042.061 8L19.17 22l-.127-16.4L9.5.074.043 5.747z"
        fill="#000"
      />
    </Svg>
  );
}

export default HomeIconActive;
