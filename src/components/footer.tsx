import styled from '@emotion/styled'
import useSiteMetadata from './siteMetadata'
import { StaticImage } from 'gatsby-plugin-image'
import { RawLined as Lined } from './lined'
import { Sizes } from './consts'
import { Link } from 'gatsby'
import kontaktSvg from '../images/kontakt.svg'

const StyledFooter = styled.footer({
  marginTop: '3.5rem',
  paddingTop: `5rem`,
  paddingBottom: '5rem',
  fontSize: '0.875rem',
  backgroundColor: '#f0f0f0',
  fontFamily: 'montserrat-semibold'
})

const FooterGrid = styled.div({
  display: 'grid',
  padding: '1rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', // 'minmax(560px, auto)  minmax(560px, auto)'
  'tr': {
    height: '2rem'
  }
})

export const Footer = () => {
  const { footerFileUrl } = useSiteMetadata()
  return(
    <StyledFooter>
      <section style={{maxWidth: Sizes.pageMaxWidth, margin: 'auto auto auto auto'}}>
        <Lined >
          <StaticImage style={{margin: '0 1rem 1.5rem 1rem'}} src="../images/footer_logo.webp" alt="mail" placeholder="blurred"/>
        </Lined>
        <FooterGrid>
          <table style={{ borderSpacing: '0'}}>
          <tbody>
          <tr>
            <td style={{width:'50%'}}><Link aria-label="O Fundacji" to="/about/">O FUNDACJI</Link ></td>
            <td><Link aria-label="Sklep" to="/shop/">SKLEP</Link></td>
          </tr>
          <tr>
            <td><Link aria-label="Blog" to="/blog/">BLOG</Link></td>
            <td><Link aria-label="Kontakt" to="/contact/">KONTAKT</Link ></td>
          </tr>
          <tr>
            <td><Link aria-label="Pomagaj z nami" to="/">POMAGAJ Z NAMI</Link></td>
            <td><a title="polityka prywatności" target="_blank" href={footerFileUrl} rel="noopener noreferrer">POLITYKA PRYWATNOŚCI</a></td>
          </tr>
          </tbody>
        </table>
        <table>
          <tbody>
          <tr>
            <td style={{width:'50%'}}>FUNDACJA NIL SINE NUMINE</td>
            <td>Numer konta bankowego:</td>
          </tr>
          <tr>
            <td style={{fontFamily:'montserrat', fontSize: '0.85rem'}}>Nowe Miasto 10, 16-080 Tykocin</td>
            <td style={{fontFamily:'montserrat', fontSize: '0.85rem'}}>07 8060 0004 0710 1531 2000 0010</td>
          </tr>
          <tr>
            <td><img src={kontaktSvg}></img></td>
            <td><a title="polityka prywatności" target="_blank" href="/statut.pdf" rel="noopener noreferrer">Statut fundacji</a></td>
          </tr>
        </tbody>
        </table>
      </FooterGrid>
      </section>
    </StyledFooter>
  )}