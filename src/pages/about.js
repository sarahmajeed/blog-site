import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"

const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
      <p>
        I am Sarah Majeed, un undergraduate software engineering student, who is
        extremely passionate about technology. I love building apps and
        animating them for visual pleasure
      </p>
      <p>
        Need a developer? <Link to="/contact">Contact Me</Link>
      </p>
      <Footer />
    </div>
  )
}

export default AboutPage
