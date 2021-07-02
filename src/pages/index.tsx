import React from 'react'
import { Lined, H1 } from '../components/lined'
import { StaticImage } from 'gatsby-plugin-image'
import { Page } from '../components/page'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

let Section = styled.section({
  marginBottom: '5rem'
})

export default () => 
<>
  <Page style={{textAlign:"center"}}>
    <Section>
      <Lined><H1>O Fundacji</H1></Lined>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <StaticImage src="../images/foundation.webp" alt="Manufaktura kawy" placeholder="blurred"  />
    </Section>
    <Section>
      <Lined><H1>Manufaktura kawy</H1></Lined>
      <p>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <StaticImage src="../images/coffee_factory.webp" alt="Manufaktura kawy" placeholder="blurred"  />
    </Section>
    <Section>
    <Lined><H1>Sklep</H1></Lined>
    <p>Już wkrótce będziesz mógł nas wesprzeć kupując kawę! Jeśli można mieć dobrą kawę z górnej półki i przy okazji pomóc dzieciom, to chyba warto? Zajrzyj do nas wkrótce.</p>
    </Section>
  </Page>
  <Section style={{display: "grid", placeItems: 'center'}}>
    <StaticImage style={{gridArea: "1/1"}} src="../images/blog.webp" alt="Blog" placeholder="blurred"  />
    <Link aria-label="Blog" style={{gridArea: "1/1", position: 'relative'}} to="/blog/">
      <h1 style={{color: 'white', fontFamily: 'playfair', fontSize:'4rem'}}>Czytaj blog</h1>
    </Link>
  </Section>
</>