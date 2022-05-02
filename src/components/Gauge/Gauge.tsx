import React from 'react'
// styled
import * as Styled from './Gauge.styled'
const thumbsUp = require('../../assets/img/thumbs-up.svg').default as string
const thumbsDown = require('../../assets/img/thumbs-down.svg').default as string

interface GaugeProps {
  positive: number
  negative: number
}

const Gauge = ({ positive, negative }:GaugeProps) => {
  return (
    <Styled.Gauge>
      <Styled.Left value={positive}>
        <span><img src={thumbsUp} alt="thumbs up"/> {positive}%</span>
      </Styled.Left>
      <Styled.Right value={negative}>
       <span><img src={thumbsDown} alt="thumbs down"/> {negative}%</span>
      </Styled.Right>
    </Styled.Gauge>
  )
}

export default Gauge
