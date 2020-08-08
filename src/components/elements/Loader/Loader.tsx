import React from 'react'

import {
  Spinner,
  BouncingBallOne,
  BouncingBallTwo,
} from './Loader.style'

const Loader = () => {
  return (
    <Spinner>
      <BouncingBallOne />
      <BouncingBallTwo />
    </Spinner>
  )
}

export default Loader