import React, { useState } from 'react'
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

const Home = () => {
  const [currentValue, setCurrenValue] = useState('')
  const [currentSearchBy, setCurrentSearchBy] = useState('Title')
  const [dataResult, setDataResult] = useState('')
  const [toastError, setToastError] = useState(false)

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

  function toggleToastError() {
    setToastError(!toastError)
  }

  function findBook() {
    getBook(currentSearchBy, currentValue).then(response => {
      setDataResult(response.data)
      if (response.data.totalItems == 0) {
        setToastError(true)
      }
      console.log('response', response.data)
    })
  }

  function updateInputValue(
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setCurrenValue(evt.target.value)
  }

  function clearSearch() {
    setCurrenValue('')
    setCurrentSearchBy('Title')
  }

  return (
    <>
      <Wrapper>
        <ContainerSearch>
          <Toast show={toastError} onClose={toggleToastError}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Error</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Nenhum resultado encontrado</Toast.Body>
          </Toast>
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
