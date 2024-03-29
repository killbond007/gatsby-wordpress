import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"
import SEO from "../components/seo"

const NotFoundPage = props => {
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <Layout>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
