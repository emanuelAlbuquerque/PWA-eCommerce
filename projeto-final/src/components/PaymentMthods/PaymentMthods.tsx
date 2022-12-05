import { SetStateAction } from "react";
import { RadioButton } from "../RadioButton/RadioButton";
import { Container, ContainerInput } from "./style";


export interface PaymentMthodsProps{
  selectRadioBtn: string
  setSelectRadioBtn: React.Dispatch<SetStateAction<string>>

  value: string
  id: string

  img: string
  method: string
  onClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void
  isChecked: boolean
}


export function PaymentMthods({ selectRadioBtn, setSelectRadioBtn,id, value, img, method, onClick, isChecked}: PaymentMthodsProps){
  return(
    <ContainerInput isChecked={isChecked}>
      <RadioButton 
        className="containerInput"
        selectRadioBtn={selectRadioBtn} 
        setSelectRadioBtn={setSelectRadioBtn}
        onClick={onClick}
        id={id}
        value={value}
        name="paymant"
        classNameInput="inputRadio"
        label={
          <ContainerMethodos img={img} method={method}/>
        }
      />
    </ContainerInput>
  )
}

interface ContainerMethodosProps{
  img: string
  method: string
}


// Essa função serve de label para o input
function ContainerMethodos({ img, method }: ContainerMethodosProps){
  return(
    <Container>
      <img src={img} alt="" />
      <p>{method}</p>
    </Container>
  )
}