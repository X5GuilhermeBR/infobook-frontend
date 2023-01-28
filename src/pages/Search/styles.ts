import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import background from '../../images/svg/background.svg'
import { COLORS } from '../../styles/colors'

export const Wrapper = styled.section`
  background: #14213a;
  align-items: center;
  display: flex;
  justify-content: center;
  background-image: url(${background});
  min-height: 100%;
  width: 100%;
  position: fixed;
  flex-direction: column;
`

export const WrapperSuccess = styled.section`
  background: #14213a;
  background-image: url(${background});
  min-height: 100%;
  width: 100%;
  position: fixed;
  flex-direction: column;
`

export const Redirect = styled(Link)`
  font-family: 'Inconsolata', monospace;
  text-decoration: none;
  background-color: ${COLORS.base};
  color: ${COLORS.primary};
  padding: 5px;
  font-weight: bold;

  &:hover {
    color: ${COLORS.secondary};
  }
`
export const Title = styled.h1`
  font-size: 36px;
  color: ${COLORS.primary};
  font-family: 'Inconsolata', monospace;
`

export const Header = styled.div`
  margin-left: 5%;
  margin-top: 6%;
`
