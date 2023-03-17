import React, { useState, useContext } from 'react'
import { Wellcome, Wrapper } from './styles'
import NavBar from '../../components/Navbar'

const Home = () => {
  return (
    <>
      <NavBar />
      <Wrapper>
        <Wellcome>
          <h1>Welcome to infobook!</h1>
          The infobook is the newest platform to search for books cataloged by
          the "google book" API. Here you can carry out your searches in an easy
          and intuitive way. Learn all about your favorite book.
        </Wellcome>
      </Wrapper>
    </>
  )
}

export default Home
