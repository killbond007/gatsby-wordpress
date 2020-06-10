const _ = require(`lodash`)
const path = require(`path`)

/**
 * Create WordPress Category Pages
 */
module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions
  const categoriesTemplate = path.resolve(`./src/templates/category.js`)

  return graphql(
    `
      {
        wordpress {
          categories {
            edges {
              node {
                id
                slug
                name
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

    const categories = result.data.wordpress.categories.edges
    categories.forEach(cat => {
      createPage({
        path: `/category/${cat.node.slug}/`,
        component: categoriesTemplate,
        context: {
          categoryId: cat.node.id,
          slug: cat.node.slug,
          name: cat.node.name,
        },
      })
    })

    // ==== END POSTS ====
    return null
  })
}
