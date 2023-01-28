import React, { useState, useContext } from 'react'
import {
  ClearButton,
  ContainerButton,
  ContainerSearch,
  FindButton,
  Title,
  Wrapper,
} from './styles'
import { Toast, Col, Form, Row } from 'react-bootstrap'
import { getBook } from '../../services/request'
import { SearchDataContext } from '../../context/searchContext'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const {
    currentValue,
    setCurrentValue,
    currentSearchBy,
    setCurrentSearchBy,
    setDataResult,
  } = useContext(SearchDataContext)
  const navigate = useNavigate()

  const options = [
    'Title',
    'Author',
    'Publisher',
    'Subject',
    'ISBN',
    'LCCN',
    'OCLC',
  ]

  function onChangeOption(evt: React.ChangeEvent<HTMLSelectElement>) {
    setCurrentSearchBy(evt.target.value)
  }

  function findBook() {
    getBook(currentSearchBy, currentValue).then(response => {
      setDataResult(response.data)
      navigate('/search')
    })
  }

  function updateInputValue(
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setCurrentValue(evt.target.value)
  }

  function clearSearch() {
    setCurrentValue('')
    setCurrentSearchBy('Title')
  }

  return (
    <>
      <Wrapper>
        <ContainerSearch>
          <Title>infobook!📚</Title>

          <Form>
            <Row>
              <Col>
                <Form.Control
                  onChange={evt => updateInputValue(evt)}
                  type="text"
                  placeholder="Search a book"
                  value={currentValue}
                />
              </Col>
              <Col xs={2}>
                <Form.Select
                  as="select"
                  onChange={evt => onChangeOption(evt)}
                  value={currentSearchBy}
                >
                  {options.map(option => (
                    <option value={option}>{option}</option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
          </Form>
          <ContainerButton>
            <Col>
              <FindButton onClick={() => findBook()}>Find 🔎</FindButton>
              <ClearButton onClick={() => clearSearch()}>Clear 💣</ClearButton>
            </Col>
          </ContainerButton>
        </ContainerSearch>
      </Wrapper>
    </>
  )
}

export default Home
