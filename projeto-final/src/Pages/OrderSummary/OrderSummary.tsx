import { ChevronLeft } from "../../assets/Icons/General/ChevronLeft";
import { Adress } from "../../components/Adress/Adress";
import { AppBar } from "../../components/AppBar/AppBar";
import { CardOrder } from "../../components/CardOrder/CardOrder";
import bolsaMarrom from '../../assets/img/bolsaMarrom.png'
import { Main } from "./style";
import { Order } from "../../components/Order/Order";
import { ButtonPrimary } from "../../components/Buttons/Primary/ButtonPrimary";
import React, { useState } from "react";
import { ModalAdress } from "../../components/ModalAdress/ModalAdress";
import { DadosEnderecos } from "../../components/DadosEnderecos/DadosEnderecos";
import { RadioButton } from "../../components/RadioButton/RadioButton";
import { useNavigate } from "react-router-dom";

export function OrderSummaryPage(){
  const navigate = useNavigate();
  const [selectRadioBtn, setSelectRadioBtn] = useState('')
  const [modalAdressOn, setModalAdressOn] = useState(false)

  const fechaModalAdress = (e: React.MouseEvent<HTMLElement>) => {
    setModalAdressOn(false)
  }

  return(
    <>
      <AppBar 
        variant="Search"
        text="Order Summary"
        iconeEsquerda={<ChevronLeft />}
        onClickIconeEsqueda={() => navigate('/bagMobile')}
      />

      <Main>
        <div className="container">
          <h2 className="title">
            Deliver To
          </h2>
          <Adress
            nameEstado="Pernambuco"
            nomeCidade="Limoeiro"
            nomeRua="José Epfânio"
            numeroCasa={417}
            onClick={() => setModalAdressOn(true)}
          />
        </div>

        <div className="container itens">
          <h2 className="title">
            Expected Delivery
          </h2>
          <CardOrder 
            descricaoProduto="Leather Coach Bag" 
            idProduto="08"
            img={bolsaMarrom}
            nameProduto="Coach" 
            className="item"
          />
          <CardOrder 
            descricaoProduto="Leather Coach Bag" 
            idProduto="08"
            img={bolsaMarrom}
            nameProduto="Coach" 
            className="item"
          />
          <CardOrder 
            descricaoProduto="Leather Coach Bag" 
            idProduto="08"
            img={bolsaMarrom}
            nameProduto="Coach" 
            className="item"
          />
          <CardOrder 
            descricaoProduto="Leather Coach Bag" 
            idProduto="08"
            img={bolsaMarrom}
            nameProduto="Coach" 
            className="item"
          />
        </div>

        <div className="container order">
          <h2 className="title">
            Order Datails
          </h2>
          <Order 
            variant="detail"
            deliveryFee={0}
            discount={0}
            subTotal={0}
          />
          <ButtonPrimary variant="default" text="Proceed to Payments" className="buttonProgress"/>
        </div>

        {modalAdressOn && 
          <ModalAdress onClick={fechaModalAdress} ocClickAddAddress={() => navigate('/addNewAddress')}>
            <RadioButton 
              label={<DadosEnderecos />}
              name="ola"
              value="home"
              id="1"
              className="inputEndereco"
              selectRadioBtn={selectRadioBtn}
              setSelectRadioBtn={setSelectRadioBtn}
              onClick={() => {}}
            />
            <RadioButton 
              label={<DadosEnderecos />}
              name="ola"
              value="home"
              id="1"
              className="inputEndereco"
              selectRadioBtn={selectRadioBtn}
              setSelectRadioBtn={setSelectRadioBtn}
              onClick={() => {}}
            />
            <RadioButton 
              label={<DadosEnderecos />}
              name="ola"
              value="home"
              id="1"
              className="inputEndereco"
              selectRadioBtn={selectRadioBtn}
              setSelectRadioBtn={setSelectRadioBtn}
              onClick={() => {}}
            />
          </ModalAdress>
        }
      </Main>
      


    </>
  )
}