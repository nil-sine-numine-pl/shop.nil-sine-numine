import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import { Global, css } from '@emotion/core'
import Colors from './colors'
import styled from '@emotion/styled'
import { MenuButton } from './menuButton'
import { Footer} from './footer'
import Helmet from 'react-helmet'
import useSiteMetadata from './siteMetadata'
import { withPrefix } from 'gatsby'

type LinksProps = {
  display: string
}

const GlobalStyles = css({
  body: {margin: 0,
     backgroundColor: Colors.background, 
     color: Colors.font,
     fontFamily: '"Open Sans", Helvetica, Arial', 
     overflowY: `scroll`},
  'table': {borderSpacing: 0},
  a: {
    color: Colors.font,
    fontSize: `0.9rem`,
  },
  'td, th': {borderBottom: '1px solid gray', padding: '.2rem'}
})

const Links = styled.nav({
  margin: `1rem 0 0 0`,
  a: {
    margin: `1rem 1.5rem`,
    textDecoration: `none`,
    '@media (orientation: portrait)': {display: `block`},
  },
  '& :visited': { color: Colors.font},
  '.active-link': {color: Colors.primary, textDecoration: `underline`},
},
(props: LinksProps) => ({
  '@media (orientation: portrait)': {display: props.display},
  '@media (orientation: landscape)': {display: 'block'},
}))

const Header = styled.header({ 
  textAlign: `center`,
   padding:'1rem', 
   background: 'white',
   boxShadow: '0 0 .4rem  gray'
  })


export default function Layout({ children }) {
  const [active, setActive] = useState(false)
  const { title, description } = useSiteMetadata()

  return (
    <>
      <Helmet>
        <html lang="pl" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`}/>
        <meta property="og:url" content="https://nilsinenumine.netlify.app/"/>
        <link rel="icon" type="image/png" href={`${withPrefix('/')}img/fav.png`} sizes="64x64"/>
        <link rel="icon" type="image/png" href={`${withPrefix('/')}img/fav.png`} sizes="32x32"/>
        <link rel="icon" type="image/png" href={`${withPrefix('/')}img/fav.png`} sizes="16x16" />
      </Helmet>
      <Global styles={GlobalStyles}/>
      <Header aria-label="Fundacja" style={{ textAlign: `center`, padding:'1rem', background: 'white' }}>    
        <Link  to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <StaticImage src="../images/logo.png" alt="Logo" placeholder="blurred"  />
        </Link>
        <MenuButton onClick={() => setActive(!active)}/>
        <Links display={active ? 'none':'block'}>
          <Link onClick={() => setActive(!active)} activeClassName='active-link' aria-label="Pomagaj z nami" to="/">POMAGAJ Z NAMI</Link>
          <Link onClick={() => setActive(!active)} activeClassName='active-link' aria-label="Sklep" to="/shop/">SKLEP</Link>
          <Link onClick={() => setActive(!active)} activeClassName='active-link' aria-label="Blog i newsy" to="/blog/">BLOG I NEWSY</Link>
          <Link onClick={() => setActive(!active)} activeClassName='active-link' aria-label="O Fundacji" to="/about/">O FUNDACJI</Link >
          <Link onClick={() => setActive(!active)} activeClassName='active-link' aria-label="Kontakt" to="/contact/">KONTAKT</Link >
        </Links>
      </Header>
      <div style={{ padding: `1rem`, margin:`auto`, maxWidth: 800}}>
      {children}
      </div>
      <Footer/>
    </>
  )
}