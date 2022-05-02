import React, { ButtonHTMLAttributes } from 'react'
// Styled
import * as Styled from './IconButton.styled'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
  className?: string,
}

const IconButton = ({ children, className, ...props }: IconButtonProps) =>
  <Styled.IconButton className={className} {...props}>{children}</Styled.IconButton>

export default IconButton
