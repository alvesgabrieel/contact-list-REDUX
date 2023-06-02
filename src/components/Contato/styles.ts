import styled from 'styled-components'

export const Link = styled.a`
  display: flex;
  align-items: center;
  width: 500px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.07);
    border-radius: 10px;
  }

  p {
    margin-left: 150px;
  }
`
