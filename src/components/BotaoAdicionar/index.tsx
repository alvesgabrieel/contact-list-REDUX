import { MdAddCircle } from 'react-icons/md'

import variaveis from '../../styles/variaveis'
import * as S from './styles'

const BotaoAdicionar = () => {
  return (
    <S.BotaoAdicionar to="/novoContato">
      <MdAddCircle style={{ color: '#fff', height: '70px', width: '70px' }} />
    </S.BotaoAdicionar>
  )
}

export default BotaoAdicionar
