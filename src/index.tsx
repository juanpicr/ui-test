import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
// styled
import GlobalStyle from './GlobalStyle'

// constants
import theme from 'constants/theme'

// components
import App from './App'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle/>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </>
    </ThemeProvider>
  </StrictMode>
)
