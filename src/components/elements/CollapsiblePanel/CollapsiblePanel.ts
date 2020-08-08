import styled from 'styled-components'

interface HTMLDivElement {
  isPanelCollapsed: boolean;
}

export const Panel = styled.div<HTMLDivElement>`
  background-color: ${({theme}) => theme.colours.porcelain};
  padding: ${({isPanelCollapsed}) => isPanelCollapsed ? '0' : '2rem'} 2rem;
  max-height: ${({isPanelCollapsed}) => isPanelCollapsed ? '0' : '100rem'};
  overflow: hidden;
  transition:
    max-height
    ${({theme}) => theme.transition.speed.default}
    ease,
    padding
    ${({theme}) => theme.transition.speed.default}
    ease-out;
`

export default Panel