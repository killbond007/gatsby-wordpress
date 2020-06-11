import React from "react"

import { Link } from "gatsby"

import Header from "./header/Header"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer>© {new Date().getFullYear()}, Built with</footer>
    </div>
  )
}

export default Layout
