import React from 'react'
// assets
import thumbsDown from 'assets/img/thumbs-down.svg'
import thumbsUp from 'assets/img/thumbs-up.svg'
// Styled
import * as Styled from './Thumb.styled'

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
