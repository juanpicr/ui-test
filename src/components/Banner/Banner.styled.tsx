import styled from 'styled-components'
import { IconButton } from 'components'

export const Banner = styled.aside`
  position: relative;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin: 1rem;
  background-color: ${props => props.theme.lightGray};
  @media (min-width: ${props => props.theme.lg}) {
    margin: 1rem 0;
  }
`

export const BannerLeft = styled.div``
export const BannerRight = styled.div``

export const BannerTop = styled(Banner)`
  ${BannerLeft} {
    flex-basis: 40%;
    padding-right: 1rem;
    @media (min-width: ${props => props.theme.sm}) {
      flex-basis: 30%;
    }
    @media (min-width: ${props => props.theme.md}) {
      flex-basis: 20%;
    }
  }
  ${BannerRight} {
    flex-basis: 60%;
    @media (min-width: ${props => props.theme.sm}) {
      flex-basis: 70%;
    }
    @media (min-width: ${props => props.theme.md}) {
      flex-basis: 80%;
    }
  }
`

export const BannerBottom = styled(Banner)`
  flex-direction: column;
  padding: 1rem 3rem;
  margin-top: 2rem;
  @media (min-width: ${props => props.theme.md}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 2rem;
  }
  ${BannerRight} {
    width: 100%;
    @media (min-width: ${props => props.theme.md}) {
      width: auto;
    }
  }
`

export const Icon = styled(IconButton)`
  display: none;
  @media (min-width: ${props => props.theme.lg}) {
    display: block;
    margin-left: 2rem;
  }
`

export const Hairline = styled.span`
  color: ${props => props.theme.darkGray};
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: -.07rem;
  @media (min-width: ${props => props.theme.lg}) {
    font-size: 1rem;
  }
`

export const Title = styled.span`
  display: block;
  color: ${props => props.theme.darkGray};
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -.05rem;
  @media (min-width: ${props => props.theme.lg}) {
    font-size: 1.5rem;
    letter-spacing: 0;
  }
`

export const Text = styled.p`
  margin: 0;
  color: ${props => props.theme.darkGray};
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: -.05rem;
  @media (min-width: ${props => props.theme.lg}) {
    font-size: 1rem;
  }
`

export const Heading = styled.h2`
  position: relative;
  margin: 0 0 1rem;
  color: ${props => props.theme.darkGray};
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  @media (min-width: ${props => props.theme.md}) {
    margin-bottom: 0;
    font-size: 1.5rem;
  }
`

export const CTA = styled.button`
  position: relative;
  display: block;
  width: 100%;
  padding: 1rem 0;
  border: 2px solid ${props => props.theme.darkerBackground};
  background: transparent;
  color: ${props => props.theme.darkerGray};
  font-size: 1.5rem;
  @media (min-width: ${props => props.theme.md}) {
    width: 16rem;
  }
  @media (min-width: ${props => props.theme.lg}) {
    width: 20rem;
  }
`

export const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
  opacity: .2;
  pointer-events: none;
  @media (min-width: ${props => props.theme.md}) {
    top: -230%;
  }
`
