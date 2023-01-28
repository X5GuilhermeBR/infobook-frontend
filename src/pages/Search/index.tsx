import React, { useContext, useEffect, useState } from 'react'
import { SearchDataContext } from '../../context/searchContext'
import {
  CardContainer,
  Header,
  Redirect,
  Title,
  Wrapper,
  WrapperSuccess,
} from './styles'
import { useNavigate } from 'react-router-dom'
import Card from '../../components/Card'
import { ItemsProps } from '../../context/types'
const Search = () => {
  const { currentValue, currentSearchBy, dataResult } =
    useContext(SearchDataContext)

  const [items, setItems] = useState<ItemsProps[]>([])

  const navigate = useNavigate()

  useEffect(() => {
    if (!currentValue) {
      navigate('/')
    }
  }, [])

  useEffect(() => {
    if (dataResult.totalItems) {
      setItems(dataResult.items)
    }
  }, [dataResult])

  useEffect(() => {
    console.log('items', items)
  }, [items])

  return (
    <>
      {dataResult && dataResult.totalItems == 0 ? (
        <Wrapper>
          <Title>{`sorry, we couldn't find any results for your search :(`}</Title>
          <Redirect to="/">try again</Redirect>
        </Wrapper>
      ) : (
        <WrapperSuccess>
          <Header>
            <Title>{`result to "${currentValue}" for "${currentSearchBy}"`}</Title>
          </Header>
          <CardContainer>
            {items.map((item, i) => (
              <Card
                key={i}
                title={item.volumeInfo.title}
                author={item.volumeInfo.authors}
                page={item.volumeInfo.pageCount}
                imgUrl={
                  item.volumeInfo.imageLinks
                    ? item.volumeInfo.imageLinks.thumbnail
                    : undefined
                }
              ></Card>
            ))}
          </CardContainer>
        </WrapperSuccess>
      )}
    </>
  )
}

export default Search
