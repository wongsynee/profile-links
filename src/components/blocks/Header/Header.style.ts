import styled from 'styled-components'

const imageSize = '10rem'

export const HeaderWrapper = styled.header`
  padding: 0 0 3rem;
`

export const ImageCircleWrapper = styled.div`
  border-radius: ${({theme}) => theme.borderRadius.circle};
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
