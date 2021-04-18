import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import { Global, css } from '@emotion/core'
import Colors from './colors'
import styled from '@emotion/styled'
import { MenuButton } from './menuButton'
import { Footer} from './footer'

type LinksProps = {
  display: string
}

const GlobalStyles = css({
  body: {margin: 0, backgroundColor: Colors.background, color: Colors.font, fontFamily: '"Open Sans", Helvetica, Arial', overflowY: `scroll`}
})

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
},
(props: LinksProps) => ({
  '@media (orientation: portrait)': {display: props.display},
  '@media (orientation: landscape)': {display: 'block'},
}))

const Navbar = styled.div({display: 'block'})

export default function Layout({ children }) {
  const [active, setActive] = useState(false)
  return (
    <div>
    <div style={{ padding: `1rem`, margin:`auto`, maxWidth: 800}}>
      <Global styles={GlobalStyles}/>
      <header style={{ textAlign: `center` }}>    
        <Navbar>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <StaticImage src="../images/logo.png" alt="" placeholder="blurred"  />
          </Link>
          <MenuButton onClick={() => setActive(!active)}/>
        </Navbar>
        <Links display={active ? 'none':'block'}>
          <Link onClick={() => setActive(!active)} activeClassName='active-link' to="/">KIM JESTEŚMY?</Link>
          <Link onClick={() => setActive(!active)} activeClassName='active-link' to="/shop/">SKLEP</Link>
          <Link onClick={() => setActive(!active)} activeClassName='active-link' to="/blog/">BLOG I NEWSY</Link>
          <Link onClick={() => setActive(!active)} activeClassName='active-link' to="/about/">O NAS</Link >
        </Links>
      </header>
      {children}
      </div>
      <Footer/>
    </div>
  )
}