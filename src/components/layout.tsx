import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import { Global, css } from '@emotion/core'
import { Colors } from './consts'
import styled from '@emotion/styled'
import { MenuButton } from './menuButton'
import { Footer} from './footer'
import Helmet from 'react-helmet'
import useSiteMetadata from './siteMetadata'
import { withPrefix } from 'gatsby'
import fbSvg from '../images/fb_icon.svg'
import instaSvg from '../images/insta_icon.svg'

type LinksProps = {
  display: string
}

const GlobalStyles = css`
@font-face {
  font-family: 'montserrat';
  font-style: 'normal';
  src: url(../fonts/montserrat/Montserrat-Regular.ttf) format('truetype');
  font-display: swap;
}
@font-face { 
  font-family: 'montserrat-semibold';
  font-style: 'normal';
  src: url(../fonts/montserrat/Montserrat-SemiBold.ttf) format('truetype');
  font-display: swap;
}
@font-face { 
  font-family: 'playfair';
  font-style: 'normal';
  src: url(../fonts/playfair_display/PlayfairDisplay-Regular.ttf) format('truetype');
  font-display: swap;
}
body {
   margin: 0;
   font-family: 'montserrat';
   overflowY: 'scroll';
   line-height: 1.6rem;
}
table {borderSpacing: 0};
iframe {
  width: '100%';
}
a {
  color: ${Colors.font};
  text-decoration: none;
}
td, th {
  border-bottom: '1px solid gray';
  padding: '.2rem';
}`

const Links = styled.nav({
  margin: `1rem 0 0 0`,
  a: {
    margin: `1rem 1.5rem`,
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
  gridTemplateRows: '6rem auto',
  marginBottom: '3rem'
})
const Navigation = styled.div({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1,
  whiteSpace: 'nowrap',
  paddingTop: '1rem',
  backgroundColor: 'rgba(0, 0, 0, 0.5)'
})
const Title = styled.div({
  gridArea: "1/1",
  position: "relative",
  display: "grid",
  placeItems: "center",
  '@media (orientation: portrait)': {display: `none`},
})
const WhiteLine = styled.div({ 
  borderBottom: '1px solid white',
  borderTop: '1px solid white',
  marginTop: '1rem',
  paddingTop: '0.5rem'
})

const Socials = styled.div({
  display: 'inline',
  '@media (orientation: portrait)': 
  {
    position: `absolute`,
    top: `2rem`,
    right: `15%`
  },
  marginLeft: '6%',
  'img': {
    height: '2rem',
    marginRight: '0.5rem',
    marginLeft: '0.5rem'
  },
})

const WhitleLineButton = styled.button({
  border: '1px solid white',
  background: 'none',
  fontFamily: 'montserrat-semibold',
  fontSize: '1rem',
  color: 'white',
  margin: '1rem',
  padding: '0.81rem 1.88rem 0.81rem 1.88rem',
  cursor: 'pointer'
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
        <link rel="icon" type="image/png" href={`${withPrefix('/')}img/fav.png`} sizes="16x16"/>
      </Helmet>
      <Global styles={GlobalStyles}/>
      <Header aria-label="Fundacja">    
        <StaticImage src="../images/header.webp" style={{gridArea: "1/1"}} alt="Header" placeholder="blurred"  />
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
            <Socials>
              <a target="_blank" href="https://www.facebook.com/KurnikPolski" rel="noopener noreferrer"><img src={fbSvg}></img></a>
              <a target="_blank" href="https://www.instagram.com/kurnikpolski/" rel="noopener noreferrer"><img src={instaSvg}></img></a>
            </Socials>
            <WhiteLine/>
          </Navigation>
        <HeaderContent>

        </HeaderContent>
        <Title>
            <section>
              <h1 style={{color: 'white', fontFamily: 'playfair', fontSize:'5rem', fontWeight: 500, marginBottom: '3rem' }}>Nil Sine Numine</h1>
              <h1 style={{color: 'white', fontFamily: 'montserrat', fontSize:'2rem', fontWeight: 500}}>Nic bez woli bożej</h1>
              <Link to="/about/">
                <WhitleLineButton>PRZECZYTAJ O FUNDACJI</WhitleLineButton>
              </Link>
            </section>
          </Title>
      </Header>
      {children}
      <Footer/>
    </>
  )
}