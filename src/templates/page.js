import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import gql from "graphql-tag"
import { Query } from "react-apollo"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { rhythm } from "../utils/typography"

const pageQuery = gql`
  query($pageId: ID!) {
    page(id: $pageId) {
      id
      slug
      title
      content
      featuredImage {
        sourceUrl
      }
    }
  }
`

const PageTemplate = props => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            postPrefix
          }
        }
      }
    `
  )

  return (
    <Query query={pageQuery} variables={{ pageId: props.pageContext.id }}>
      {({ loading, error, data }) => {
        if (loading) return "Loading page..."
        if (error) return "Error loading page..."

        return (
          <Layout location={props.location} title={site.siteMetadata.title}>
            <SEO title={data.page.title} description={data.page.excerpt} />
            <h1>{data.page.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.page.content }} />
            <hr
              style={{
                marginBottom: rhythm(1),
              }}
            />
          </Layout>
        )
      }}
    </Query>
  )
}

export default PageTemplate
