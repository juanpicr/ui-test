import React from 'react'
// Styled
import * as Styled from './ClosingGauge.styled'

const ClosingGauge = () => {
  return (
    <Styled.ClosingGauge>
      <Styled.ClosingGaugeLeft>
        <Styled.ClosingGaugeTitle>closing in</Styled.ClosingGaugeTitle>
      </Styled.ClosingGaugeLeft>
      <Styled.ClosingGaugeRight>
        <Styled.ClosingGaugeNumber>22</Styled.ClosingGaugeNumber>
        <Styled.ClosingGaugeDesc>days</Styled.ClosingGaugeDesc>
      </Styled.ClosingGaugeRight>
    </Styled.ClosingGauge>
  )
}

export default ClosingGauge
