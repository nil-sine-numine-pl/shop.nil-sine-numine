import React from "react"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import { Global } from '@emotion/core'
import Colors from './colors'
import styled from '@emotion/styled'

const Links = styled.ul({
  listStyle: `none`,
  a: {
    textDecoration: `none`
  }
})

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div style={{ margin: `1rem auto`, maxWidth: 800}}>
      <Global styles={{body: {backgroundColor: Colors.background, fontFamily: '"Open Sans", Helvetica, Arial'}}}/>
      <header style={{ marginBottom: `1.5rem`, textAlign: `center` }}>    
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <StaticImage src="../images/logo.png" alt="" placeholder="blurred"  />
        </Link>  
        <Links>
          <ListLink to="/">FUNDACJA</ListLink>
          <ListLink to="/shop/">SKLEP</ListLink>
          <ListLink to="/blog/">BLOG</ListLink>
          <ListLink to="/about/">O NAS</ListLink>
        </Links>
      </header>
      {children}
    </div>
  )
}