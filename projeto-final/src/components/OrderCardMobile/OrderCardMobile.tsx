import { ChevronRight } from "../../assets/Icons/General/ChevronRight";
import { Button, Container, Product } from "./style";

export interface OrderCard{
  date: string
  idProduto: string
  precoProduto: string
}


export function OrderCardMobile({date, idProduto, precoProduto}: OrderCard){
  return(
    <Container>
      <Product>
        <p>{date}</p>
        <h3>#{idProduto}</h3>
        <h3>${precoProduto}</h3>
      </Product>
      <Button>
        <ChevronRight />
      </Button>
    </Container>
  )
}