import React, { useContext, useState } from 'react'
import { SearchDataContext } from '../../context/searchContext'
import { Redirect, Title, Wrapper } from './styles'

const Search = () => {
  const { dataResult } = useContext(SearchDataContext)

  return (
    <>
      <Wrapper>
        {dataResult && dataResult.totalItems == 0 ? (
          <>
            <Title>{`sorry, we couldn't find any results for your search :(`}</Title>
            <Redirect to="/">try again</Redirect>
          </>
        ) : (
          <h1>tem resultado</h1>
        )}
      </Wrapper>
    </>
  )
}

export default Search
