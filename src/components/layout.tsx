import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import { Global } from '@emotion/core'
import Colors from './colors'
import styled from '@emotion/styled'
import facebook from '../images/facebook.svg'

const Links = styled.nav({
  margin: `1rem 1rem 3rem 1rem`,
  a: {
    textDecoration: `none`,
    margin: `1rem 1.5rem`,
    fontSize: `0.9rem`,
    '@media (orientation: portrait)': {display: `block`},
  },
  '& :visited': { color: Colors.font},
  '.active-link': {color: Colors.primary, textDecoration: `underline`},
})
const Icon = styled.img({
  width: '2rem',
  height: '2rem', 
  color: 'white'
})
const Footer = styled.footer({
  color: `white`,
  backgroundColor: Colors.primary,
  textAlign: `center`,
  marginTop: `4rem`,
  padding: `2rem`,
})
const Navbar = styled.div({})
const Menu = styled.div({
  '@media (orientation: landscape)': {display: `none`},
  marginTop: '.5rem',
  float: 'right',
  width:'2rem', 
  height: '2rem',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all .5s ease-in-out',
  //border: `3px solid ${Colors.font}`
})
const Hamburger = styled.div({
  width: '1.5rem',
  height: `.1rem`,
  position:'relative',
  backgroundColor: Colors.font,
  '&::after, &::before': {
    content: '""',
    position: 'absolute',
    left: '0',
    width: '1.5rem',
    height: `.1rem`,
    backgroundColor: Colors.font,
  },
  '&::after': {transform: 'translateY(-0.5rem)'},
  '&::before': {transform: 'translateY(0.5rem)'},
  '.open': {
    transform: 'translateX(-2rem)',
    background:'transaprent',
  }
})


export default function Layout({ children }) {
  let navBarActiveClass = ''
  const [active, setActive] = useState(false);
  useEffect(() => {
    navBarActiveClass = active ? 'is-active' : ''
    console.log(navBarActiveClass)
  })

  return (
    <div>
    <div style={{ padding: `1rem`, margin:`auto`, maxWidth: 800}}>
      <Global styles={{body: {margin: 0, backgroundColor: Colors.background, color: Colors.font, fontFamily: '"Open Sans", Helvetica, Arial', overflowY: `scroll`}}}/>
      <header style={{ textAlign: `center` }}>    
        <Navbar>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <StaticImage src="../images/logo.png" alt="" placeholder="blurred"  />
          </Link>
          <Menu onClick={() => setActive(!active)}>
            <Hamburger/>
          </Menu>
        </Navbar>
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
      <a title="facebook" href="https://www.facebook.com/KurnikPolski/" target="_blank" rel="noopener noreferrer">
        <Icon src={facebook} alt="Facebook"/>
      </a>
      <br/>
        Prawa autorskie © 2021  — Nil sine numine
      </Footer>
    </div>
  )
}