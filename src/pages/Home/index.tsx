import React, { useEffect, useState } from 'react'
import {
  ClearButton,
  ContainerButton,
  ContainerSearch,
  FindButton,
  Title,
  Wrapper,
} from './styles'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { getBook } from '../../services/request'

const Home = () => {
  const [currentOption, setCurrentOption] = useState('')
  const [currentValue, setCurrenValue] = useState('')

  const options = [
    'Title',
    'Author',
    'Publisher',
    'Subject',
    'ISBN',
    'LCCN',
    'OCLC',
  ]

  function findBook() {
    const result = getBook('intitle', currentValue)
    console.log('response', result)
  }

  function updateInputValue(
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setCurrenValue(evt.target.value)
  }

  function deleteInputValue() {
    setCurrenValue('')
  }

  return (
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
              />
            </Col>
            <Col xs={2}>
              <Form.Select>
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
            <ClearButton onClick={() => deleteInputValue()}>
              Clear 💣
            </ClearButton>
          </Col>
        </ContainerButton>
      </ContainerSearch>
    </Wrapper>
  )
}

export default Home
