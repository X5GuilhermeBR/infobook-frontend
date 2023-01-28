import React from 'react'
import { CardContent, CardCustom } from './styles'

const Card = (props: {
  imgUrl: string | undefined
  alt?: any
  title: string
  author: string[]
  page: number
}) => (
  <CardCustom>
    <img src={props.imgUrl} alt={props.alt || 'Image'} />
    <CardContent>
      <h1>{props.title}</h1>
      <p>By: {props.author[0]}</p>
      <p>{props.page} pages</p>
    </CardContent>
  </CardCustom>
)

export default Card
