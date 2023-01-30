import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import React, { useContext } from 'react'
import { getBooks } from '../../services/request'
import { SearchDataContext } from '../../context/searchContext'
import { useNavigate } from 'react-router-dom'

function NavBar() {
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
    getBooks(currentSearchBy, currentValue).then(response => {
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
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">infobook</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              onChange={evt => updateInputValue(evt)}
              type="search"
              placeholder="Search a book..."
              className="me-2"
              aria-label="Search"
            />
            <Form.Select
              as="select"
              onChange={evt => onChangeOption(evt)}
              value={currentSearchBy}
            >
              {options.map(option => (
                <option value={option}>{option}</option>
              ))}
            </Form.Select>
            <Button onClick={() => findBook()} variant="outline-success">
              Find
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
