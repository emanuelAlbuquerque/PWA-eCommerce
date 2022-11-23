import { ButtonOutline } from "../../Buttons/Outline/ButtonOutline";
import { Container } from "./style";
import { CrossSmall } from "../../../assets/Icons/General/CrossSmall";
import { Stepper } from "../../Stepper/Stepper";

export interface DefaultCardProps{
  img?: string
  nomeProduto: string
  descricaoProduto: string
  precoProduto: string
  quantidadeProduto: string
}

export function DefaultCard(
  {
    descricaoProduto, 
    nomeProduto, 
    precoProduto,
    quantidadeProduto,
    img
  }: DefaultCardProps)
{
  return(
    <Container>
      <img src={img} alt="" />
      <div>
        <div className="name_products">
          <h2>{nomeProduto}</h2>
          <button>
            <CrossSmall />
          </button>
        </div>
        <h3>{descricaoProduto}</h3>
        <div>
          <p className="preco"> ${precoProduto}</p>
          <p className="quantidade">Qty - {quantidadeProduto}</p>
        </div>
        <Stepper className="contador"/>
        <ButtonOutline variant="default" text="Add to Bag" className="button_add"/>
      </div>
    </Container>
  )
}