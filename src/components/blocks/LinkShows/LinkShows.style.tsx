import styled, { css } from 'styled-components'

import { theme } from '../../../theme/Theme'

const itemInList = css`
  display: block;
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

export const Link = styled.a`
  text-decoration: none;
  ${itemInList}
`

export const Block = styled.div`
  ${itemInList}
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Date = styled.div`
  font-size: ${theme.fontSize.lg};
  margin-bottom: 1rem;
`

export const Venue = styled.div`
  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight.regular};
`

export const DisclaimerText = styled.span`
  font-size: ${theme.fontSize.xs};
`