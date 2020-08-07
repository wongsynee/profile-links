import styled from 'styled-components'

import { theme } from '../../../theme/Theme'

interface HTMLDivElement {
  isPanelCollapsed: boolean;
}

export const Panel = styled.div<HTMLDivElement>`
  background-color: ${theme.colours.porcelain};
  padding: ${props => props.isPanelCollapsed ? '0' : '2rem'} 2rem;
  max-height: ${props => props.isPanelCollapsed ? '0' : '100rem'};
  overflow: hidden;
  transition:
    max-height
    ${theme.transition.speed.default}
    ease,
    padding
    ${theme.transition.speed.default}
    ease-out;
`

export default Panel