import { Container } from './style'

export interface CardOrderProps{
  img: string
  idProduto: string
  nameProduto: string
  descricaoProduto: string

  className?: string
}

export function CardOrder({ descricaoProduto, idProduto, img, nameProduto, className}: CardOrderProps){
  return(
    <Container className={className}>
      <img src={img} alt="Imagem do produto" />
      <div>
        <h2>{idProduto} Dec</h2>
        <p>{nameProduto}</p>
        <p>{descricaoProduto}</p>
      </div>
    </Container>
  )
}