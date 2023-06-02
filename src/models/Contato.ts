class Contato {
  idContato: number
  nomeContato: string
  numeroCelular: number

  constructor(id: number, nome: string, numero: number) {
    this.idContato = id
    this.nomeContato = nome
    this.numeroCelular = numero
  }
}

export default Contato
