import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  contatos: Contato[]
}

const initialState: ContatoState = {
  contatos: [
    {
      idContato: 1,
      nomeContato: 'Gabriel Alves',
      numeroCelular: '84991937644'
    },
    {
      idContato: 2,
      nomeContato: 'Lara Maria',
      numeroCelular: '84991563400'
    },
    {
      idContato: 3,
      nomeContato: 'Geraldo Alves',
      numeroCelular: '84991237777'
    },
    {
      idContato: 4,
      nomeContato: 'Vera Medeiros',
      numeroCelular: '84991237777'
    },
    {
      idContato: 5,
      nomeContato: 'Camile Medeiros',
      numeroCelular: '84991237777'
    },
    {
      idContato: 6,
      nomeContato: 'Bruna Alves',
      numeroCelular: '84991237777'
    },
    {
      idContato: 7,
      nomeContato: 'Raiza França',
      numeroCelular: '84991237777'
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Contato>) => {
      const contatoJaExiste = state.contatos.find(
        (contato) => contato.numeroCelular === action.payload.numeroCelular
      )

      if (contatoJaExiste) {
        alert('Ja existe um contato com esse número de celular')
      } else {
        state.contatos.push(action.payload)
      }
    }
  }
})

export const { adicionar } = contatoSlice.actions

export default contatoSlice.reducer
