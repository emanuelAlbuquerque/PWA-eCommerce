import { ButtonOutline } from "../../Buttons/Outline/ButtonOutline"
import { Container } from "./style"

export interface DefaultCardMobileProps{
  id: string
  img: string
  nomeProduto: string
  descricaoProduto: string
  precoTotalProduto: number
}

export function DefaultCardMobile({ id, img, nomeProduto, precoTotalProduto, descricaoProduto }: DefaultCardMobileProps){
  return(
    <Container id={id}>
      <img src={img} alt="" />
      <div>
        <h2>{nomeProduto}</h2>
        <h3>{descricaoProduto}</h3>
        <p className="preco"> ${(precoTotalProduto).toFixed(2)}</p>
        <p className="quantidade">Qty - 1</p>
        <ButtonOutline variant="default" text="Add to Bag" className="button_add" />
      </div>
    </Container>
  )
}