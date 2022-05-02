import styled from 'styled-components'
import { Links } from 'components'

export const Footer = styled.footer`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 0 1rem 3rem;
  @media (min-width: ${props => props.theme.md}) {
    align-items: flex-start;
  }
`

export const FooterLinks = styled(Links)`
  ul{
    @media (min-width: ${props => props.theme.md}) {
      display: flex;
    }
    li{
      padding: .5rem 0;
      font-size: 1.25rem;
      @media (min-width: ${props => props.theme.md}) {
        padding: 0;
        margin-right: 2rem;
        font-size: 1rem;
      }
      a{
        color: ${props => props.theme.darkGray};
        text-decoration: none;
        &:hover{
          color: ${props => props.theme.darkerGray};
          text-decoration: underline;
        }
      }
    }
  }
`

export const FooterSocial = styled(Links)`
  @media (min-width: ${props => props.theme.md}) {
    display: flex;
    align-items: center;
  }
  span{
    color: ${props => props.theme.darkerGray};
    font-size: 1.25rem;
    text-align: right;
    @media (min-width: ${props => props.theme.md}) {
      margin-right: 1rem;
      color: ${props => props.theme.darkGray};
      font-size: 0.833rem;
    }
  }
  & > ul{
    display: flex;
    margin-top: 1rem;
    @media (min-width: ${props => props.theme.md}) {
      margin-top: 3px;
    }
    & > li {
      margin-right: 1rem;
    }
  }
`
