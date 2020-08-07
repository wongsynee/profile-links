import styled from 'styled-components'

import { theme } from '../../../theme/Theme'

export const IframeWrapper = styled.div`
  margin-bottom: 1.5rem;
`

export const PlatformLink = styled.a`
  display: block;
  text-decoration: none;
  color: ${theme.colours.fiord};
  padding: 1.5rem 2rem 1.5rem 0;
  position: relative;
  display: flex;
  align-items: center;

  > :last-child {
    position: absolute;
    right: 0;
    transition:
      right
      ${theme.transition.speed.default}
      ease;
  }

  &:hover > :last-child {
    right: 1rem;
  }
`

export const Icons = styled.img`
  width: 2.4rem;
  height: auto;
  margin-right: 1.5rem;
`