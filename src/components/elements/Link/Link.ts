import styled from 'styled-components'

export const Link = styled.a`
  display: block;
  background-color: ${({theme}) => theme.colours.primary};
  padding: 2rem;
  border-radius: ${({theme}) => theme.borderRadius.default};
  text-decoration: none;
  text-align: center;
  color: ${({theme}) => theme.colours.secondary};
  font-size: ${({theme}) => theme.fontSize.lg};
  transition:
    background-color
    ${({theme}) => theme.transition.speed.default}
    ease;

  &:hover {
    background-color: ${({theme}) => theme.colours.secondary};
    color: ${({theme}) => theme.colours.primary};
  }
`

export default Link