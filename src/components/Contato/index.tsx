import { IoMdContact } from 'react-icons/io'

import ContatoClass from '../../models/Contato'
import * as S from './styles'
import variaveis from '../../styles/variaveis'

type Props = ContatoClass

const Contato = ({ nomeContato }: Props) => {
  return (
    <>
      <div>
        <div>
          <S.Link href="#">
            <IoMdContact
              style={{
                color: `${variaveis.azul}`,
                height: '45px',
                width: '45px'
              }}
            />
            <p>{nomeContato}</p>
          </S.Link>
        </div>
      </div>
    </>
  )
}

export default Contato
