import React from 'react'
// components
import { ClosingGauge, FeaturedCard, MaxCentered } from 'components'
// styled
import * as Styled from './Hero.styled'
// assets
const popeFrancis = require('assets/img/pope-francis.png')
const popeFrancis2x = require('assets/img/pope-francis.@2x.png')

const Hero = () => {
  return (
    <Styled.Hero>
      <Styled.Background
        srcSet={`${popeFrancis} 750w, ${popeFrancis2x} 1440w`}
        sizes="(min-width: 750px) 1440px, 100vw"
        src={popeFrancis}
        alt="Pope Francis"
      />
      <MaxCentered>
        <FeaturedCard
          title='Pope Francis?'
          description='He’s talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)'
        />
      </MaxCentered>
      <ClosingGauge />
    </Styled.Hero>
  )
}

export default Hero
