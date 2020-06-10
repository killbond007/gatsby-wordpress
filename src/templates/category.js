import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import gql from "graphql-tag"
import { Query } from "react-apollo"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const categoryQuery = gql`
  query($categoryId: ID!) {
    category(id: $categoryId) {
      posts {
        edges {
          node {
            slug
            title
            modified
            excerpt
            id

            content
          }
        }
      }
    }
  }
`

const CategoryTemplate = props => {
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
    <Query
      query={categoryQuery}
      variables={{ categoryId: props.pageContext.categoryId }}
    >
      {({ loading, error, data }) => {
        if (loading) return "Loading post..."
        if (error) return "Error loading post..."

        return (
          <Layout location={props.location} title={title}>
            <SEO
              title={`Archive | ${props.pageContext.name}`}
              description={`Archive for ${props.pageContext.name} category`}
            />
            <h1>Archive | {props.pageContext.name}</h1>
            {data.category.posts.edges.map(({ node }) => {
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

export default CategoryTemplate
