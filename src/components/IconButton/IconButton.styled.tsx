import styled from 'styled-components'

export const IconButton = styled.button`
  padding: 0;
  border: 0;
  background-color: transparent;
  &[aria-label="thumbs up"] {
    background-color: ${props => props.theme.greenPositive}CC;
    &:hover {
      background-color: ${props => props.theme.greenPositive};
    }
  }
  &[aria-label="thumbs down"] {
    background-color: ${props => props.theme.yellowNegative}CC;
    &:hover {
      background-color: ${props => props.theme.yellowNegative};
    }
  }
  & > img {
    width: 100%;
    height: 100%;
  }
`
