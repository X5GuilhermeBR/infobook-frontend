import React, { useState, useContext } from 'react'
import {
  ClearButton,
  ContainerButton,
  ContainerSearch,
  FindButton,
  Title,
  Wrapper,
} from './styles'
import { Toast, Col, Form, Row, Navbar } from 'react-bootstrap'
import { getBooks } from '../../services/request'
import { SearchDataContext } from '../../context/searchContext'
import { useNavigate } from 'react-router-dom'
import NavBar from '../../components/Navbar'

const Home = () => {
  return (
    <>
      <NavBar />
      <Wrapper></Wrapper>
    </>
  )
}

export default Home
