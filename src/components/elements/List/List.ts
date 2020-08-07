import styled from 'styled-components'

import { theme } from '../../../theme/Theme'

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    border-bottom: .1rem solid ${theme.colours.iron};
    font-size: ${theme.fontSize.sm};
    font-weight: ${theme.fontWeight.bold};

    &:last-child {
      border-bottom: none;
    }
  }
`

export default List