const path = require("path")

//dynamically generate blog pages
//node is data structure for storing gatsby data

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  // Transform the new node here and create a new node or
  // create a new node field.
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  //this graphql is a function which returns a promise
  const { createPage } = actions

  //1. Get path to template
  const blogTemplate = path.resolve("./src/templates/blog.js")
  //2. Get markdown data
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  //3. Create new pages
  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      //path for this page
      path: `blog/${edge.node.fields.slug}`,
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
        slug: edge.node.fields.slug,
      },
    })
  })
}
