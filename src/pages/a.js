import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Navbar from "../components/NavBar"

const BlogIndex = props => {
  const { title, postPrefix } = props.data.site.siteMetadata
  const posts = props.data.allWordpressPost.edges

  return (
    <Layout location={props.location} title={title}>
      <Navbar />
      <SEO title="All posts" />
      {posts.map(({ node }) => {
        return (
          <div key={node.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link
                style={{ boxShadow: `none` }}
                to={`${postPrefix}/${node.slug}`}
              >
                {node.title}
              </Link>
            </h3>
            <small>{node.date}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: node.excerpt,
              }}
            />
          </div>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        postPrefix
      }
    }
    allWordpressPost(filter: { fields: { deploy: { eq: true } } }, limit: 100) {
      edges {
        node {
          date(formatString: "MMMM DD, YYYY")
          slug
          title
          excerpt
          id
          categories {
            name
          }
        }
      }
    }
  }
`
