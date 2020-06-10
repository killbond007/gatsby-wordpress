import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import gql from "graphql-tag"
import { Query } from "react-apollo"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CommentForm from "../components/CommentForm"
import CommentList from "../components/CommentList"
import AnimatedLoader from "../components/loader/AnimatedLoader"

import { rhythm } from "../utils/typography"

const postQuery = gql`
  query($postId: ID!) {
    post(id: $postId) {
      date
      slug
      title
      modified
      excerpt
      categories {
        edges {
          node {
            name
            slug
          }
        }
      }
      content
    }
  }
`

const PostTemplate = props => {
  let featuredImage = false

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
  const { title } = site.siteMetadata

  return (
    <Query query={postQuery} variables={{ postId: props.pageContext.id }}>
      {({ loading, error, data }) => {
        if (loading) return <AnimatedLoader />
        if (error) return "Error loading post..."

        return (
          <Layout location={props.location} title={title}>
            <SEO title={data.post.title} description={data.post.excerpt} />
            <h1>{data.post.title} :::: </h1>
            {featuredImage && (
              <img
                src={featuredImage}
                alt={data.post.title}
                className="featured-image"
              />
            )}
            <div
              className="post-meta"
              style={{
                marginBottom: rhythm(1),
              }}
            >
              <div className="post-date">{data.post.date}</div>

              {data.post.categories.edges.map(
                ({ node: { name, slug } }, key) => (
                  <Link className="cat-link" to={`/category/${slug}`} key={key}>
                    {name}
                  </Link>
                )
              )}
            </div>

            <div dangerouslySetInnerHTML={{ __html: data.post.content }} />
            <hr
              style={{
                marginBottom: rhythm(1),
              }}
            />
            <CommentList postId={props.pageContext.id} />
            <CommentForm postId={props.pageContext.id} />
          </Layout>
        )
      }}
    </Query>
  )
}

export default PostTemplate
