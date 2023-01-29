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
  color: ${COLORS.secondary};
  font-family: 'Inconsolata', monospace;
`

export const Header = styled.div`
  margin-left: 5%;
  margin-top: 6%;
`

export const CardContainer = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  padding: 1rem;
  overflow-x: auto;
  position: relative;

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  & {
    scrollbar-width: thin;
    scrollbar-color: #fca311 transparent;
  }

  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    height: 5px;
    scrollbar-width: thin;
    scrollbar-color: #fca311 transparent;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fca311;
    border-radius: 14px;
    border: 0px none transparent;
  }
`
