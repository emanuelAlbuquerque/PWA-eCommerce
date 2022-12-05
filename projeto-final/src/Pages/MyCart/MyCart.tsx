import { CardHorizontalDesktop } from "../../components/CardHorizontalDesktop/CardHorizontalDesktop";
import { Header } from "../../components/Header/Header";
import { ContainerInfosProduto, ContainerInputCode, ContainerTable, MainContainer, OrderSumary, PageTitle } from "./style";
import bolsa from '../../assets/img/bolsaMarrom.png'
import { ButtonPrimary } from "../../components/Buttons/Primary/ButtonPrimary";
import { ButtonOutline } from "../../components/Buttons/Outline/ButtonOutline";
import { FiltrosWeb } from "../../components/FiltrosWeb/FiltrosWeb";
import { ChevronUp } from "../../assets/Icons/General/ChevronUp";
import { ChevronBottom } from "../../assets/Icons/General/ChevronBottom";
import { TextField } from "../../components/TextField/TextField";
import { FooterWeb } from "../../components/FooterWeb/FooterWeb";
import { Order } from "../../components/Order/Order";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ModalBag } from "../../components/ModalBag/ModalBag";


export function MyCart() {

  const [modalBagOn, setModalBagOn] = useState(false)
  const navigate = useNavigate()

  return ( 
      <>
        <Header setModalBagOn={setModalBagOn} />

        <PageTitle>
          My Cart
        </PageTitle>

        <MainContainer>
          <ContainerInfosProduto>
            <ContainerTable>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <CardHorizontalDesktop 
                  descricao="ceacs" 
                  name="scd" 
                  preco={12} 
                  subtotal={12} 
                  quantidade={1} 
                  img={bolsa}
                  id="1"
                />
                <CardHorizontalDesktop 
                  descricao="ceacs" 
                  name="scd" 
                  preco={12} 
                  subtotal={12} 
                  quantidade={1} 
                  img={bolsa}
                  id="2"
                />
                <CardHorizontalDesktop 
                  descricao="ceacs" 
                  name="scd" 
                  preco={12} 
                  subtotal={12} 
                  quantidade={1} 
                  img={bolsa}
                  id="3"
                />

              </tbody>
            </ContainerTable>

            <OrderSumary>
                <Order 
                  variant="default"
                  className="OrderItem" 
                  title={"Order Summary"} 
                  subTotal={69.90} 
                  discount={1} 
                  deliveryFee={0} 
                  onClickPlaceOrder={() => navigate('/checkoutPage')}
                />
            </OrderSumary>
          </ContainerInfosProduto>

          <ContainerInputCode>
            <FiltrosWeb 
              text="Apply Coupom Code" 
              iconActive={<ChevronUp />} 
              iconDisabe={<ChevronBottom />} 
              classNameText="ApplyCupom"
            >
              <div className="ContainerInput">
                <TextField />
              </div>
            </FiltrosWeb>
          </ContainerInputCode>
        </MainContainer>

        <FooterWeb />
        <ModalBag modalBagOn={modalBagOn} setModalBagOn={setModalBagOn} />
      </>
    );
}
