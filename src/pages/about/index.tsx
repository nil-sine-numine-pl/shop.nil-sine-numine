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
  textAlign: 'right',
  'h2': { marginBottom: '0' },
  'p': { marginTop: '0' },
  '.gatsby-image-wrapper': {
    marginLeft: '1rem',
    width: '100%'
  }
})

const PersonSectionLeft = styled.section({
  display: 'flex',
  alignItems: 'center',
  textAlign: 'left',
  'h2': { marginBottom: '0' },
  'p': { marginTop: '0' },
  '.gatsby-image-wrapper': {
    marginRight: '1rem',
    width: '100%'
  }
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
          <p dangerouslySetInnerHTML={{ __html: mission }}></p>
      </Section>
      <Section>
        <Lined><H1>Zarząd fundacji</H1></Lined>
          <p dangerouslySetInnerHTML={{ __html: managment }}></p>
          <PersonSectionRight>
            <span dangerouslySetInnerHTML={{ __html: barbara }}></span>
            <StaticImage src="../../images/barbara.webp" alt="Barbara" placeholder="blurred" />
          </PersonSectionRight>
          <PersonSectionLeft>
            <StaticImage src="../../images/vice.webp" alt="Barbara" placeholder="blurred" />  
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
      <StaticImage style={{gridArea: "1/1"}} src="../images/blog.webp" alt="Blog" placeholder="blurred"  />
      <Link aria-label="Blog" style={{gridArea: "1/1", position: 'relative'}} to="/blog/">
        <h1 style={{color: 'white', fontWeight: 500 ,fontFamily: 'playfair', fontSize:'4rem'}}>Jak możesz pomóc?</h1>
      </Link>
    </Section>
  </>
}