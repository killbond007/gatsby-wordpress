const path = require(`path`)

/**
 * Create WordPress Posts
 */
module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`./src/templates/page.js`)

  return graphql(
    `
      {
        wordpress {
          pages {
            edges {
              node {
                id
                slug
                status
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

    const { edges } = result.data.wordpress.pages

    edges.forEach(edge => {
      if (edge.node.status === "publish") {
        createPage({
          path: `/${edge.node.slug}`,
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
