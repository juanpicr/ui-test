import React from 'react'
// Styled
import * as Styled from './Main.styled'

interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <Styled.Main>
      {children}
    </Styled.Main>
  )
}

export default Main
