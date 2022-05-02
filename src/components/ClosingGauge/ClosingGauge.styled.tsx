import styled from 'styled-components'

export const ClosingGauge = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 3rem;
  background-color: ${props => props.theme.lightBackground};
`

export const ClosingGaugeLeft = styled.div`
  position: relative;
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: flex-end;
  padding: 0 .25rem 0 0;
  background-color: ${props => props.theme.darkBackground};
  color: ${props => props.theme.white};
  font-weight: 300;
  text-transform: uppercase;
  :after {
    position: absolute;
    right: -.5rem;
    display: block;
    width: 0;
    height: 0;
    border-top: 0.25rem solid transparent;
    border-bottom: 0.25rem solid transparent;
    border-left: 0.5rem solid ${props => props.theme.darkBackground};
    content: ' ';
    @media (min-width: ${props => props.theme.lg}) {
      border-top-width: 0.33rem;
      border-bottom-width: 0.33rem;
    }
  }
  @media (min-width: ${props => props.theme.lg}) {
    padding-right: 1rem;
  }
`

export const ClosingGaugeRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 0 0 .75rem;
  @media (min-width: ${props => props.theme.lg}) {
    padding-left: 1rem;
  }
`

export const ClosingGaugeTitle = styled.span`
  @media (min-width: ${props => props.theme.lg}) {
    font-size: 1.25rem;
  }
`

export const ClosingGaugeNumber = styled.span`
  color: ${props => props.theme.darkGray};
  font-size: 1.5rem;
  font-weight: 400;
  @media (min-width: ${props => props.theme.lg}) {
    font-size: 2rem;
  }
`

export const ClosingGaugeDesc = styled.span`
  color: ${props => props.theme.darkGray};
  font-size: 1.5rem;
  font-weight: 300;
  @media (min-width: ${props => props.theme.lg}) {
    font-size: 2rem;
  }
`
