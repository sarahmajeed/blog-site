import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import blogStyles from "./blog.module.scss"

const BlogPage = props => {
  const blogPosts = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {blogPosts.allMarkdownRemark.edges.map(blogPost => (
          <li className={blogStyles.post}>
            <Link to={`/blog/${blogPost.node.fields.slug}`}>
              <h2>{blogPost.node.frontmatter.title}</h2>
              <p>
                (Dated:
                {blogPost.node.frontmatter.date})
              </p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
