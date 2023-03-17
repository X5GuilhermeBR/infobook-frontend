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
import NavBar from '../../components/Navbar'
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
      localStorage.setItem(
        'dataResultHistory',
        JSON.stringify(dataResult.items)
      )
    }
  }, [dataResult])

  return (
    <>
      <NavBar />
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
                author={
                  item.volumeInfo.authors
                    ? item.volumeInfo.authors[0]
                    : 'no registry'
                }
                page={item.volumeInfo.pageCount}
                imgUrl={
                  item.volumeInfo.imageLinks
                    ? item.volumeInfo.imageLinks.thumbnail
                    : undefined
                }
                id={item.id}
              ></Card>
            ))}
          </CardContainer>
        </WrapperSuccess>
      )}
    </>
  )
}

export default Search
