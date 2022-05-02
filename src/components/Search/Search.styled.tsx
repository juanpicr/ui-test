import styled from 'styled-components'
import { IconButton } from 'components'

export const SearchInput = styled.input`
  width: 25vw;
  border: 0;
  border-bottom: 2px solid ${props => props.theme.white};
  background-color: transparent;
  border-radius: 0;
  color: ${props => props.theme.white};
  font-family: 'Lato', sans-serif;
  font-size: 1.5rem;
  transition: width .2s ease-in;
  &:focus {
    width: 60vw;
    outline: 0 none;
  }
  @media (min-width: ${props => props.theme.lg}) {
    display: none;
  }
`

export const SearchButton = styled(IconButton)`
  width: 24px;
  height: 24px;
  margin-left: .5rem;
  @media (min-width: ${props => props.theme.lg}) {
    width: 2rem;
    height: 2rem;
  }
`
