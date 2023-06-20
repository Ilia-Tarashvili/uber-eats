import * as React from "react";
import Svg, { Path } from "react-native-svg";

function FiltersImage(props) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.812 11.355a4.526 4.526 0 100-9.052 4.526 4.526 0 000 9.052zM11.338 6.83h13.578M18.881 14.372a4.526 4.526 0 100 9.052 4.526 4.526 0 000-9.052zM14.355 18.898H.778"
        stroke="#000"
        strokeWidth={3.10349}
      />
    </Svg>
  );
}

export default FiltersImage;
