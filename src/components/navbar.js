import React from "react"
import { Link } from "gatsby"
import headerStyles from "./navbar.module.scss"

const navbar = () => {
  return (
    <nav className={headerStyles.nav}>
      <h3>
        <Link className={headerStyles.title} to="/">
          Sarah Majeed
        </Link>
      </h3>
      <div className="header-link">
        <ul className={headerStyles.navList}>
          <li>
            {" "}
            <Link
              activeClassName={headerStyles.activeNavItem}
              className={headerStyles.navItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              activeClassName={headerStyles.activeNavItem}
              className={headerStyles.navItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClassName={headerStyles.activeNavItem}
              className={headerStyles.navItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default navbar
