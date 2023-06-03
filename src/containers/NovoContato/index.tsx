import { FormEvent, useState } from 'react'
import { IoMdContact } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import variaveis from '../../styles/variaveis'
import { adicionar } from '../../store/reducers/contatos'
import Contato from '../../models/Contato'

const NovoContato = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')

  const cadastrarNumero = (e: FormEvent) => {
    e.preventDefault()

    const contatoParaAdicionar = new Contato(9, nome, numero)

    dispatch(adicionar(contatoParaAdicionar))
    navigate('/')
  }

  return (
    <S.ContainerNovoContato>
      <form onSubmit={cadastrarNumero}>
        <S.Titulo>Adicionar novo contato</S.Titulo>
        <IoMdContact
          style={{
            color: `${variaveis.azul}`,
            height: '150px',
            width: '150px',
            marginLeft: '115px'
          }}
        />
        <S.ContainerInputs>
          <S.Label htmlFor="nome">Nome:</S.Label>
          <S.Input
            type="text"
            id="nome"
            autoComplete="off"
            value={nome}
            onChange={({ target }) => setNome(target.value)}
          />
          <S.Label htmlFor="numero">Numero:</S.Label>
          <S.Input
            type="text"
            id="numero"
            autoComplete="off"
            value={numero}
            onChange={({ target }) => setNumero(target.value)}
          />
        </S.ContainerInputs>
        <S.Botao type="submit">Adicionar</S.Botao>
      </form>
    </S.ContainerNovoContato>
  )
}

export default NovoContato
