import styled from 'styled-components'

const CenteredBlock = styled.div`
  background: ${({theme}) => theme.colours.white};
  max-width: ${({theme}) => theme.spacer.maxWidth};
  min-height: 100vh;
  margin: 0 auto;
`

export default CenteredBlock
