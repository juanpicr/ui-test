import React from 'react'
// styled
import * as Styled from './Gauge.styled'
import thumbsUp from '../../assets/img/thumbs-up.svg'
import thumbsDown from '../../assets/img/thumbs-down.svg'

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
