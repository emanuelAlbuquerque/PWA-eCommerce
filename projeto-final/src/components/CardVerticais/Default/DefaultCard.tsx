import { ButtonOutline } from "../../Buttons/Outline/ButtonOutline";
import { Container } from "./style";
import { CrossSmall } from "../../../assets/Icons/General/CrossSmall";
import { Stepper } from "../../Stepper/Stepper";
import { SetStateAction, useEffect, useState } from "react";

export interface DefaultCardProps{
  img: string
  nomeProduto: string
  descricaoProduto: string
  precoProduto: number
  quantidadeProduto: number
  onClick?: () => void,
  className?: string

  setPrecoTotal?: React.Dispatch<SetStateAction<number>>
  precoTotal?: number

  showStepper?: boolean
  showAmount?: boolean
  showRemoveProduto?: boolean
  showQtd?: boolean
}

export function DefaultCard(
  {
    descricaoProduto, 
    nomeProduto, 
    precoProduto,
    quantidadeProduto,
    img,
    onClick,
    className,
    setPrecoTotal,  
    precoTotal,
    showAmount = true, showQtd = true, showRemoveProduto = true, showStepper = true
  }: DefaultCardProps)
{

  const [count, setCount] = useState(quantidadeProduto)
  const [precoTotalProduto, setPrecoTotalProduto] = useState(precoProduto * count)

  const aumentaPreco = () => {
    setPrecoTotalProduto(precoProduto + precoTotalProduto)
    if (setPrecoTotal && precoTotal){
      setPrecoTotal(precoTotal + precoProduto)
    }
  }

  const diminuiPreco = () => {
    setPrecoTotalProduto(precoTotalProduto - precoProduto)
    if (setPrecoTotal && precoTotal) {
      setPrecoTotal(precoTotal - precoProduto)
    }
  }
  
  return(
    <Container className={className}>
      <img src={img} alt="" />
      <div>
        <div className="name_products">
          <h2>{nomeProduto}</h2>
          {showRemoveProduto &&
            <button onClick={onClick}>
              <CrossSmall />
            </button>
          }
        </div>
        <h3>{descricaoProduto}</h3>
        <div className="qtdPreco">
          {showAmount && 
            <p className="preco"> ${(precoTotalProduto).toFixed(2)}</p>
          }
          {showQtd && 
            <p className="quantidade">Qty - {count}</p>
          }
        </div>
        {showStepper && 
          <Stepper className="contador" 
            count={count} 
            setCount={setCount} 
            aumentaPreco={aumentaPreco} 
            diminuiPreco={diminuiPreco}
          />
        }
      </div>
    </Container>
  )
}