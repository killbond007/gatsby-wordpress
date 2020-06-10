const path = require(`path`)

/**
 * Create WordPress Posts
 */
module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`./src/templates/post.js`)

  return graphql(
    `
      {
        site {
          siteMetadata {
            postPrefix
          }
        }
        wordpress {
          posts {
            edges {
              node {
                id
                slug
                modified
                status
                categories {
                  nodes {
                    name
                  }
                }
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const { postPrefix } = result.data.site.siteMetadata
    const { edges } = result.data.wordpress.posts

    edges.forEach(edge => {
      if (edge.node.status === "publish") {
        createPage({
          path: `${postPrefix}/${edge.node.slug}`,
          component: postTemplate,
          context: {
            id: edge.node.id,
          },
        })
      }
    })
    // ==== END POSTS ====
    return null
  })
}
