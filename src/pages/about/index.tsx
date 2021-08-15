import React from 'react'
import { Lined, H1 } from '../../components/lined'
import { StaticImage } from 'gatsby-plugin-image'
import { Page } from '../../components/page'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'

let Section = styled.section({
  marginBottom: '5rem'
})

export default () => 
{
  const pages = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {id: {}, frontmatter: {id: {in: ["about-mission", "about-managment", "about-barbara", "about-man"]}}}) {
          nodes {
            html
          }
        }
      }`
  ).allMarkdownRemark.nodes

  const [ mission, managment, man, barbara ] = 
    [ pages[2].html, pages[2].html, pages[1].html, pages[0].html ];

  return <>
    <Page style={{textAlign:"center"}}>
      <Section>
        <Lined><H1>Misja fundacji</H1></Lined>
          <p dangerouslySetInnerHTML={{ __html: mission }}></p>
        {/* <StaticImage src="../images/foundation.webp" alt="Manufaktura kawy" placeholder="blurred"  /> */}
      </Section>
      <Section>
        <Lined><H1>Zarząd fundacji</H1></Lined>
          <p dangerouslySetInnerHTML={{ __html: managment }}></p>
          <p dangerouslySetInnerHTML={{ __html: barbara }}></p>
          <p dangerouslySetInnerHTML={{ __html: man }}></p>
      </Section>
    </Page>
    <Section style={{display: "grid", placeItems: 'center'}}>
      <StaticImage style={{gridArea: "1/1"}} src="../images/blog.webp" alt="Blog" placeholder="blurred"  />
      <Link aria-label="Blog" style={{gridArea: "1/1", position: 'relative'}} to="/blog/">
        <h1 style={{color: 'white', fontFamily: 'playfair', fontSize:'4rem'}}>Jak możesz pomóc?</h1>
      </Link>
    </Section>
  </>
}