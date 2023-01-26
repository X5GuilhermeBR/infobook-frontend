import styled from 'styled-components'
import background from '../../images/svg/background.svg'

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
