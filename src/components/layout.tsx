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

const GlobalStyles2 = css`
@font-face { 
  font-family: 'montserrat';
  font-style: 'normal';
  src: url(../fonts/montserrat/Montserrat-Regular.ttf) format('truetype');
}
@font-face { 
  font-family: 'montserrat-semibold';
  font-style: 'normal';
  src: url(../fonts/montserrat/Montserrat-SemiBold.ttf) format('truetype');
}
@font-face { 
  font-family: 'Playfair';
  font-style: 'normal';
  src: url(../fonts/playfair_display/PlayfairDisplay-Regular.ttf) format('truetype');
}
body {
   margin: 0;
   font-family: 'montserrat';
   overflowY: 'scroll';
}
table {borderSpacing: 0};
iframe {
  width: '100%';
}
h1 { margin: 0 }
a {
  color: ${Colors.font};
  font-size: '0.9rem';
}
td, th {
  border-bottom: '1px solid gray';
  padding: '.2rem';
}
`

const Links = styled.nav({
  margin: `1rem 0 0 0`,
  a: {
    margin: `1rem 1.5rem`,
    textDecoration: `none`,
    fontFamily: 'montserrat-semibold',
    color: 'white',
    '@media (orientation: portrait)': {display: `block`},
  },
  '.active-link': { color: '#8cbb6c'},
},
(props: LinksProps) => ({
  '@media (orientation: portrait)': {display: props.display},
  '@media (orientation: landscape)': {display: 'inline'},
}))

const Header = styled.header({ 
  textAlign: `center`,
   background: 'white',
   display: 'grid',
  })
const HeaderContent = styled.div({
  gridArea: "1/1",
  position: "relative",
  display: "grid",
  gridTemplateRows: '6rem auto'
})
const Navigation = styled.div({
  gridArea: "1/1",
  position: "relative",
  paddingTop: '1rem',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  borderBottom: '1px double white',
  borderBottomStyle: 'double'
})
const Title = styled.div({
  display: "grid",
  placeItems: "center",
})
const WhiteLine = styled.div({ 
  borderBottom: '1px solid white',
  paddingTop: '1rem'
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
      <Global styles={GlobalStyles2}/>
      <Header aria-label="Fundacja">    
        <StaticImage src="../images/header.webp" style={{gridArea: "1/1"}} alt="Header" placeholder="blurred"  />
        <HeaderContent>
          <Navigation>
            <MenuButton onClick={() => setActive(!active)}/>
            <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
              <StaticImage src="../images/logotyp_menu.webp" alt="Logo" placeholder="blurred"  />
            </Link>
            <Links display={active ? 'none':'block'}>
              <Link onClick={() => setActive(!active)} activeClassName='active-link' aria-label="Pomagaj z nami" to="/">POMAGAJ Z NAMI</Link>
              <Link onClick={() => setActive(!active)} activeClassName='active-link' aria-label="Sklep" to="/shop/">SKLEP</Link>
              <Link onClick={() => setActive(!active)} activeClassName='active-link' aria-label="Blog" to="/blog/">BLOG</Link>
              <Link onClick={() => setActive(!active)} activeClassName='active-link' aria-label="O Fundacji" to="/about/">O FUNDACJI</Link >
              <Link onClick={() => setActive(!active)} activeClassName='active-link' aria-label="Kontakt" to="/contact/">KONTAKT</Link >
            </Links>
            <WhiteLine/>
          </Navigation>
          <Title>
            <h1 style={{color: 'white', fontFamily: 'Playfair', fontSize:'5rem'}}>Nil Sine Numine</h1>
          </Title>
        </HeaderContent>
      </Header>
      <div style={{padding: '1rem', margin:'auto', maxWidth: 1000}}>
      {children}
      </div>
      <Footer/>
    </>
  )
}