import React from 'react'
import { Lined, H1 } from '../components/lined'
import { StaticImage } from 'gatsby-plugin-image'
import { Page } from '../components/page'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import { Button } from '../components/button'
import styled from '@emotion/styled'

let Break = styled.div({
  marginTop: '1.5rem'
})

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
    [ pages[2].html, pages[1].html, pages[0].html ]

  return <>
    <Page style={{textAlign:"center"}}>
        <Lined><H1>O Fundacji</H1></Lined>
          <section dangerouslySetInnerHTML={{ __html: about }}></section>
          <Link to="/about/">
            <Button>WIĘCEJ O FUNDACJI</Button>
          </Link>
        <Break/>
        <StaticImage src="../images/foundation.webp" alt="Manufaktura kawy" placeholder="blurred"  />
        <Lined><H1>Jak możesz pomóc?</H1></Lined>
<p style={{textAlign:"left"}}>
1. Poprzez zapisanie swojego dziecka na wartościowy obóz letni <b><a target='_blank' href='https://obozydzieciece.pl'>obozydzieciece.pl</a></b><br/>
2. Polecenie swoim znajomym naszych obozów<br/>
3. Zakup naszej kawy-cegiełki <b><a href='/shop/'>#kawaktorapomaga</a></b><br/>
4. Możesz też dokonać bezpośrednio wpłaty z dopiskiem : wpłata na utrzymanie kooperatywy
pracowniczej w Rwandzie.
</p><br/>
<h2><a href='blog/jak-mozesz-pomoc/'>Przeczytaj o naszych projektach</a></h2>
        <Lined><H1>Manufaktura kawy</H1></Lined>
          <section dangerouslySetInnerHTML={{ __html: coffee }}></section>
        <Break/>
        <StaticImage src="../images/coffee_factory.webp" alt="Manufaktura kawy" placeholder="blurred"  />
        <Lined><H1>Sklep</H1></Lined>
        <section dangerouslySetInnerHTML={{ __html: shop }}></section>
        <Link to="/shop/">
            <Button>PRZEJDŹ DO SKLEPU</Button>
        </Link>
    </Page>
    <section style={{display: "grid", placeItems: 'center'}}>
      <StaticImage style={{gridArea: "1/1", marginTop: '3rem', minHeight: '12rem', width: '100%'}} src="../images/blog.webp" alt="Blog" placeholder="blurred"  />
      <Link aria-label="Blog" style={{gridArea: "1/1", position: 'relative'}} to="/blog/">
        <h1 style={{color: 'white', fontFamily: 'playfair', fontWeight: 500, fontSize:'4rem'}}>Czytaj blog</h1>
      </Link>
    </section>
  </>
}