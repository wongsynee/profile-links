import styled from 'styled-components'

import { theme } from '../../../theme/Theme'

const imageSize = '10rem'

export const HeaderWrapper = styled.header`
  background: ${theme.colours.white};
  padding: 3rem 0;
`

export const ImageCircleWrapper = styled.div`
  border-radius: ${theme.borderRadius.circle};
  overflow: hidden;
  width: ${imageSize};
  height: ${imageSize};
  margin: 0 auto;
`

export const Image = styled.img`
  max-width: ${imageSize};
`

export const Name = styled.div`
  text-align: center;
  padding: 1.5rem 0;
`
