import React from 'react'
// assets
import popeFrancis from 'assets/img/pope-francis.png'
import popeFrancis2x from 'assets/img/pope-francis.@2x.png'
// components
import { ClosingGauge, FeaturedCard, MaxCentered } from 'components'
// styled
import * as Styled from './Hero.styled'

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
