export type Produto = {
  _id: string
  nome: string
  descricao: string
  img: string
  preco: number
  precoTotal: number
  desconto: number
  ratings: number
  defaultRatings: number
  quantidadeVendas: number
  cor: string,
  quantidade: number,
  tamanho: string,
  marca: string,
  categoria: {
    _id: string
    nome: string
  }
}