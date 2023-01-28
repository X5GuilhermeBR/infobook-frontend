import React, { useContext, useState } from 'react'
import { SearchDataContext } from '../../context/searchContext'
import { Header, Redirect, Title, Wrapper, WrapperSuccess } from './styles'

const Search = () => {
  const { currentValue, currentSearchBy, dataResult } =
    useContext(SearchDataContext)

  return (
    <>
      {dataResult && dataResult.totalItems == 0 ? (
        <Wrapper>
          <Title>{`sorry, we couldn't find any results for your search :(`}</Title>
          <Redirect to="/">try again</Redirect>
          {dataResult.totalItems}
        </Wrapper>
      ) : (
        <WrapperSuccess>
          <Header>
            <Title>{`result to "${currentValue}" for "${currentSearchBy}"`}</Title>
          </Header>
        </WrapperSuccess>
      )}
    </>
  )
}

export default Search
