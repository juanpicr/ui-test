import styled from 'styled-components'
import { ThumbProps } from 'components/Thumb/Thumb'

export const Thumb = styled.button<ThumbProps>`
  width: 16px;
  height: 16px;
  background-color: ${props => props.isUp ? props.theme.greenPositive : props.theme.yellowNegative};
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: ${props => props.onClick ? 'pointer' : 'default'};;
  border:  ${props => props.isSelected ? '2px solid white' : 'none'};
`
