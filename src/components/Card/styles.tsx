import styled from 'styled-components'
import { COLORS } from '../../styles/colors'

export const CardCustom = styled.div`
  flex: 1 0 250px;
  box-shadow: 0 1px 1rem -4px #000;
  background: #fff;
  margin: 1rem;
  overflow: hidden;
  border-radius: 6px;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  max-width: 230px;

  img {
    width: 250px;
    height: 250px;
    object-fit: center;
  }

  &:hover {
    box-shadow: 0 4px 1rem -4px #000;
    transform: translateY(-3px);
  }
`

export const CardContent = styled.div`
  padding: 5px;

  h1 {
    font-size: 30px;
    color: ${COLORS.secondary};
    font-family: 'Inconsolata', monospace;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    color: ${COLORS.secondary};
    font-family: 'Inconsolata', monospace;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`
