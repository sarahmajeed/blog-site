//dynamically generate blog pages
//node is data structure for storing gatsby data

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  // Transform the new node here and create a new node or
  // create a new node field.

  console.log(JSON.stringify(node, undefined, 4))
}
