import styled from "@emotion/styled"
import Colors from '../components/colors'

export const Button = styled.button({
    backgroundColor: Colors.primary,
    border: 'none',
    textDecoration: 'none',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    padding: '.6rem',
    color: 'white',
    cursor: 'pointer',
    marginTop: 'auto',
    width: '100%'
})