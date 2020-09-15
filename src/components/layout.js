import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import "../styles/index.scss"

const Layout = props => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
