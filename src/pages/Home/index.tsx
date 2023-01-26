import React from 'react'
import { Title, Wrapper } from './styles'
import logo from '../../images/japinha.jpg' // with import
import TextField from '@mui/material/TextField'

const Home = () => {
  return (
    <Wrapper>
      <Title>
        <h1>infobook!</h1>
        <TextField
          id="outlined-basic"
          label="Search a book"
          variant="outlined"
        />
      </Title>
    </Wrapper>
  )
}

export default Home
