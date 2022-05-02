import styled from 'styled-components'
import { IconButton } from 'components/IconButton/IconButton.styled'
const popeFrancis = require('assets/img/pope-francis.png')

export const FeaturedCard = styled.div`
  position: relative;
  top: 5.5rem;
  left: 1rem;
  overflow: hidden;
  width: 55vw;
  max-height: 25rem;
  @media (min-width: ${props => props.theme.lg}) {
    left: 0;
    width: 50%;
    min-width: 600px;
    max-height: unset;
    margin-top: 2.5rem;
  }
`

export const GlassBackground = styled.div`
  position: absolute;
  top: -20%;
  left: -20%;
  width: 140%;
  height: 140%;
  background: center no-repeat linear-gradient(${props => props.theme.darkBackground}, ${props => props.theme.darkBackground}),
    -25vw 0/160vw no-repeat url(${popeFrancis});
  filter: blur(1rem);
  @media (min-width: ${props => props.theme.md}) {
    background: center no-repeat linear-gradient(${props => props.theme.darkBackground}, ${props => props.theme.darkBackground}),
      7vw -6.5rem/115vw auto no-repeat url(${popeFrancis});
  }
  @media (min-width: ${props => props.theme.lg}) {
    background: center no-repeat linear-gradient(${props => props.theme.darkBackground}, ${props => props.theme.darkBackground}),
      calc(-50vw + 650px) -6rem/105vw auto no-repeat url(${popeFrancis});
  }
`

export const CardContent = styled.div`
  position: relative;
  padding: 1rem;
  color: ${props => props.theme.white};
  @media (min-width: ${props => props.theme.md}) {
    padding: 2rem 1.5rem;
  }
  @media (min-width: ${props => props.theme.lg}) {
    padding: 2rem 1.5rem;
  }
`

export const CardHairline = styled.p`
  margin: 0;
  font-weight: 300;
  white-space: nowrap;
`

export const CardTitle = styled.h2`
  margin: 0;
  font-size: 3rem;
  font-weight: 400;
  line-height: 1;
`

export const CardDesc = styled.p`
  display: -webkit-box;
  overflow: hidden;
  max-height: 10.5rem;
  margin: 1rem 0;
  -webkit-box-orient: vertical;
  font-size: 1.25rem;
  font-weight: 300;
  -webkit-line-clamp: 6;
  text-overflow: ellipsis;
  @media (min-width: ${props => props.theme.lg}) {
    max-width: 85%;
    margin: 2rem 0 1rem;
  }
`

export const CardMoreInfo = styled.p`
  display: none;
  img{
    width: 1.5rem;
    height: 1rem;
    margin-right: .5rem;
  }
  @media (min-width: ${props => props.theme.md}) {
    display: inline-block;
    margin: 0;
    font-weight: 300;
  }
`

export const CardCTA = styled.p`
  font-weight: 700;
  @media (min-width: ${props => props.theme.lg}) {
    margin: 1rem 0 2rem;
    font-size: 1.5rem;
  }
`

export const CardButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -1rem -1rem;
  ${IconButton} {
    width: 50%;
    height: 2.75rem;
    img {
      max-width: 1.25rem;
    }
  }
  @media (min-width: ${props => props.theme.md}) {
    margin: 0 -1.5rem -2rem;
  }
  @media (min-width: ${props => props.theme.lg}) {
    margin: 0 -1.5rem -2rem;
    ${IconButton} {
      height: auto;
      img {
        max-width: 2rem;
        height: 2rem;
        margin: 1.3rem 0;
      }
    }
  }
`
