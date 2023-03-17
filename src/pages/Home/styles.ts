import styled from 'styled-components'
import background from '../../images/svg/background.svg'
import { COLORS } from '../../styles/colors'

export const Wrapper = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  background-image: url(${background});
  min-height: 100%;
  width: 100%;
  position: fixed;
`

export const Wellcome = styled.div`
  padding: 40px;
  width: 80%;
  background-color: ${COLORS.third};
  font-family: 'Inconsolata', monospace;
  font-size: 20px;

  h1 {
    font-size: 32px;
    font-weight: bold;
  }
`
