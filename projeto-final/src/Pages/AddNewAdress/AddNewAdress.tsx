import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "../../assets/Icons/General/ChevronLeft";
import { AppBar } from "../../components/AppBar/AppBar";
import { ButtonPrimary } from "../../components/Buttons/Primary/ButtonPrimary";
import { CheckBox } from "../../components/Checkboxes/CheckBox";
import { Chips } from "../../components/Chips/Chips";
import { FormControl } from "../../components/FormControl/FormControl";
import { ConcactInnformation, ContainerChips, ContainerInputNumber, DeliveryAddress, Input, InputSelect, Main, Title } from "./style";

export function AddNewAddress(){
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [isActiveChip, setIsActiveChip] = useState(false)
  const [checked, setChecked] = useState(false)

  return(
    <>
      <AppBar text="Add New Address" variant="Search" iconeEsquerda={<ChevronLeft />} onClickIconeEsqueda={() => navigate('/orderSummary')}/>

      <Main>

        <ConcactInnformation>
          <Title>
            Contact Information
          </Title>
          <Input>
            <FormControl
              variant="active"
              type="text"
              name="name"
              placeholder="Full Name"
              value={name}
              setValue={setName}
            />
          </Input>
          <ContainerInputNumber>
            <FormControl
              variant="active"
              type="text"
              name="ddd"
              placeholder="+11"
              className="inputDDD"
              value={name}
              setValue={setName}
            />
            <FormControl
              variant="active"
              type="text"
              name="numero"
              placeholder="Concact Number"
              className="inputNumber"
              value={name}
              setValue={setName}
            />
          </ContainerInputNumber>
        </ConcactInnformation>

        <DeliveryAddress>
          <Title>
            Delivery Address
          </Title>
          <Input>
            <FormControl
              variant="active"
              type="text"
              name="code"
              placeholder="Pin Code"
              value={name}
              setValue={setName}
            />
          </Input>
          <Input>
            <FormControl
              variant="active"
              type="text"
              name="adress"
              placeholder="Street Address"
              value={name}
              setValue={setName}
            />
          </Input>
          <Input>
            <FormControl
              variant="active"
              type="text"
              name="city"
              placeholder="City"
              value={name}
              setValue={setName}
            />
          </Input>
          
          <Input>
            <InputSelect>
              <option value="" selected>State</option>
              <option value="">Pernambuco</option>
              <option value="">São Paulo</option>
              <option value="">Ceará</option>
              <option value="">Salvador</option>
            </InputSelect>
          </Input>
          
          <ContainerChips>
            <Chips text="Home" onClick={() => setIsActiveChip(true)}/>
            <Chips text="Office" onClick={() => setIsActiveChip(true)}/>
            <Chips text="Outher" onClick={() => setIsActiveChip(true)}/>
          </ContainerChips> 
        </DeliveryAddress>

        <CheckBox 
          isChecked={checked}
          setChecked={setChecked}
          name="defaultAdress"
          label="Use as default delivery address."
        />

        <ButtonPrimary 
          variant="default"
          text="Save Address"
          className="buttonSave"
          onClick={() => navigate('/payments')}
        />
      </Main>
    </>
  )
}