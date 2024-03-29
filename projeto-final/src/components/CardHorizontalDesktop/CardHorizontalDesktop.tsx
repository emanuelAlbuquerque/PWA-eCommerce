import { DefaultCard } from "../CardVerticais/Default/DefaultCard";
import { modalBagItensProps } from "../ModalBag/ModalBag";
import { ContainerTr } from "./style";

export interface CardHorizontalDesktopProps{
  id: string
  name: string;
  descricao: string;
  quantidade: number;
  preco: number
  subtotal: number
  img: string
  onClickMoveItem?: () => void
  onClickRemoveItem?: () => void
  setItens?: React.Dispatch<React.SetStateAction<modalBagItensProps[]>>
}

export function CardHorizontalDesktop(
  {
    id,
    descricao, 
    img, 
    name, 
    preco, 
    quantidade, 
    subtotal, 
    onClickMoveItem,
    onClickRemoveItem,
    setItens
  }: CardHorizontalDesktopProps){

    const handleClickMoveItem = () => {
      if(onClickMoveItem){
        onClickMoveItem()
      }
    }
    const handleClickRemoveItem = () => {
      if (onClickRemoveItem){
        onClickRemoveItem()
      }
    }
    

  return(
    <ContainerTr id={id}>
      <td className="infosProduto" >
        <DefaultCard 
          img={img}
          nomeProduto={name}
          descricaoProduto={descricao}
          quantidadeProduto={quantidade}
          precoProduto={preco}
          showStepper={false}
          showAmount={false}
          showRemoveProduto={false}
        />
      </td>
      <td className="precoProduto">
        <div>
          <p>
            ${(preco).toFixed(2)}
          </p>
          <button className="moveItem" onClick={handleClickMoveItem}>
            Move to Wishlist
          </button>
        </div>
      </td>
      <td className="qtdProduto">
        <div>
          <p>
            {quantidade}
          </p>
          <button className="removeItem" onClick={handleClickRemoveItem}>
            Remove
          </button>
        </div>
      </td>
      <td className="subTotalProduto">
        <div>
          <p>
            ${(subtotal).toFixed(2)}
          </p>
        </div>
      </td>
    </ContainerTr>
  )
}