import React, { useEffect, useState } from 'react'
import { ContainerSearch, Title, Wrapper } from './styles'
import { Col, Form, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/esm/Container'

const Home = () => {
  const [currentOption, setCurrentOption] = useState('')
  const options = [
    'Title',
    'Author',
    'Publisher',
    'Subject',
    'ISBN',
    'LCCN',
    'OCLC',
  ]

  useEffect(() => {
    console.log('current', currentOption)
  }, [currentOption, setCurrentOption])
  return (
    <Wrapper>
      <ContainerSearch>
        <Title>infobook!</Title>
        <Form>
          <Row>
            <Col>
              <Form.Control type="text" placeholder="Search a book" />
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
      </ContainerSearch>
    </Wrapper>
  )
}

export default Home
