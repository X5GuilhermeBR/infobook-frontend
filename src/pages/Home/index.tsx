import React from 'react'
import { ContainerSearch, Title, Wrapper } from './styles'
import { Col, Form, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/esm/Container'

const Home = () => {
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
                <option>Title</option>
                <option>Author</option>
                <option>Publisher</option>
                <option>Subject</option>
                <option>ISBN</option>
                <option>LCCN</option>
                <option>OCLC</option>
              </Form.Select>
            </Col>
          </Row>
        </Form>
      </ContainerSearch>
    </Wrapper>
  )
}

export default Home
