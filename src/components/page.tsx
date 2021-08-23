import styled from '@emotion/styled'
import { Sizes } from './consts'

export const Page = styled.div({
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '1rem',
    maxWidth: Sizes.pageMaxWidth,
    marginTop: '-65px', // Reduce image offset (brown coffee grain)
})
