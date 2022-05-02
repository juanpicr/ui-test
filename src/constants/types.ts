import React from 'react'

export interface Link {
  label: React.ReactNode
  to: string
}

export interface GaugeValue {
  value: number
}

export interface Images {
  [key: string]: {
    '1x': string,
    '2x': string,
  }
}

export interface ListProps {
  displayList: boolean
}

export interface Votes {
  positive: number
  negative: number
}

export interface Person {
  id: number
  name: string,
  description: string,
  category: string,
  picture: string,
  lastUpdated: string,
  votes: Votes
  voted: boolean
}
