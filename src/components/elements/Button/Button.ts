import styled from 'styled-components'

export const Button = styled.button`
  display: block;
  background-color: ${({theme}) => theme.colours.primary};
  padding: 2rem;
  border-radius: ${({theme}) => theme.borderRadius.default};
  text-align: center;
  color: ${({theme}) => theme.colours.secondary};
  font-size: ${({theme}) => theme.fontSize.lg};
  width: 100%;
  border: none;
  cursor: pointer;
  transition:
    background-color
    ${({theme}) => theme.transition.speed.default}
    ease;

  &:hover {
    background-color: ${({theme}) => theme.colours.secondary};
    color: ${({theme}) => theme.colours.primary};
  }
`

export default Button