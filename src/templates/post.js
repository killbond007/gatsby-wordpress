import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import gql from "graphql-tag"
import { Query } from "react-apollo"

import Layout from "../components/layout/Layout"
import SEO from "../components/seo"
import CommentForm from "../components/CommentForm"
import CommentList from "../components/CommentList"
import AnimatedLoader from "../components/loader/AnimatedLoader"

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

  return (
    <Query query={postQuery} variables={{ postId: props.pageContext.id }}>
      {({ loading, error, data }) => {
        if (loading) return <AnimatedLoader />
        if (error) return "Error loading post..."

        return (
          <Layout>
            <SEO title={data.post.title} description={data.post.excerpt} />
            <h1>{data.post.title} :::: </h1>
            {featuredImage && (
              <img
                src={featuredImage}
                alt={data.post.title}
                className="featured-image"
              />
            )}
            <div className="post-meta" style={{}}>
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
            <hr />
            <CommentList postId={props.pageContext.id} />
            <CommentForm postId={props.pageContext.id} />
          </Layout>
        )
      }}
    </Query>
  )
}

export default PostTemplate
