import React from 'react'
import { Link } from 'react-router-dom'
import { CardContent, CardCustom, Redirect } from './styles'

const Card = (props: {
  imgUrl: string | undefined
  alt?: any
  title: string
  author: string
  page: number
  id: string
}) => (
  <Redirect to={`/search/${props.id}`}>
    <CardCustom>
      <img src={props.imgUrl} alt={props.alt || 'Image'} />
      <CardContent>
        <h1>{props.title}</h1>
        <p>By: {props.author}</p>
        <p>{props.page} pages</p>
      </CardContent>
    </CardCustom>
  </Redirect>
)

export default Card
