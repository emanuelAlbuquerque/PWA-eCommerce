import { useState } from 'react'
import { Container, ContainerButtons, ContainerProduct, DetalhesProdutos, NameProdutos, PrecoProdutos, QuantidadeProdutos } from './style'

export interface CardProps{
  img: string
  nameProduct: string
  descriptionProducts: string
  procoTotal?: number
  precoComDesconto: number
  totalDesconsto?: number
}

export function Card(
  {
    descriptionProducts, 
    img, 
    nameProduct, 
    precoComDesconto, 
    procoTotal, 
    totalDesconsto
  }: CardProps)
{
      
  const [qtd, setQtd] = useState('')

  return(
    <Container>
      <ContainerProduct>
        <img src={img} alt="" />
        <DetalhesProdutos>
          <NameProdutos>
            <h1>{nameProduct}</h1>
            <h2>{descriptionProducts}</h2>
          </NameProdutos>
          <QuantidadeProdutos>
            <p>Qtd: </p>
            <select name="quantidade" value={qtd} onChange={(e) => setQtd(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </QuantidadeProdutos>
          <PrecoProdutos>
            <h2>${precoComDesconto}</h2>
            {procoTotal && <h3>${procoTotal}</h3>}
            {totalDesconsto && <p>{totalDesconsto}% OFF</p>}
          </PrecoProdutos>
        </DetalhesProdutos>
      </ContainerProduct>
      <ContainerButtons>
        <button>Move to Wishlist</button>
        <hr />
        <button>Remove</button>
      </ContainerButtons>
    </Container>
  )
}