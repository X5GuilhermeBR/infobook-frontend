import React, { useEffect, useState } from 'react'
import { Redirect, Title, Wrapper } from './styles'
import { useParams } from 'react-router-dom'
import { ItemsProps } from '../../context/types'
import { getBookById } from '../../services/request'

const Info = () => {
  const [book, setBook] = useState<ItemsProps>()
  const { id } = useParams()

  useEffect(() => {
    getBookById(id)
      .then(response => {
        console.log('response', response.data)
        setBook(response.data)
      })
      .catch(err => setBook(undefined))
  }, [])

  return (
    <>
      {book === undefined ? (
        <Wrapper>
          <Title>{`sorry, we couldn't find any results for your search :(`}</Title>
          <Redirect to="/">try again</Redirect>
        </Wrapper>
      ) : (
        <h1>deu merda</h1>
      )}
    </>
  )
}

export default Info
