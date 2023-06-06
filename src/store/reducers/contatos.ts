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
      numeroCelular: '(84)99193-7644'
    },
    {
      idContato: 2,
      nomeContato: 'Lara Maria',
      numeroCelular: '(84)99184-3465'
    },
    {
      idContato: 3,
      nomeContato: 'Geraldo Alves',
      numeroCelular: '(84)99172-8675'
    },
    {
      idContato: 4,
      nomeContato: 'Vera Medeiros',
      numeroCelular: '(84)99193-1386'
    },
    {
      idContato: 5,
      nomeContato: 'Camile Medeiros',
      numeroCelular: '(84)99100-0944'
    },
    {
      idContato: 6,
      nomeContato: 'Bruna Alves',
      numeroCelular: '(84)99132-7654'
    },
    {
      idContato: 7,
      nomeContato: 'Raiza França',
      numeroCelular: '(84)99193-4815'
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      //Consigo omitir o id gerado
      const contatoJaExiste = state.contatos.find(
        (contato) => contato.numeroCelular === action.payload.numeroCelular
      )

      if (contatoJaExiste) {
        alert('Ja existe um contato com esse número de celular')
      } else {
        const ultimoContatoDaLista = state.contatos[state.contatos.length - 1]

        const novoContato = {
          ...action.payload,
          idContato: ultimoContatoDaLista
            ? ultimoContatoDaLista.idContato + 1
            : 1
        }

        state.contatos.push(novoContato)
      }
      console.log(state.contatos)
    }
  }
})

export const { adicionar } = contatoSlice.actions

export default contatoSlice.reducer
