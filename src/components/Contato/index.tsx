import { IoMdContact } from 'react-icons/io'

import ContatoClass from '../../models/Contato'
import * as S from './styles'
import variaveis from '../../styles/variaveis'
import { useState } from 'react'

type Props = ContatoClass

const Contato = ({ nomeContato, numeroCelular }: Props) => {
  const [exibirNumero, setExibirNumero] = useState(false)
  const [exibirBotao, setExibirBotao] = useState(false)

  function handleClickBotao() {
    setExibirBotao(!exibirBotao)
  }

  function handleClickNumero() {
    setExibirNumero(!exibirNumero)
    handleClickBotao()
  }

  return (
    <>
      <div>
        <div>
          <S.Link onClick={handleClickNumero}>
            <IoMdContact
              style={{
                color: `${variaveis.azul}`,
                height: '45px',
                width: '45px'
              }}
            />
            <S.InfoContato>
              <p>{nomeContato}</p>
              {exibirNumero && (
                <S.ContainerNumero>
                  <p>{numeroCelular}</p>
                </S.ContainerNumero>
              )}
            </S.InfoContato>
            {exibirBotao && (
              <S.ContainerBotoes>
                <S.Botao>Salvar</S.Botao>
                <S.Botao>Excluir</S.Botao>
              </S.ContainerBotoes>
            )}
          </S.Link>
        </div>
      </div>
    </>
  )
}

export default Contato
