import React from 'react'
// Styled
import * as Styled from './FeaturedCard.styled'
// components
import { IconButton } from 'components'
// assets
const wikipedia = require('assets/img/wikipedia.svg').default as string
const thumbsUp = require('assets/img/thumbs-up.svg').default as string
const thumbsDown = require('assets/img/thumbs-down.svg').default as string

interface FeaturedCardProps {
  title: string
  description: string
}

const FeaturedCard = ({ title, description }:FeaturedCardProps) => {
  return (
    <Styled.FeaturedCard>
      <Styled.GlassBackground/>
      <Styled.CardContent>
        <Styled.CardHairline>What&#39;s your opinion on</Styled.CardHairline>
        <Styled.CardTitle>{title}</Styled.CardTitle>
        <Styled.CardDesc>{description}</Styled.CardDesc>
        <Styled.CardMoreInfo>
          <a href="https://wikipedia.com"><img src={wikipedia} alt="wikipedia"/>More information</a>
        </Styled.CardMoreInfo>
        <Styled.CardCTA>What’s Your Verdict?</Styled.CardCTA>
        <Styled.CardButtons>
          <IconButton aria-label="thumbs up"><img src={thumbsUp} alt="thumbs up"/></IconButton>
          <IconButton aria-label="thumbs down"><img src={thumbsDown} alt="thumbs down"/></IconButton>
        </Styled.CardButtons>
      </Styled.CardContent>
    </Styled.FeaturedCard>
  )
}

export default FeaturedCard
