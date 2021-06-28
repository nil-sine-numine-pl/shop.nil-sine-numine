import styled from '@emotion/styled'
import useSiteMetadata from './siteMetadata'
import { StaticImage } from 'gatsby-plugin-image'
import { Lined } from './lined'
import { Sizes } from './consts'
import { Link } from 'gatsby'

const Icon = styled.img({
  width: '2rem',
  height: '2rem', 
  color: 'white'
})

const StyledFooter = styled.footer({
  marginTop: `4rem`,
  padding: '3rem',
  backgroundColor: '#f0f0f0',
  fontFamily: 'montserrat-semibold'
})

export const Footer = () => {
  const { footerFileUrl } = useSiteMetadata()
  return(
    <StyledFooter>
      <section style={{maxWidth: Sizes.pageMaxWidth, margin: 'auto auto auto auto'}}>
        <Lined>
          <StaticImage style={{margin: '0 1rem 1.5rem 1rem'}} src="../images/footer_logo.webp" alt="mail" placeholder="blurred"/>
        </Lined>
        <table style={{width:'100%', borderSpacing: '1rem'}}>
        <tr>
          <td><Link aria-label="O Fundacji" to="/about/">O FUNDACJI</Link ></td>
          <td><Link aria-label="Sklep" to="/shop/">SKLEP</Link></td>
          <td>FUNDACJA NIL SINE NUMINE</td>
          <td>Numer konta bankowego:</td>
        </tr>
        <tr>
          <td><Link aria-label="Blog" to="/blog/">BLOG</Link></td>
          <td><Link aria-label="Kontakt" to="/contact/">KONTAKT</Link ></td>
          <td style={{fontFamily:'montserrat'}}>Nowe Miasto 10, 16-080 Tykocin</td>
          <td style={{fontFamily:'montserrat'}}>00 0000 0000 0000 0000</td>
        </tr>
        <tr>
          <td><Link aria-label="Pomagaj z nami" to="/">POMAGAJ Z NAMI</Link></td>
          <td><a title="polityka prywatności" target="_blank" href={footerFileUrl} rel="noopener noreferrer">Polityka prywatności</a></td>
          <td style={{padding: '2px'}}><StaticImage src="../images/mail.webp" alt="mail" placeholder="blurred"/></td>
          <td><a title="polityka prywatności" target="_blank" href="/statut.pdf" rel="noopener noreferrer">Statut fundacji</a></td>
        </tr>
      </table>
      </section>
    </StyledFooter>
  )}