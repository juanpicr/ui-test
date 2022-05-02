import React from 'react'
// styled
import * as Styled from './CardBackground.styled'
// constants
import { Images } from 'constants/types'
// assets
import kanye from 'assets/img/people/kanye.png'
import kanye2x from 'assets/img/people/kanye@2x.png'
import cristina from 'assets/img/people/cristina.png'
import cristina2x from 'assets/img/people/cristina@2x.png'
import elon from 'assets/img/people/elon.png'
import elon2x from 'assets/img/people/elon@2x.png'
import greta from 'assets/img/people/greta.png'
import greta2x from 'assets/img/people/greta@2x.png'
import malala from 'assets/img/people/malala.png'
import malala2x from 'assets/img/people/malala@2x.png'
import mark from 'assets/img/people/mark.png'
import mark2x from 'assets/img/people/mark@2x.png'

interface CardBackgroundProps {
  name: string
}

const images: Images = {
  kanye: {
    '1x': kanye,
    '2x': kanye2x
  },
  cristina: {
    '1x': cristina,
    '2x': cristina2x
  },
  elon: {
    '1x': elon,
    '2x': elon2x
  },
  greta: {
    '1x': greta,
    '2x': greta2x
  },
  malala: {
    '1x': malala,
    '2x': malala2x
  },
  mark: {
    '1x': mark,
    '2x': mark2x
  }
}

const CardBackground = ({ name }: CardBackgroundProps) => {
  const image = images[name]['1x']
  const image2x = images[name]['2x']
  return (
    <Styled.CardBackground
      srcSet={`${image} 750w, ${image2x} 1440w`}
      sizes="(min-width: 750px) 1440px, 100vw"
      src={image}
      alt={name}
    />
  )
}

export default CardBackground
