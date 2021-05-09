const _ = require('lodash')
const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
    fallback: {
      crypto: false,
    }}
  })}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            timeToRead
            frontmatter {
              templateKey
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges
                    .filter(edge => edge.node.frontmatter.templateKey !== 'none')

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.frontmatter.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.tsx`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })
  })
}
