import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Navbar from "../components/NavBar"

const HomePage = props => {
  const { site, allWordpressPost } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            postPrefix
          }
        }
        allWordpressPost(
          filter: { fields: { deploy: { eq: true } } }
          limit: 100
        ) {
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
  )
  const { title, postPrefix } = site.siteMetadata
  const posts = allWordpressPost.edges

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

export default HomePage
