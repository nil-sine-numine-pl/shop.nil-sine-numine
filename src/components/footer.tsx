import styled from '@emotion/styled'
import Colors from './colors'
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

export const Footer = () =>
<StyledFooter>
  <a title="facebook" href="https://www.facebook.com/KurnikPolski/" target="_blank" rel="noopener noreferrer">
    <Icon src={facebook} alt="Facebook"/>
  </a>
  <br/> Prawa autorskie © 2021  — Nil sine numine
</StyledFooter>