import React from 'react'
// styled
import * as Styled from './Search.styled'

// assets
const search = require('assets/img/search.svg').default as string

const Search = () => {
  return (
    <form>
      <Styled.SearchInput aria-label="search" type="text" />
      <Styled.SearchButton type="submit"><img src={search} alt="search"/></Styled.SearchButton>
    </form>
  )
}

export default Search
