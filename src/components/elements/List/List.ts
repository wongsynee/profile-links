import styled from 'styled-components'

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    border-bottom: .1rem solid ${({theme}) => theme.colours.iron};
    font-size: ${({theme}) => theme.fontSize.sm};
    font-weight: ${({theme}) => theme.fontWeight.bold};
    display: flex;
    align-items: center;

    &:last-child {
      border-bottom: none;
    }
  }
`

export default List