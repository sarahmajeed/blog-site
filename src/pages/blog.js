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
      <ol>
        {blogPosts.allMarkdownRemark.edges.map(blogPost => (
          <li>
            <h2>{blogPost.node.frontmatter.title}</h2>
            <p>
              (Dated:
              {blogPost.node.frontmatter.date})
            </p>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
