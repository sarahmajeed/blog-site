import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = props => {
  return (
    <div>
      <Layout>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      </Layout>
    </div>
  )
}

export default Blog
