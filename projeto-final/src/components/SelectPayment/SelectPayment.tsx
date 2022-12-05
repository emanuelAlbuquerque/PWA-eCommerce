import { SetStateAction } from "react"
import { CheckBox } from "../Checkboxes/CheckBox"
import { RadioButton } from "../RadioButton/RadioButton"
import { Container, ContainerSelect, InsereDadosPagamentos } from "./style"

export interface SelectPaymentProps{
  img: string
  value: string
  id: string
  textMethod: string

  selectRadioBtn: string
  setSelectRadioBtn: React.Dispatch<SetStateAction<string>>

  onClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void

  isActive: boolean

  isCheckedInputCheckBox: boolean
  setIsCheckedInputCheckBox: React.Dispatch<SetStateAction<boolean>>

  valueInputPayamet: string
  setValueInputPayamet: React.Dispatch<SetStateAction<string>>

  nameSelect: string
  labelSelect: string
  placeholderInput: string
  exemplo?: string
}

export function SelectPayment(
  { 
    id, 
    img, 
    textMethod, 
    value, 
    selectRadioBtn, 
    setSelectRadioBtn, 
    onClick,
    isActive,
    labelSelect,
    isCheckedInputCheckBox, 
    setIsCheckedInputCheckBox, 
    nameSelect, 
    exemplo, 
    setValueInputPayamet, 
    valueInputPayamet,
    placeholderInput
  }: SelectPaymentProps){
  return(
    <Container isActive={isActive}>
      <RadioButton 
        id={id}
        name="selectMethod"
        value={value}
        selectRadioBtn={selectRadioBtn}
        setSelectRadioBtn={setSelectRadioBtn}
        classNameInput="inputRadio"
        className="containerInput"
        onClick={onClick}
        label={
          <ContainerSelectPayment 
            img={img} 
            textMethod={textMethod}
          />
        }
      />

      {isActive &&
        <InsereDadosPagamentos>
          <input 
            type="text" 
            value={valueInputPayamet} 
            onChange={(e) => 
            setValueInputPayamet(e.target.value)}
            className="inputText"
            placeholder={placeholderInput}
          />
          <p>{exemplo}</p>
          <CheckBox
            isChecked={isCheckedInputCheckBox}
            setChecked={setIsCheckedInputCheckBox}
            name={nameSelect}
            label={labelSelect}
          />
        </InsereDadosPagamentos>
      }
    </Container>
  )
}

interface ContainerSelectPaymentProps{
  img: string
  textMethod: string
}

function ContainerSelectPayment({ img, textMethod}: ContainerSelectPaymentProps){
  return(
    <ContainerSelect>
      <div className="selectNome">
        <div>
          <img src={img} alt="" />
        </div>
        <p>{textMethod}</p>
      </div>
    </ContainerSelect>
  )
}