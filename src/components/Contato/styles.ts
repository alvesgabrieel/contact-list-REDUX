import styled from 'styled-components'

import variaveis from '../../styles/variaveis'

export const Link = styled.a`
  display: flex;
  align-items: center;
  width: 500px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.07);
    border-radius: 10px;
    cursor: pointer;
  }

  p {
    margin-left: 150px;
  }
`
export const InfoContato = styled.div``

export const Botao = styled.button`
  background-color: ${variaveis.azul};
  border-radius: 4px;
  border: transparent;
  margin-left: 8px;
  padding: 8px;
  color: #fff;

  &:hover {
    background-color: ${variaveis.azulEscuro};
    cursor: pointer;
  }
`

export const ContainerBotoes = styled.div`
  margin-left: 40px;

  ${Botao}:nth-child(2) {
    background-color: ${variaveis.vermelho};

    &:hover {
      background-color: ${variaveis.vermelhoEscuro};
    }
  }
`

export const ContainerNumero = styled.div`
  margin-left: -10px;
`
