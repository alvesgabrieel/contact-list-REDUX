import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import Contato from '../../components/Contato'
import * as S from './styles'

const ListaContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    return contatos.filter(
      (contato) =>
        contato.nomeContato.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <>
      <ul>
        {filtraTarefas().map((itens) => (
          <S.Lista key={itens.idContato}>
            <Contato
              nomeContato={itens.nomeContato}
              idContato={itens.idContato}
              numeroCelular={itens.numeroCelular}
            />
          </S.Lista>
        ))}
      </ul>
    </>
  )
}

export default ListaContatos
