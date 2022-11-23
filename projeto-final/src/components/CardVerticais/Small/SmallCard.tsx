import { Container } from "./style";

export interface  SmallCardProps {
  img?: string
  nomeProduto: string
  descricaoProduto: string
  precoProduto: string
  quantidadeProduto: string
}

export function SmallCard(
  {
    descricaoProduto,
    nomeProduto,
    precoProduto,
    quantidadeProduto,
    img
  }: SmallCardProps) {
  return (
    <Container>
      <img src={img} alt="" />
      <div>
        <h2>{nomeProduto}</h2>
        <h3>{descricaoProduto}</h3>
        <p className="preco"> ${precoProduto}</p>
        <p className="quantidade">Qty - {quantidadeProduto}</p>
      </div>
    </Container>
  )
}