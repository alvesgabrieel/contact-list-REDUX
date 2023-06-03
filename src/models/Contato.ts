class Contato {
  idContato: number
  nomeContato: string
  numeroCelular: string

  constructor(id: number, nome: string, numero: string) {
    this.idContato = id
    this.nomeContato = nome
    this.numeroCelular = numero
  }
}

export default Contato
