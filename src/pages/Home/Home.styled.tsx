import styled from 'styled-components'
import { ListProps } from 'constants/types'
import { CardBackground } from 'components/CardBackground/CardBackground.styled'
import {
  Body,
  Card,
  Content,
  Description,
  Footer,
  Name,
  Header as CardHeader,
  Title as CardTitle,
  Eyebrow, Button
} from 'components/Card/Card.styled'
import { Thumb } from 'components/Thumb/Thumb.styled'
import { Gauge } from 'components/Gauge/Gauge.styled'

export const List = styled.div<ListProps>`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  gap: 12px;
  @media (min-width: ${props => props.theme.md}) {
    overflow-x: hidden;
    flex-wrap: wrap;
    gap: 21px;
    flex-direction: ${props => (props.displayList ? 'column' : 'row')};
  }
  ${Card} {
    @media (min-width: ${props => props.theme.md}) {
      flex: 1 1 auto;
      height: ${props => (props.displayList ? '142px' : '351px')};
      width: ${props => (props.displayList ? 'auto' : '351px')};
    }
    @media (min-width: ${props => props.theme.lg}) {
      flex: 1 1 auto;
      height: ${props => (props.displayList ? '170px' : '351px')};
      width: ${props => (props.displayList ? 'auto' : '351px')};
    }
    ${CardBackground} {
      @media (min-width: ${props => props.theme.md}) {
        height: ${props => (props.displayList ? '142px' : '100%')};
        width: ${props => (props.displayList ? 'auto' : '100%')};
      }
      @media (min-width: ${props => props.theme.lg}) {
        height: ${props => (props.displayList ? '170px' : '100%')};
        width: ${props => (props.displayList ? 'auto' : '100%')};
      }
    }
    ${Content} {
      @media (min-width: ${props => props.theme.md}) {
        gap: 7px;
        background: ${props => (props.displayList ? 'linear-gradient(90deg, rgba(0, 0, 0, 0.0001) 0%, #888888 18%, #666666 50%, rgba(51, 51, 51, 0.6) 71.88%)' : '')};
        justify-content: ${props => (props.displayList ? 'space-between' : 'flex-end')};
      }
    }
    ${Body} {
      @media (min-width: ${props => props.theme.md}) {
        flex-direction: ${props => (props.displayList ? 'row' : 'column')};
      }
    }
    ${Footer} {
      @media (min-width: ${props => props.theme.md}) {
        padding-right: ${props => (props.displayList ? '12px' : '34px')};;
      }
    }
    ${CardTitle} {
      @media (min-width: ${props => props.theme.md}) {
        align-items: ${props => (props.displayList ? 'flex-start' : 'flex-end')};
        gap: ${props => (props.displayList ? '0 120px' : '0 1px')};
      }
      @media (min-width: ${props => props.theme.lg}) {
        align-items: ${props => (props.displayList ? 'flex-start' : 'flex-end')};
        gap: ${props => (props.displayList ? '0 213px' : '0 1px')};
      }
    }
    ${Description} {
      @media (min-width: ${props => props.theme.md}) {
        margin-left: ${props => (props.displayList ? '120px' : '')};
      }
      @media (min-width: ${props => props.theme.lg}) {
        margin-left: ${props => (props.displayList ? '225px' : '')};
        font-size: ${props => (props.displayList ? '18px' : '15px')};
        line-height: ${props => (props.displayList ? '22px' : '18px')};
      }
    }
    ${Name} {
      @media (min-width: ${props => props.theme.md}) {
        -webkit-line-clamp: ${props => (props.displayList ? '1' : '2')};
      }
    }
    ${CardHeader} {
      @media (min-width: ${props => props.theme.md}) {
        gap: ${props => (props.displayList ? '18px' : '7px')};
      }
    }
    ${Eyebrow} {
      @media (min-width: ${props => props.theme.lg}) {
        font-size: ${props => (props.displayList ? '15px' : '12px')};
        line-height: ${props => (props.displayList ? '18px' : '15px')};
      }
    }
    ${Button} {
      @media (min-width: ${props => props.theme.lg}) {
        font-size: ${props => (props.displayList ? '18px' : '15px')};
        line-height: ${props => (props.displayList ? '21.6px' : '18px')};
      }
    }
    ${Gauge} {
      span{
        img {
          @media (min-width: ${props => props.theme.lg}) {
            width: ${props => (props.displayList ? '22.5px' : '15px')};
            height: ${props => (props.displayList ? '22.5px' : '15px')};
          }
        }
        @media (min-width: ${props => props.theme.lg}) {
          font-size: ${props => (props.displayList ? '27px' : '18px')};
          line-height: ${props => (props.displayList ? '32px' : '22px')};
        }
      }
    }
    ${Thumb} {
      @media (min-width: ${props => props.theme.lg}) {
        padding: ${props => (props.displayList ? '22.5px' : '15px')};
      }
      img {
        @media (min-width: ${props => props.theme.lg}) {
          width: ${props => (props.displayList ? '24px' : '16px')};
          height: ${props => (props.displayList ? '24px' : '16px')};
        }
      }
    }
  }
`

export const Title = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  color: #464646;
  margin-bottom: 24px;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`

export const Dropdown = styled.select`
  display: none;
  appearance:none;
  border: 2px solid #333333;
  width: 131px;
  height: 28px;
  font-style: normal;
  font-weight: 400;
  font-size: 10.5px;
  line-height: 100%;
  text-align: center;
  color: #333333;
  @media (min-width: ${props => props.theme.md}) {
    display: block;
  }
`
