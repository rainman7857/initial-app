import * as React from "react"
import Svg, { Path } from "react-native-svg"

function AvatarLine(props) {
  return (
    <Svg
      width={105}
      height={105}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M100.917 104.5c2.255 0 4.091-1.829 4.003-4.082a104.49 104.49 0 00-30.527-69.81A104.501 104.501 0 004.583.08C2.328-.008.5 1.828.5 4.083c0 2.256 1.83 4.075 4.082 4.17a96.333 96.333 0 0192.165 92.165c.095 2.253 1.914 4.082 4.17 4.082z"
        fill="#FFD379"
      />
    </Svg>
  )
}

export default AvatarLine
