import React from "react"
import { render } from "@testing-library/react"

import AnimatedLoader from "../AnimatedLoader"

const defaultProps = {}
const getInstance = (props = {}) => (
  <AnimatedLoader {...defaultProps} {...props} />
)

describe("AnimatedLoader", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(getInstance())
    expect(asFragment()).toMatchSnapshot()
  })
})
