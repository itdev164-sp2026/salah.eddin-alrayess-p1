exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allContentfulArticle {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.allContentfulArticle.nodes.forEach(article => {
    createPage({
      path: `/articles/${article.slug}`,
      component: require.resolve("./src/templates/article.js"),
      context: { slug: article.slug },
    })
  })
}
