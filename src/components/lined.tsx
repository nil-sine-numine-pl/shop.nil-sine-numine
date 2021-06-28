import styled from '@emotion/styled'

export const H1 = styled.h1({
    margin: '0rem 2rem 0rem 2rem', 
    fontFamily:'playfair', 
    fontWeight: 'normal',
    fontSize:'2rem'
})

const HeaderContainer = styled.div({
    display: 'flex',
    alignItems: 'stretch',
    marginLeft: '1rem',
    marginRight: '1rem'
})

const Line = styled.span({
    flexGrow: 1,
    position: 'relative',
    '::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '0',
        right: '0',
        borderTop: '1px solid black',
    }
})

export const Lined = (props) => 
<HeaderContainer>
    <Line/> {props.children} <Line/>
</HeaderContainer>