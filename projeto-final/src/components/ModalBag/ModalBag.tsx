import { AppBar } from "../AppBar/AppBar";
import { ContainerInfosProdutos, ContainerModalBag, InfosProdutos } from "./style";
import bolsa from '../../assets/img/bolsa.png'
import { ArrowLeft } from "../../assets/Icons/General/ArrowLeft";
import { DefaultCard } from "../CardVerticais/Default/DefaultCard";
import { TextField } from "../TextField/TextField";
import { ButtonPrimary } from "../Buttons/Primary/ButtonPrimary";

export interface ModalBagProps{
  modalBagOn: boolean
  setModalBagOn: React.Dispatch<React.SetStateAction<boolean>>
}



export function ModalBag({modalBagOn, setModalBagOn}: ModalBagProps){


  const handleOnClickBagOff = () => {
    setModalBagOn(false)
  } 

  return(
    <ContainerModalBag modalBagOn={modalBagOn}>
      <div className="modalBag">
        <AppBar
          text="Back"
          iconeEsquerda={<ArrowLeft />}
          variant="Search"
          className="modalBag_titulo"
          onClickIconeEsqueda={handleOnClickBagOff}
        />

        <DefaultCard
          nomeProduto="Prada"
          descricaoProduto="Leather Coach Bag"
          precoProduto="54.69"
          img={bolsa}
          className="card" 
          quantidadeProduto={"1"}        />
        <DefaultCard
          nomeProduto="Prada"
          descricaoProduto="Leather Coach Bag"
          precoProduto="54.69"
          quantidadeProduto="1"
          img={bolsa}
          className="card"
        />

        <ContainerInfosProdutos>
          <InfosProdutos>
            <p>Subtotal:</p>
            <p>$109.38</p>
          </InfosProdutos>
          <InfosProdutos>
            <p>Tax:</p>
            <p>$2.00</p>
          </InfosProdutos>
          <InfosProdutos>
            <h2>Total:</h2>
            <h2>$111.38</h2>
          </InfosProdutos>
        </ContainerInfosProdutos>

        <div className="input_code">
          <TextField />
        </div>

        <div className="buttonModalBag">
          <ButtonPrimary variant="default" text="Place Order" />
        </div>

        <a href="" className="continue">Continue Shopping</a>
      </div>
    </ContainerModalBag>
  )
}