import { Cross } from "../../assets/Icons/General/Cross";
import { CrossSmall } from "../../assets/Icons/General/CrossSmall";
import { AppBar } from "../../components/AppBar/AppBar";
import { Card } from "../../components/Card/Card";
import { ContainerItens, ContainerOrderDetails, Main, OrderDetails } from "./style";
import bolsaMarrom from '../../assets/img/bolsaMarrom.png'
import { TextField } from "../../components/TextField/TextField";
import { ButtonDetailed } from "../../components/AssemblyButtons/Detailed/ButtonDetailed";
import { Order } from "../../components/Order/Order";
import { useNavigate } from "react-router-dom";

export function BagMobile(){

  const navigate = useNavigate()

  return(
    <>
      <AppBar variant="PageTitle" text="My Bag" iconeEsquerda={<CrossSmall />}/>

      <Main>
        <ContainerItens>
          <div className="itens">
            <Card 
              descriptionProducts="Leather Coach Bag"
              nameProduct="Coach"
              img={bolsaMarrom}
              precoComDesconto={12.67}
              procoTotal={12.67}
              totalDesconsto={12.00}
            />
            <Card 
              descriptionProducts="Leather Coach Bag"
              nameProduct="Coach"
              img={bolsaMarrom}
              precoComDesconto={12.67}
            />
            <Card 
              descriptionProducts="Leather Coach Bag"
              nameProduct="Coach"
              img={bolsaMarrom}
              precoComDesconto={12.67}
              procoTotal={12.67}
              totalDesconsto={12.00}
            />
          </div>
          <TextField className="inputCode"/>
        </ContainerItens>

        <OrderDetails>
          <ContainerOrderDetails>
            <Order 
              deliveryFee={0}
              discount={0}
              subTotal={0}
              title="Order Detail"
              variant="mobile"
            />
          </ContainerOrderDetails>

          <ButtonDetailed heading="Total Bag Amount" title="$106.29" textButton="Place Order" onClickButton={() => navigate('/orderSummary')}/>
        </OrderDetails>
      </Main>
    </>
  )
}