import React from 'react'
import moment from 'moment'
// Styled
import * as Styled from './Card.styled'
// components
import { CardBackground, Gauge, Thumb } from 'components'
// constants
import { Person } from 'constants/types'

interface CardProps {
  person: Person
  handleVote: (id: number, value: 'positive' | 'negative' | '') => void
}

const Card = ({ person, handleVote }:CardProps) => {
  const { id, name, description, category, picture, lastUpdated, votes, voted } = person
  const [selected, setSelected] = React.useState<'positive' | 'negative' | ''>('')
  const { positive, negative } = votes
  const positivePercentage = (positive / (positive + negative) * 100).toFixed(2)
  const negativePercentage = (negative / (positive + negative) * 100).toFixed(2)
  const handleVoteClick = () => {
    handleVote(id, selected)
    setSelected('')
  }
  return (
    <Styled.Card>
      <CardBackground name={picture} />
      <Styled.Content>
        <Styled.Body>
          <Styled.Header>
            <Styled.Title>
              <Thumb isUp={positive > negative}/>
              <Styled.Name>{name}</Styled.Name>
            </Styled.Title>
            <Styled.Description>{description}</Styled.Description>
          </Styled.Header>
          <Styled.Footer>
            <Styled.Eyebrow>{voted ? 'Thank you for your vote!' : `${moment(lastUpdated).fromNow()} in ${category}`}</Styled.Eyebrow>
            <Styled.Actions>
              {
                !voted && (
                  <>
                    <Thumb isUp={true} isSelected={selected === 'positive'} onClick={() => setSelected('positive')}/>
                    <Thumb isUp={false} isSelected={selected === 'negative'} onClick={() => setSelected('negative')}/>
                  </>
                )
              }
              <Styled.Button disabled={!voted && !selected} onClick={handleVoteClick}>
                {voted ? 'Vote Again' : 'Vote Now'}
              </Styled.Button>
            </Styled.Actions>
          </Styled.Footer>
        </Styled.Body>
        <Gauge positive={Number(positivePercentage)} negative={Number(negativePercentage)} />
      </Styled.Content>
    </Styled.Card>
  )
}

export default Card
