import styled from 'styled-components'
import { IconButton, Links } from 'components'

export const Navbar = styled.nav`
  position: fixed;
  z-index: 2;
  top: 0;
  display: flex;
  width: calc(100vw - 2rem);
  min-height: 10rem;
  justify-content: space-between;
  padding: 0 1rem;
  background: linear-gradient(to bottom, rgba(0, 0, 0, .8) 0%, rgba(0, 0, 0, 0) 80%);
  @media (min-width: ${props => props.theme.lg}) {
    min-height: 22vh;
  }
`

export const NavLinks = styled(Links)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: calc(100vh - 4rem);
  padding: 4rem 0 2rem;
  background-color: ${props => props.theme.darkerBackground};
  transform: translateX(100vw);
  ul {
    display: flex;
    flex-direction: column;
    @media (min-width: ${props => props.theme.lg}) {
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
    }
  }
  li {
    width: 100%;
    margin: 3rem 0;
    font-size: 2rem;
    text-align: center;
    &:last-child {
      order: -1;
      @media (min-width: ${props => props.theme.lg}) {
        order: 0;
      }
    }
    @media (min-width: ${props => props.theme.lg}) {
      width: fit-content;
      margin: 0 1rem 0 0;
      font-size: 1rem;
      font-weight: 300;
      text-align: right;
    }
  }
  a {
    color: ${props => props.theme.white};
    text-decoration: none;
  }
  &:focus-within {
    transform: translateX(0);
  }
  @media (min-width: ${props => props.theme.lg}) {
    position: absolute;
    top: 3rem;
    right: 0;
    left: auto;
    width: 40vw;
    height: auto;
    padding: 0;
    background-color: transparent;
    transform: translateX(0);
  }
`

export const Hamburger = styled(IconButton)`
  position: relative;
  top: 2rem;
  right: 1rem;
  width: 25px;
  height: 20px;
  &:focus + ${NavLinks} {
    transform: translateX(0);
  }
  @media (min-width: ${props => props.theme.lg}) {
    display: none;
  }
`

export const Logo = styled.h1`
  margin: 2.5rem 0 0;
  color: ${props => props.theme.white};
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.5rem;
  @media (min-width: ${props => props.theme.lg}) {
    margin-top: 3rem;
  }
`
