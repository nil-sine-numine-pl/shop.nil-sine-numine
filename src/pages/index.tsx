import React from 'react'
import { Lined, H1 } from '../components/lined'
import { StaticImage } from 'gatsby-plugin-image'
import { Page } from '../components/page'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import { Button } from '../components/button'

export default () => 
{
  const pages = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {id: {}, frontmatter: {id: {in: ["index-about", "index-coffee", "index-shop"]}}}, , sort: {order: ASC, fields: frontmatter___id}) {
          nodes {
            html
          }
        }
      }`
  ).allMarkdownRemark.nodes

  const [ shop, coffee, about ] = 
    [ pages[2].html, pages[1].html, pages[0].html ];

  return <>
    <Page style={{textAlign:"center"}}>
        <Lined><H1>O Fundacji</H1></Lined>
          <section dangerouslySetInnerHTML={{ __html: about }}></section>
          <Link to="/about/">
            <Button>WIĘCEJ O FUNDACJI</Button>
          </Link>
        <StaticImage class="image-marginTop" src="../images/foundation.webp" alt="Manufaktura kawy" placeholder="blurred"  />
        <Lined><H1>Manufaktura kawy</H1></Lined>
          <section dangerouslySetInnerHTML={{ __html: coffee }}></section>
        <StaticImage class="image-marginTop" src="../images/coffee_factory.webp" alt="Manufaktura kawy" placeholder="blurred"  />
        <Lined><H1>Sklep</H1></Lined>
        <section dangerouslySetInnerHTML={{ __html: shop }}></section>
        <Link to="/shop/">
            <Button>PRZEJDŹ DO SKLEPU</Button>
        </Link>
    </Page>
    <section style={{display: "grid", placeItems: 'center'}}>
      <StaticImage style={{gridArea: "1/1", marginTop: '3rem', minHeight: '12rem'}} src="../images/blog.webp" alt="Blog" placeholder="blurred"  />
      <Link aria-label="Blog" style={{gridArea: "1/1", position: 'relative'}} to="/blog/">
        <h1 style={{color: 'white', fontFamily: 'playfair', fontWeight: 500, fontSize:'4rem'}}>Czytaj blog</h1>
      </Link>
    </section>
  </>
}