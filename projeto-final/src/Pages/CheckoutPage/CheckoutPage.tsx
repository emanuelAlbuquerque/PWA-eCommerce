import { useState } from "react";
import { ChevronBottom } from "../../assets/Icons/General/ChevronBottom";
import { ChevronUp } from "../../assets/Icons/General/ChevronUp";
import { DefaultCard } from "../../components/CardVerticais/Default/DefaultCard";
import { FiltrosWeb } from "../../components/FiltrosWeb/FiltrosWeb";
import { FormControl } from "../../components/FormControl/FormControl";
import { Header } from "../../components/Header/Header";
import { Order } from "../../components/Order/Order";
import { PageTitle } from "../MyCart/style";
import { ContainerButtons, ContainerInputs, ContainerMethodos, ContainerSummary, Input, Inputs, Main, MethodUPI, Summary } from "./style";
import img from '../../assets/img/bolsaMarrom.png'
import { FooterWeb } from "../../components/FooterWeb/FooterWeb";
import { PaymentMthods } from "../../components/PaymentMthods/PaymentMthods";
import { SelectPayment } from "../../components/SelectPayment/SelectPayment";
import logoUPI from '../../assets/img/logoUPI.png';
import logoAmazon from '../../assets/img/logoAmazon.png';
import logoCard from '../../assets/img/logoCard.png';
import logoApple from '../../assets/img/logoApple.png';
import logoGooglePlay from '../../assets/img/logoGooglePlay.png';
import logoPhonePe from '../../assets/img/logoPhonePe.png';
import logoPaytm from '../../assets/img/logoPaytm.png';
import { ButtonPrimary } from "../../components/Buttons/Primary/ButtonPrimary";
import { ModalBag } from "../../components/ModalBag/ModalBag";

export function CheckoutPage(){

  //Pega os dados do Formulario
  const [name, setName] = useState('')
  const [adress, setAdress] = useState('')
  const [city, setCity] = useState('')
  const [number, setNumber] = useState('')
  const [ddd, setDDD] = useState('')
  const [state, setState] = useState('')
  const [pinCode, setPinCode] = useState('')

  //Pega os valores dos metodos de pagamentos
  const [select, setSelect] = useState('')
  const [selectPaymant, setSelectPaymant] = useState('')


  // Valores dos inputs dentro do input quando clica no playSory...
  const [valueInputGooglePlay, setValueInputGooglePlay] = useState('')
  const [valueInputPhonePe, setValueInputPhonePe] = useState('')
  const [valueInputPaytm, setValueInputPaytm] = useState('')

  // Seleciona o checkBox
  const [isCheckedSelect, setIsCheckedSelect] = useState(false)


  // Seta os estados de active ou não de cada inputs
  const [isCheckedUPI, setIsCheckedUPI] = useState(false)
  const [isCheckedCard, setIsCheckedCard] = useState(false)
  const [isCheckedApple, setIsCheckedApple] = useState(false)
  const [isCheckedAmazon, setIsCheckedAmazon] = useState(false)


  const [isCheckedGooglePay, setIsCheckedGooglePay] = useState(false)
  const [isCheckedPhonePe, setIsCheckedPhonePe] = useState(false)
  const [isCheckedPaytm, setIsCheckedPaytm] = useState(false)

  const [modalBagOn, setModalBagOn] = useState(false)

  const isActive = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    if (e.currentTarget.checked && e.currentTarget.value === 'UPI'){
      setIsCheckedUPI(true)
      setIsCheckedCard(false)
      setIsCheckedApple(false)
      setIsCheckedAmazon(false)
    }
    if (e.currentTarget.checked && e.currentTarget.value === 'cardCredit'){
      setIsCheckedUPI(false)
      setIsCheckedCard(true)
      setIsCheckedApple(false)
      setIsCheckedAmazon(false)
    }
    if (e.currentTarget.checked && e.currentTarget.value === 'Apple'){
      setIsCheckedUPI(false)
      setIsCheckedCard(false)
      setIsCheckedApple(true)
      setIsCheckedAmazon(false)
    }
    if (e.currentTarget.checked && e.currentTarget.value === 'Amazon'){
      setIsCheckedUPI(false)
      setIsCheckedCard(false)
      setIsCheckedApple(false)
      setIsCheckedAmazon(true)
    }
  }

  const isActiveTypePayament = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    if (e.currentTarget.checked && e.currentTarget.value === 'googlePlay'){
      setIsCheckedGooglePay(true)
      setIsCheckedPhonePe(false)
      setIsCheckedPaytm(false)
    }
    if (e.currentTarget.checked && e.currentTarget.value === 'phonePe'){
      setIsCheckedGooglePay(false)
      setIsCheckedPhonePe(true)
      setIsCheckedPaytm(false)
    }
    if (e.currentTarget.checked && e.currentTarget.value === 'paytm'){
      setIsCheckedGooglePay(false)
      setIsCheckedPhonePe(false)
      setIsCheckedPaytm(true)
    }
  }

  return(
    <>
      <Header setModalBagOn={setModalBagOn} />

      <PageTitle>
        Checkout
      </PageTitle>


      <Main>
        <ContainerInputs>
          <FiltrosWeb
            text="Add New Address"
            iconActive={<ChevronUp />}
            iconDisabe={<ChevronBottom />}
            classNameText="NewAdress"
            className="FiltroEndereco"
            active
          >
            <Inputs>
              <div className="inputsLefts">
                <Input>
                  <p>Full Name</p>
                  <FormControl 
                    variant="active" 
                    type="text" 
                    name="name" 
                    placeholder="Full Name" 
                    value={name} 
                    setValue={setName} 
                  />
                </Input>
                <Input>
                  <p>Street Address</p>
                  <FormControl 
                    variant="active" 
                    type="text" 
                    name="adress" 
                    placeholder="Enter Address" 
                    value={adress} 
                    setValue={setAdress} 
                  />
                </Input>
                <Input>
                  <p>Full Name</p>
                  <FormControl 
                    variant="active" 
                    type="text" 
                    name="city" 
                    placeholder="Enter City" 
                    value={city} 
                    setValue={setCity} 
                  />
                </Input>
              </div>

              <div className="inputsRights">
                <Input>
                  <p>Mobile Number</p>
                  <div className="inputNumber">
                    <FormControl 
                      variant="active" 
                      type="text" 
                      name="ddd" 
                      placeholder="+11" 
                      className="inputDDD"
                      value={ddd} 
                      setValue={setDDD} 
                    />
                    <FormControl 
                      variant="active" 
                      type="text" 
                      name="number" 
                      placeholder="Enter Number" 
                      className="inputEnterNumber"
                      value={number} 
                      setValue={setNumber} 
                    />
                  </div>
                </Input>
                <Input>
                  <p>State</p>
                  <FormControl 
                    variant="active" 
                    type="text" 
                    name="state" 
                    placeholder="Enter State" 
                    value={state} 
                    setValue={setState} 
                  />
                </Input>
                <Input>
                  <p>Pin Code</p>
                  <FormControl 
                    variant="active" 
                    type="text" 
                    name="pin" 
                    placeholder="Enter Pin Code" 
                    value={pinCode} 
                    setValue={setPinCode} 
                  />
                </Input>
              </div>
            </Inputs>
          </FiltrosWeb>

          <FiltrosWeb
            text="Payments"
            iconActive={<ChevronUp />}
            iconDisabe={<ChevronBottom />}
            classNameText="NewAdress"
            onClick={() => {
              setIsCheckedUPI(false)
              setIsCheckedCard(false)
              setIsCheckedApple(false)
              setIsCheckedAmazon(false)
            }}
          >  
            <ContainerMethodos>
              <PaymentMthods
                selectRadioBtn={select}
                setSelectRadioBtn={setSelect}
                id="1"
                value="UPI"
                img={logoUPI}
                method="UPI"
                onClick={isActive}
                isChecked={isCheckedUPI}
              />
              <PaymentMthods
                selectRadioBtn={select}
                setSelectRadioBtn={setSelect}
                id="2"
                value="cardCredit"
                img={logoCard}
                method="Credit/Debit Card"
                onClick={isActive}
                isChecked={isCheckedCard}
              />
              <PaymentMthods
                selectRadioBtn={select}
                setSelectRadioBtn={setSelect}
                id="3"
                value="Apple"
                img={logoApple}
                method="Apple Pay"
                onClick={isActive}
                isChecked={isCheckedApple}
              />
              <PaymentMthods
                selectRadioBtn={select}
                setSelectRadioBtn={setSelect}
                id="4"
                value="Amazon"
                img={logoAmazon}
                method="Amazon Pay"
                onClick={isActive}
                isChecked={isCheckedAmazon}
              />
            </ContainerMethodos>
          </FiltrosWeb>

          {isCheckedUPI && 
            <MethodUPI >
              <SelectPayment 
                id="5"
                img={logoGooglePlay}
                selectRadioBtn={selectPaymant}
                setSelectRadioBtn={setSelectPaymant}
                isActive={isCheckedGooglePay}
                onClick={isActiveTypePayament}
                isCheckedInputCheckBox={isCheckedSelect}
                setIsCheckedInputCheckBox={setIsCheckedSelect}
                setValueInputPayamet={setValueInputGooglePlay}
                valueInputPayamet={valueInputGooglePlay}
                value="googlePlay"
                textMethod="Google Play"
                labelSelect="Save this for future transactions"
                nameSelect="saveDados"
                exemplo="Eg: 1234567890@ybl"
                placeholderInput="Enter your UPI Id"
              />
              <SelectPayment 
                id="6"
                img={logoPhonePe}
                selectRadioBtn={selectPaymant}
                setSelectRadioBtn={setSelectPaymant}
                value="phonePe"
                textMethod="Phone Pe"
                onClick={isActiveTypePayament}
                isCheckedInputCheckBox={isCheckedSelect}
                setIsCheckedInputCheckBox={setIsCheckedSelect}
                labelSelect="Save this for future transactions"
                nameSelect="saveDados"
                exemplo="Ola mundo"
                isActive={isCheckedPhonePe}
                setValueInputPayamet={setValueInputPhonePe}
                valueInputPayamet={valueInputPhonePe}
                placeholderInput="Enter your Phone Id"
              />
              <SelectPayment 
                id="7"
                img={logoPaytm}
                selectRadioBtn={selectPaymant}
                setSelectRadioBtn={setSelectPaymant}
                onClick={isActiveTypePayament}
                isCheckedInputCheckBox={isCheckedSelect}
                setIsCheckedInputCheckBox={setIsCheckedSelect}
                setValueInputPayamet={setValueInputPaytm}
                valueInputPayamet={valueInputPaytm}
                isActive={isCheckedPaytm}
                value="paytm"
                textMethod="Paytm"
                labelSelect="Save this for future transactions"
                nameSelect="saveDados"
                exemplo="Ola mundo"
                placeholderInput="Enter your Paytm Id"
              />
            </MethodUPI>
          }

          <ContainerButtons>
            <button className="buttonBanck">Back to Cart</button>
            <div className="buttonPrimary">
              <ButtonPrimary variant="default" text="Next"/>
            </div>
          </ContainerButtons>
        </ContainerInputs>

        <ContainerSummary>
          <Summary>
            <h2 className="title">
              Order Summary
            </h2>

            <div className="products">
              <DefaultCard
                img={img}
                nomeProduto='Coach'
                descricaoProduto='Leather Coach Bag' 
                precoProduto={23.80}
                quantidadeProduto={1}
                showStepper={false}
                showAmount={false}
                showRemoveProduto={false}
              />
              <DefaultCard
                img={img}
                nomeProduto='Coach'
                descricaoProduto='Leather Coach Bag' 
                precoProduto={23.80}
                quantidadeProduto={1}
                showStepper={false}
                showAmount={false}
                showRemoveProduto={false}
              />
              <DefaultCard
                img={img}
                nomeProduto='Coach'
                descricaoProduto='Leather Coach Bag' 
                precoProduto={23.80}
                quantidadeProduto={1}
                showStepper={false}
                showAmount={false}
                showRemoveProduto={false}
              />
            </div>
          </Summary>
          <Order
            className="OrderItem"
            title={"Order Detail"}
            variant={"detail"}
            subTotal={69.90}
            discount={1}
            deliveryFee={0}
          />
        </ContainerSummary>
      </Main>

      <FooterWeb />

      <ModalBag modalBagOn={modalBagOn} setModalBagOn={setModalBagOn} />
    </>
  )
}