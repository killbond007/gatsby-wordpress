import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import gql from "graphql-tag"
import { Query } from "react-apollo"

import Layout from "../../../components/layout/Layout"
import SEO from "../../../components/seo"
import Navbar from "../../../components/NavBar"
import AnimatedLoader from "../../../components/loader/AnimatedLoader"

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
            postPrefix
          }
        }
      }
    `
  )
  const { postPrefix } = site.siteMetadata
  return (
    <Query query={postsQuery}>
      {({ loading, error, data }) => {
        if (loading) return <AnimatedLoader />
        if (error) return "Error loading posts..."

        return (
          <Layout>
            <Navbar />
            <SEO title="All posts" />
            {data.posts.edges.map(({ node }) => {
              return (
                <div key={node.slug}>
                  <h3>
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
