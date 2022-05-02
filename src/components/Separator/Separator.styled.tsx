import styled from 'styled-components'

export const Separator = styled.hr`
  border: 0 none;
  border-bottom: 2px dotted ${props => props.theme.darkGray};
  margin: 1.5rem 1rem;
  @media (min-width: ${props => props.theme.lg}) {
    margin: 2rem 0;
  }
`
