import React from "react"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 800}}>
      <StaticImage src="../images/logo.png" alt="" placeholder="blurred"  />
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>MySweetSite</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Fundacja</ListLink>
          <ListLink to="/shop/">Sklep</ListLink>
          <ListLink to="/blog/">Blog</ListLink>
          <ListLink to="/about/">O nas</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}