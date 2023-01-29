import React, { useEffect, useState } from 'react'
import {
  ContainerBook,
  Header,
  InfoBook,
  Redirect,
  Title,
  Wrapper,
  WrapperSuccess,
} from './styles'
import { useParams } from 'react-router-dom'
import { ItemsProps } from '../../context/types'
import { getBookById } from '../../services/request'
import { Markup } from 'interweave'

const Info = () => {
  const [book, setBook] = useState<ItemsProps>()
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    getBookById(id)
      .then(response => {
        setBook(response.data)
        setLoading(false)
      })
      .catch(err => {
        setBook(undefined)
        setLoading(false)
      })
  }, [])

  if (loading === true) {
    return (
      <Wrapper>
        <Title>{`loading...`}</Title>
      </Wrapper>
    )
  } else {
    return (
      <>
        {book === undefined ? (
          <Wrapper>
            <Title>{`sorry, we couldn't find any results for your search :(`}</Title>
            <Redirect to="/">try again</Redirect>
          </Wrapper>
        ) : (
          <WrapperSuccess>
            <ContainerBook>
              <Header>
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={'Image'} />
                <InfoBook>
                  <Title>{book.volumeInfo.title}</Title>
                  <p>
                    Written by {book.volumeInfo.authors[0]} // Published in{' '}
                    {book.volumeInfo.publishedDate}
                  </p>
                  <p>{book.volumeInfo.categories[0]}</p>
                </InfoBook>
              </Header>
              <Markup content={book.volumeInfo.description} />
            </ContainerBook>
          </WrapperSuccess>
        )}
      </>
    )
  }
}

export default Info
