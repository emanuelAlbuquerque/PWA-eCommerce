import { Bag } from "../../../assets/Icons/Navigation/Bag";
import { Hearth } from "../../../assets/Icons/Navigation/Heath";
import { ButtonOutline } from "../../Buttons/Outline/ButtonOutline";
import { Avaliacao, Background, Container, NomeProdutos, PrecoProducts, ProdutosDetalhes } from "./style";
import { useState } from "react";
import { Ratings } from "../../Ratings/Ratings";

export interface CardSmallProps {
  background: string
  buttonOn?: boolean
  descriptionProducts?: string
  nameProduct?: string
  precoComDesconto?: string
  procoTotal?: string
  totalDesconsto?: string
}

export function CardSmall(
  {
    background,
    buttonOn,
    descriptionProducts,
    nameProduct,
    precoComDesconto,
    procoTotal,
    totalDesconsto,
  }: CardSmallProps) {

  const [curtidas, setCurtidas] = useState(false)

  return (
    <Container>
      <Background background={background}>
        
      </Background>
      <ProdutosDetalhes curtidas={curtidas}>
        <NomeProdutos>
          <h1>{nameProduct}</h1>
          <h2>{descriptionProducts}</h2>
        </NomeProdutos>
        <button onClick={() => setCurtidas(!curtidas)}>
          <Hearth className="icon_curtida" />
        </button>
      </ProdutosDetalhes>
      <PrecoProducts>
        <h2>{precoComDesconto}</h2>
        <h3>{procoTotal}</h3>
        <p>{totalDesconsto}</p>
      </PrecoProducts>
    </Container>
  )
}