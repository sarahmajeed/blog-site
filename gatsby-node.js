const path = require("path")

//dynamically generate blog pages
//node is data structure for storing gatsby data

module.exports.createPages = async ({ graphql, actions }) => {
  //this graphql is a function which returns a promise
  const { createPage } = actions

  //1. Get path to template
  const blogTemplate = path.resolve("./src/templates/blog.js")
  //2. Get markdown data-we need slugs
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  //3. Create new pages
  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      //path for this page
      path: `blog/${edge.node.slug}`,
      component: blogTemplate,
      context: {
        // Add optional context data to be inserted
        // as props into the page component..
        //
        // The context data can also be used as
        // arguments to the page GraphQL query.
        //
        // The page "path" is always available as a GraphQL
        // argument.
        slug: edge.node.slug,
      },
    })
  })
}
