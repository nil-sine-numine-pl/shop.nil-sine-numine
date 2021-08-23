import React from 'react'
import { Lined, H1 } from '../../components/lined'
import { StaticImage } from 'gatsby-plugin-image'
import { Page } from '../../components/page'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'
import { Button } from '../../components/button'

let Section = styled.section({
  marginBottom: '5rem'
})

const PersonSectionRight = styled.section({
  display: 'flex',
  alignItems: 'center',
  '@media (orientation: portrait)': {flexDirection: `column-reverse`, textAlign:'center'},
  textAlign: 'right',
  'h2': { marginBottom: '0' },
  'p': { marginTop: '0' },
  '.gatsby-image-wrapper': {
    '@media (orientation: landscape)': {marginLeft: '1rem',},
    width: '100%'
  },
  img: {
    objectFit: 'contain'
  }
})

const PersonSectionLeft = styled.section({
  display: 'flex',
  alignItems: 'center',
  '@media (orientation: portrait)': {flexDirection: `column`, textAlign:'center'},
  textAlign: 'left',
  'h2': { marginBottom: '0' },
  'p': { marginTop: '0' },
  '.gatsby-image-wrapper': {
    '@media (orientation: landscape)': {marginRight: '1rem',},
    width: '100%'
  },
})

export default () => 
{
  const pages = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {id: {in: ["mission", "managment", "barbara", "man"]}}}, sort: {order: ASC, fields: frontmatter___id}) {
          nodes {
            html
          }
        }
      }`
  ).allMarkdownRemark.nodes

  const [ barbara, man, managment, mission, ] = 
    [ pages[0].html, pages[1].html, pages[2].html, pages[3].html ];

  return <>
    <Page style={{textAlign:"center"}}>
      <Section>
        <Lined><H1>Misja fundacji</H1></Lined>
          <section dangerouslySetInnerHTML={{ __html: mission }}></section>
      </Section>
      <Section>
        <Lined><H1>Zarząd fundacji</H1></Lined>
          <section dangerouslySetInnerHTML={{ __html: managment }}></section>
          <PersonSectionRight>
            <span dangerouslySetInnerHTML={{ __html: barbara }}></span>
            <StaticImage objectFit='contain' src="../../images/barbara.webp" alt="Barbara" placeholder="blurred" />
          </PersonSectionRight>
          <PersonSectionLeft>
            <StaticImage objectFit='contain' src="../../images/vice.webp" alt="Barbara" placeholder="blurred" />  
            <span dangerouslySetInnerHTML={{ __html: man }}></span>
          </PersonSectionLeft>
      </Section>
      <Section>
        <Lined><H1>Statut fundacji</H1></Lined>
          <p>Jeżeli chcesz poznać wszystkie obszary działalności fundacji<br/>możesz zapoznać się z naszym statutem.</p>
          <a target="_blank" href="/statut.pdf" rel="noopener noreferrer">
            <Button>POBIERZ STATUT</Button>
          </a>
      </Section>
    </Page>
    <Section style={{display: "grid", placeItems: 'center'}}>
      <StaticImage style={{gridArea: "1/1", minHeight: '12rem'}} src="../images/blog.webp" alt="Blog" placeholder="blurred"  />
      <Link aria-label="Blog" style={{gridArea: "1/1", position: 'relative'}} to="/blog/">
        <h1 style={{color: 'white', fontWeight: 500 ,fontFamily: 'playfair', fontSize:'4rem', lineHeight: '5rem', textAlign: 'center'}}>Jak możesz pomóc?</h1>
      </Link>
    </Section>
  </>
}