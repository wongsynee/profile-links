import styled from 'styled-components'

import { theme } from '../../../theme/Theme'

export const Button = styled.button`
  display: block;
  background-color: ${theme.colours.shamrock};
  padding: 2rem;
  border-radius: ${theme.borderRadius.default};
  text-align: center;
  color: ${theme.colours.fiord};
  font-size: ${theme.fontSize.lg};
  width: 100%;
  border: none;
  cursor: pointer;
  transition:
    background-color
    ${theme.transition.speed.default}
    ease;

  &:hover {
    background-color: ${theme.colours.fiord};
    color: ${theme.colours.shamrock};
  }
`

export default Button