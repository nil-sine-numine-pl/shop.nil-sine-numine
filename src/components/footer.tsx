import styled from '@emotion/styled'
import Colors from './colors'
import useSiteMetadata from './siteMetadata'
import facebook from '../images/facebook.svg'

const Icon = styled.img({
  width: '2rem',
  height: '2rem', 
  color: 'white'
})

const StyledFooter = styled.footer({
  color: `white`,
  backgroundColor: Colors.primary,
  textAlign: `center`,
  marginTop: `4rem`,
  padding: `2rem`,
})

const FooterLink = styled.a ({
  color: 'white',
  fontSize: '1rem',
})

export const Footer = () => {
  const { facebookUrl, footerFileUrl } = useSiteMetadata()
  return(
    <StyledFooter>
      <a title="facebook" href={facebookUrl} target="_blank" rel="noopener noreferrer">
        <Icon src={facebook} alt="Facebook"/>
      </a><br/>
      <FooterLink title="polityka prywatności" target="_blank" href={footerFileUrl} rel="noopener noreferrer">
        Polityka prywatności
      </FooterLink>
      <p>
        {`Prawa autorskie © ${new Date().getFullYear()}  — Nil sine numine`}
      </p>
    </StyledFooter>
  )}