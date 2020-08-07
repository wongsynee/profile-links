import styled from 'styled-components'

import { theme } from '../../../theme/Theme'

export const Link = styled.a`
  display: block;
  background-color: ${theme.colours.shamrock};
  padding: 2rem;
  border-radius: ${theme.borderRadius.default};
  text-decoration: none;
  text-align: center;
  color: ${theme.colours.fiord};
  font-size: ${theme.fontSize.lg};
  transition:
    background-color
    ${theme.transition.speed.default}
    ease;

  &:hover {
    background-color: ${theme.colours.fiord};
    color: ${theme.colours.shamrock};
  }
`

export default Link