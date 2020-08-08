import styled from 'styled-components'

export const Chevron = styled.span`
  &::before {
    content: '';
    border-style: solid;
    border-color: ${({theme}) => theme.colours.fiord};
    border-width: .2rem .2rem 0 0;
    display: inline-block;
    height: .7rem;
    position: relative;
    top: .4rem;
    left: 0;
    vertical-align: top;
    width: .7rem;
	  transform: rotate(45deg);
  }
`

export default Chevron