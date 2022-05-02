import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
// constants
import { Theme } from 'constants/theme'

const GlobalStyle = createGlobalStyle<{ theme: Theme}>`
  ${normalize}
  html, body {
    width: 100%;
    margin: 0;
    background-color: ${props => props.theme.white};
    font-family: 'Lato', sans-serif;
    font-size: 12px;
    font-weight: 400;
  }

  body {
    position: relative;
  }

  a, a:visited {
    color: ${props => props.theme.white};
  }

  button {
    font-family: 'Lato', sans-serif;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  @media (min-width: ${props => props.theme.md}) {
    html, body {
      font-size: 14px;
    }
  }
  @media (min-width: ${props => props.theme.lg}) {
    html, body {
      font-size: 18px;
    }
  }
`

export default GlobalStyle
