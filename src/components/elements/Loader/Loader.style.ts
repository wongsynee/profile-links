import styled, { css, keyframes } from 'styled-components'

// Reference: https://tobiasahlin.com/spinkit/
const spinnerSize = '4rem'

const bounceAnimation = keyframes`
  0%,
  100% {
    transform: scale(0.0);
  }

  50% {
    transform: scale(1.0);
  }
`

const bounce = css`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme}) => theme.colours.primary};
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation:
    ${bounceAnimation}
    ${({theme}) => theme.transition.speed.slow}
    infinite
    ease-in-out;
`

export const Spinner = styled.div`
  width: ${spinnerSize};
  height: ${spinnerSize};
  position: relative;
  margin: 0 auto;
`

export const BouncingBallOne = styled.div`
  ${bounce};
`

export const BouncingBallTwo = styled.div`
  ${bounce};
  animation-delay: ${({theme}) => theme.transition.speed.medium};
`
