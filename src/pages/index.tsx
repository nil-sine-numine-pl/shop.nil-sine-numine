import React from 'react'
import { Lined, H1 } from '../components/lined'
import { StaticImage } from 'gatsby-plugin-image'
import { Page } from '../components/page'
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
        allMarkdownRemark(filter: {id: {}, frontmatter: {id: {in: ["index-about", "index-coffee", "index-shop"]}}}) {
          nodes {
            html
          }
        }
      }`
  ).allMarkdownRemark.nodes

  const [ about, coffee, shop ] = 
    [ pages[2].html, pages[1].html, pages[0].html ];

  return <>
    <Page style={{textAlign:"center"}}>
      <Section>
        <Lined><H1>O Fundacji</H1></Lined>
          <p dangerouslySetInnerHTML={{ __html: about }}></p>
        <StaticImage src="../images/foundation.webp" alt="Manufaktura kawy" placeholder="blurred"  />
      </Section>
      <Section>
        <Lined><H1>Manufaktura kawy</H1></Lined>
          <p dangerouslySetInnerHTML={{ __html: coffee }}></p>
        <StaticImage src="../images/coffee_factory.webp" alt="Manufaktura kawy" placeholder="blurred"  />
      </Section>
      <Section>
      <Lined><H1>Sklep</H1></Lined>
        <p dangerouslySetInnerHTML={{ __html: shop }}></p>
      </Section>
    </Page>
    <Section style={{display: "grid", placeItems: 'center'}}>
      <StaticImage style={{gridArea: "1/1"}} src="../images/blog.webp" alt="Blog" placeholder="blurred"  />
      <Link aria-label="Blog" style={{gridArea: "1/1", position: 'relative'}} to="/blog/">
        <h1 style={{color: 'white', fontFamily: 'playfair', fontSize:'4rem'}}>Czytaj blog</h1>
      </Link>
    </Section>
  </>
}