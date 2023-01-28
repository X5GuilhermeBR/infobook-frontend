import styled from 'styled-components'

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
