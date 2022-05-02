import React from 'react'

// Styled
import * as Styled from './MaxCentered.styled'

interface MaxCenteredProps {
  children: React.ReactNode
}

const MaxCentered = ({ children }:MaxCenteredProps) => {
  return (
    <Styled.MaxCentered>
      {children}
    </Styled.MaxCentered>
  )
}

export default MaxCentered
