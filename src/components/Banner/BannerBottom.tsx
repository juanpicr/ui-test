import React from 'react'
// Styled
import * as Styled from './Banner.styled'
// Assets
import bgPeople from 'assets/img/bg-people.png'
import bgPeople2x from 'assets/img/bg-people.@2x.png'

const BannerBottom = () => {
  return (
    <Styled.BannerBottom role="doc-tip" aria-label="Submit a name">
      <Styled.Background
        srcSet={`${bgPeople} 750w, ${bgPeople2x} 1440w`}
        sizes="(min-width: 750px) 1440px, 100vw"
        className="banner__background"
        src={bgPeople}
        alt=""
        role="none"
      />
      <Styled.BannerLeft>
        <Styled.Heading>Is there anyone else you would want us to add?</Styled.Heading>
      </Styled.BannerLeft>
      <Styled.BannerRight>
        <Styled.CTA>Submit a name</Styled.CTA>
      </Styled.BannerRight>
    </Styled.BannerBottom>
  )
}

export default BannerBottom
