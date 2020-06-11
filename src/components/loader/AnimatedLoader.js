import React from "react"
import Lottie from "react-lottie"

import animationData from "./spinner.json"

import { useStyles } from "./__styles__/AnimatedLoader.styles"

const AnimatedLoader = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Lottie {...props} />
    </div>
  )
}

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
