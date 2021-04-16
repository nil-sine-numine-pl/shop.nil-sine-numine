import React from "react"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import { Global } from '@emotion/core'
import Colors from './colors'
import styled from '@emotion/styled'

const Links = styled.nav({
  margin: `1rem 1rem 3rem 1rem`,
  a: {
    textDecoration: `none`,
    margin: `0rem 1.5rem`,
    fontSize: `0.9rem`,
  },
  '& :visited': { color: Colors.font},
  '.active-link': {color: Colors.primary, textDecoration: `underline`}
})

  const Footer = styled.footer({
    color: `white`,
    backgroundColor: Colors.primary,
    textAlign: `center`,
    marginTop: `4rem`,
    padding: `2rem`,
  })

export default function Layout({ children }) {
  return (
    <div>
    <div style={{ margin: `1rem auto`, maxWidth: 800}}>
      <Global styles={{body: {margin: 0, backgroundColor: Colors.background, color: Colors.font, fontFamily: '"Open Sans", Helvetica, Arial', overflowY: `scroll`}}}/>
      <header style={{ marginBottom: `1.5rem`, textAlign: `center` }}>    
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <StaticImage src="../images/logo.png" alt="" placeholder="blurred"  />
        </Link>  
        <Links>
          <Link activeClassName='active-link' to="/">KIM JESTEŚMY?</Link>
          <Link activeClassName='active-link' to="/shop/">SKLEP</Link>
          <Link activeClassName='active-link' to="/blog/">BLOG I NEWSY</Link>
          <Link activeClassName='active-link' to="/about/">O NAS</Link >
        </Links>
      </header>
      {children}
      </div>
      <Footer>
        Prawa autorskie © 2021  — Nil sine numine
      </Footer>
    </div>
  )
}