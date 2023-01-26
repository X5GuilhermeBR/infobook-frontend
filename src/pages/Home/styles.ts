import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import background from '../../images/svg/background.svg'
import { COLORS } from '../../styles/colors'

export const Wrapper = styled.section`
  padding: 2em;
  background: #14213a;
  align-items: center;
  display: flex;
  justify-content: center;
  background-image: url(${background});
  min-height: 100%;
  width: 100%;
  position: fixed;
`

export const ContainerSearch = styled.div`
  width: 70%;
`

export const Title = styled.h1`
  font-size: 36px;
  color: #fca311;
  font-family: 'Inconsolata', monospace;
`

export const ContainerButton = styled.div`
  margin-top: 15px;

  button {
    margin-right: 7px;
  }

  button:hover {
    transform: scale(1.1);
  }
`

export const FindButton = styled(Button)`
  background-color: ${COLORS.primary};
  border-color: white;
  transition: transform 0.4s ease;

  &:hover {
    background-color: ${COLORS.primary};
    border-color: white;
  }
`

export const ClearButton = styled(Button)`
  background-color: white;
  border-color: ${COLORS.primary};
  color: ${COLORS.primary};
  transition: transform 0.6s ease;

  &:hover {
    background-color: white;
    border-color: ${COLORS.primary};
    color: ${COLORS.primary};
  }
`
