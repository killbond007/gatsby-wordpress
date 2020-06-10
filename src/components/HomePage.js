import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import gql from "graphql-tag"
import { Query } from "react-apollo"

import { rhythm } from "../utils/typography"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/NavBar"

const postsQuery = gql`
  query {
    posts {
      edges {
        node {
          slug
          date
          title
          excerpt
          id
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`

const HomePage = props => {
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
  const { title, postPrefix } = site.siteMetadata
  return (
    <Query query={postsQuery}>
      {({ loading, error, data }) => {
        if (loading) return "Loading posts..."
        if (error) return "Error loading posts..."

        return (
          <Layout location={props.location} title={title}>
            <Navbar />
            <SEO title="All posts" />
            {data.posts.edges.map(({ node }) => {
              return (
                <div key={node.slug}>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link to={`${postPrefix}/${node.slug}`}>{node.title}</Link>
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
      }}
    </Query>
  )
}

export default HomePage
