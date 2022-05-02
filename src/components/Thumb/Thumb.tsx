import React from 'react'
// Styled
import * as Styled from './Thumb.styled'
// assets
const thumbsDown = require('assets/img/thumbs-down.svg').default as string
const thumbsUp = require('assets/img/thumbs-up.svg').default as string

export interface ThumbProps extends React.HTMLProps<HTMLButtonElement>{
  isUp: boolean
  isSelected?: boolean
}

const Thumb = ({ isUp, isSelected, onClick }: ThumbProps) => {
  return (
    <Styled.Thumb isUp={isUp} isSelected={isSelected} onClick={onClick}>
      <img src={isUp ? thumbsUp : thumbsDown} alt={ isUp ? 'thumbs up' : 'thumbs down' } />
    </Styled.Thumb>
  )
}

export default Thumb
