import styled from 'styled-components'
import { GaugeValue } from 'constants/types'

export const Gauge = styled.div`
  display: flex;
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    white-space: nowrap;
    img {
      width: 15px;
      height: 15px;
      margin-right: 2px;
    }
  }
  
`
export const Left = styled.div<GaugeValue>`
  padding: 7px 0 7px 12px;
  flex-basis: ${props => props.value}%;
  background-color: ${props => `${props.theme.greenPositive}99`};
`

export const Right = styled.div<GaugeValue>`
  padding: 7px 12px 7px 0;
  flex-basis: ${props => props.value}%;
  background-color: ${props => `${props.theme.yellowNegative}99`};
  text-align: right;
`
