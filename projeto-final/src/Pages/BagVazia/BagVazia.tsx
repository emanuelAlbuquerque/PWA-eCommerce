import { CrossSmall } from "../../assets/Icons/General/CrossSmall";
import { AppBar } from "../../components/AppBar/AppBar";
import { Header } from "../../components/Header/Header";
import bagVazia from '../../assets/img/bagVazia.png'
import { Container, Main } from "./style";
import { ButtonPrimary } from "../../components/Buttons/Primary/ButtonPrimary";

export function BagVazia(){
  return(
    <Container>
      <div className="containerCabecalho">
        <AppBar variant="PageTitle" text="My Bag" iconeEsquerda={<CrossSmall />} className="appBar"/>
        <Header />
      </div>

      <Main>
        <div className="containerImg">
          <img src={bagVazia} alt="Imagem da bag vazia" />
          <h1>Uh Oh....!</h1>
          <p>You haven’t added any any items. Start shopping to make your bag bloom</p>
        </div>
        <div className="containerButtons">
          <ButtonPrimary variant="default" text="Continue Shopping" /> 
        </div>
      </Main>
    </Container>
  )
}