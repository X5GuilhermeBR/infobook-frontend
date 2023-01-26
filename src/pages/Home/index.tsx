import React from 'react'
import { Title, Wrapper } from './styles'
import logo from '../../images/japinha.jpg' // with import

const Home = () => {
  return (
    <Wrapper>
      <Title>
        <img width={'100px'} height={'100px'} src={logo} />
        <h1>infobook!</h1>
      </Title>
    </Wrapper>
  )
}

export default Home
