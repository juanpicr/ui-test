import React, { useState } from 'react'
// styled
import * as Styled from './Home.styled'
// components
import { Card } from 'components'
// constants
import { data } from 'constants/data'
import { Person } from 'constants/types'

const Home = () => {
  const [list, setList] = useState<Person[]>(JSON.parse(localStorage.getItem('data') || JSON.stringify(data)))
  const [display, setDisplay] = useState<string>('grid')
  const handleVote = (id: number, value: 'positive' | 'negative' | '') => {
    const newList = JSON.parse(JSON.stringify(list))
    const person = newList.find((item:Person) => item.id === id)
    if (value) {
      person.votes[value] += 1
    }
    person.voted = !person.voted
    setList(newList)
    localStorage.setItem('data', JSON.stringify(newList))
  }
  return (
    <section>
      <Styled.Header>
        <Styled.Title>Previous Rulings</Styled.Title>
        <Styled.Dropdown onChange={(e) => setDisplay(e.target.value)} value={display}>
          <option value="grid">Grid</option>
          <option value="list">List</option>
        </Styled.Dropdown>
      </Styled.Header>
      <Styled.List displayList={display === 'list'}>
        {list.map((person, index) => (
          <Card key={index} person={person} handleVote={handleVote}/>
        ))}
      </Styled.List>
    </section>
  )
}

export default Home
