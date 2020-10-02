import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <p>
        I am Sarah Majeed, un undergraduate software engineering student, who is
        extremely passionate about technology. I love building apps and
        animating them for visual pleasure
      </p>
      <p>
        Need a developer? <Link to="/contact">Contact Me</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
