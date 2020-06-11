import React from "react"

import { Link } from "gatsby"

const Header = () => {
  return (
    <>
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          12312323123
        </Link>
      </h3>
      <div
        style={{
          marginTop: 0,
          color: "#666",
        }}
      >
        With ❤ for cc
      </div>
    </>
  )
}

export default Header
