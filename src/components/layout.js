import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Navbar />
        {props.children}
      </div>

      <Footer className={layoutStyles.footer} />
    </div>
  )
}

export default Layout
