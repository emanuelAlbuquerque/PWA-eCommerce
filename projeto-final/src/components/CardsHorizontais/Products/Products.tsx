import { Bag } from "../../../assets/Icons/Navigation/Bag";
import { Hearth } from "../../../assets/Icons/Navigation/Heath";
import { ButtonOutline } from "../../Buttons/Outline/ButtonOutline";
import { Avaliacao, Background, Container, NomeProdutos, PrecoProducts, ProdutosDetalhes } from "./style";
import { useState } from "react";
import { Ratings } from "../../Ratings/Ratings";

export interface ProductsProps{
  background: string
  buttonOn?: boolean
  descriptionProducts?: string
  nameProduct?: string
  precoComDesconto?: string
  procoTotal?:string
  totalDesconsto?:string
  ratings?: number | string
  defaultRatings: number
  className?: string
  quantidadeVendas: number
}

export function Products(
  {
    className,
    background, 
    buttonOn, 
    descriptionProducts, 
    nameProduct, 
    precoComDesconto,
    procoTotal, 
    totalDesconsto,
    ratings,
    defaultRatings,
    quantidadeVendas
  }: ProductsProps)
{

  const [curtidas, setCurtidas] = useState(false)

  return(
    <Container className={className}>
      <Background background={background} quantidadeVendas={quantidadeVendas}>
        <div>
          <p>Trending</p>
        </div>
      </Background>
      <ProdutosDetalhes curtidas={curtidas}>
        <NomeProdutos>
          <h1>{nameProduct}</h1>
          <h2>{descriptionProducts}</h2>
        </NomeProdutos>
        <button onClick={() => setCurtidas(!curtidas)}>
          <Hearth className="icon_curtida"/>
        </button>
      </ProdutosDetalhes>
      <Avaliacao>
        <Ratings defaultValue={defaultRatings}/>
        <p>{ratings} Ratings</p>
      </Avaliacao>
      <PrecoProducts>
        <h2>${precoComDesconto}</h2>
        <h3>${procoTotal}</h3>
        <p>{totalDesconsto}% OFF</p>
      </PrecoProducts>

      {buttonOn && 
        <ButtonOutline 
          variant="default" 
          icon={<Bag className="icon_bag"/>} 
          text='Add to bag'
        />
      }

    </Container>
  )
}