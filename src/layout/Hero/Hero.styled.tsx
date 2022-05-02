import styled from 'styled-components'

export const Hero = styled.header`
  position: relative;
  overflow: hidden;
  height: 80vw;
  min-height: 35rem;
  max-height: 38rem;
  margin-bottom: 2rem;
  @media (min-width: ${props => props.theme.md}) {
    max-height: 38rem;
  }
  @media (min-width: ${props => props.theme.lg}) {
    min-height: 700px;
  }
`

export const Background = styled.img`
  position: absolute;
  left: -35vw;
  width: 160vw;
  height: 100%;
  object-fit: cover;
  @media (min-width: ${props => props.theme.md}) {
    top: -6.5rem;
    left: 0;
    width: 110vw;
    height: auto;
  }
  @media (min-width: ${props => props.theme.lg}) {
    top: -2.5rem;
    left: 0;
    width: 100vw;
    height: auto;
  }
`
