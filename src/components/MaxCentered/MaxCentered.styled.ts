import styled from 'styled-components'

export const MaxCentered = styled.div`
  display: contents;
  @media (min-width: ${props => props.theme.lg}) {
    position: relative;
    display: block;
    width: 100vw;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    main{
      padding: 0;
    }
    & > * {
      margin-right: 0;
      margin-left: 0;
    }
  }
`
