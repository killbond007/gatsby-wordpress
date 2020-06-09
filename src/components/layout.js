import React from "react"

import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = props => {
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <>
        <h1>
          <Link to={`/`}>{title}</Link>
        </h1>
        <div>❤ for cc</div>
      </>
    )
  } else {
    header = (
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
            {title}
          </Link>
        </h3>
        <div
          style={{
            ...scale(-0.2),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            color: "#666",
          }}
        >
          With ❤ for Netlify
        </div>
      </>
    )
  }
  return (
    <div>
      <header>{header}</header>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()}, Built with</footer>
    </div>
  )
}

export default Layout
