import React from "react"
import Lottie from "react-lottie"

import animationData from "./spinner.json"

import * as Styled from "./__styles__/AnimatedLoader.styles"

const AnimatedLoader = props => (
  <Styled.Root>
    <Lottie {...props} />
  </Styled.Root>
)

AnimatedLoader.propTypes = {
  ...Lottie.propTypes,
}

AnimatedLoader.defaultProps = {
  ...Lottie.defaultProps,
  options: {
    ...Lottie.defaultProps.options,
    animationData,
  },
  isClickToPauseDisabled: true,
  width: 500,
  height: 500,
}

export default AnimatedLoader
