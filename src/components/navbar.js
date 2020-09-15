import React from "react"
import { Link } from "gatsby"

const navbar = () => {
  return (
    <nav>
      <h3>Sarah's Blog</h3>
      <div>
        <Link to="/">Home</Link>
        <Link to="/blog">Blogs</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default navbar
