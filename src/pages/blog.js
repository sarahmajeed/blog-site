import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

const BlogPage = () => {
  const blogPosts = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>Blog</h1>
      {blogPosts.allMarkdownRemark.edges.map(blogPost => (
        <ol>
          <li>{blogPost.node.frontmatter.title}</li>
        </ol>
      ))}
    </Layout>
  )
}

export default BlogPage
