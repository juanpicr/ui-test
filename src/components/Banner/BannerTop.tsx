import React from 'react'
// Styled
import * as Styled from './Banner.styled'
// Assets
const closeIcon = require('assets/img/close.svg').default as string

const BannerTop = () => {
  return (
    <Styled.BannerTop role="doc-tip" aria-label="Speak Out">
      <Styled.BannerLeft>
        <Styled.Hairline>Speak out. Be heard.</Styled.Hairline>
        <Styled.Title>Be counted</Styled.Title>
      </Styled.BannerLeft>
      <Styled.BannerRight>
        <Styled.Text>
          Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak
          freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
        </Styled.Text>
      </Styled.BannerRight>
      <Styled.Icon><img src={closeIcon} alt="close"/></Styled.Icon>
    </Styled.BannerTop>
  )
}

export default BannerTop
