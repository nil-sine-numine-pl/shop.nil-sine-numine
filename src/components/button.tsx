import styled from "@emotion/styled"
import { Colors } from '../components/consts'

export const Button = styled.button({
    backgroundColor: Colors.primary,
    border: 'none',
    textDecoration: 'none',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    width: '17.313rem',
    height: '3rem',
    fontSize: '1.063rem',
    padding: '.6rem',
    color: 'white',
    cursor: 'pointer',
    marginTop: 'auto',
    '&:hover': {
        backgroundColor: Colors.primaryDarker,
    },
    '&:disabled': { 
        backgroundColor: '#aaa'
    }
})