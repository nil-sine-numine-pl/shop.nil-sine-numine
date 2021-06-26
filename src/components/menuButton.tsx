import styled from '@emotion/styled'
import Colors from './colors'

const Menu = styled.div({
  '@media (orientation: landscape)': {display: `none`},
  marginTop: '.5rem',
  marginRight: '.5rem',
  float: 'right',
  width:'2rem', 
  height: '2rem',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all .5s ease-in-out',
})

const Hamburger = styled.div({
    width: '1.5rem',
    height: `.1rem`,
    position:'relative',
    backgroundColor: Colors.green,
    '&::after, &::before': {
      content: '""',
      position: 'absolute',
      left: '0',
      width: '1.5rem',
      height: `.1rem`,
      backgroundColor: Colors.green,
    },
    '&::after': {transform: 'translateY(-0.5rem)'},
    '&::before': {transform: 'translateY(0.5rem)'},
    '.open': {
      transform: 'translateX(-2rem)',
      background:'transaprent',
    }
  })

  type Props = {
    onClick: () => void,
  }

  export const MenuButton = (props: Props) => <Menu onClick={props.onClick}><Hamburger></Hamburger></Menu>
