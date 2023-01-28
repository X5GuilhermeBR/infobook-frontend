import React from 'react'
import { CardCustom } from './styles'

const Card = (props: {
  imgUrl: string | undefined
  alt?: any
  title: string
  content: string
}) => (
  <CardCustom>
    <img src={props.imgUrl} alt={props.alt || 'Image'} />
    <div className="card-content">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  </CardCustom>
)

export default Card
