import {useState} from "react";
import { SmallMinus } from "../../assets/Icons/General/SmallMinus";
import { SmallPlus } from "../../assets/Icons/General/SmallPlus";
import { Container } from "./style";

export interface StepperProps{
  active?: boolean
  className?: string
}

export function Stepper({active, className}: StepperProps){

  const [cont, setCont] = useState(0)


  const handleClickPlus = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.currentTarget.classList.add('active')
    setCont(cont + 1)
  }
  const handleClickMinius = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (cont > 0) {
      e.currentTarget.classList.add('active')
      setCont(cont - 1)
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLButtonElement, Element>) => {
    e.currentTarget.classList.remove('active')
  }


  return(
    <Container active className={className}>
      <button onClick={handleClickMinius} onBlur={handleBlur} >
        <SmallMinus className="stepper_icon"/>
      </button>

      <p>{cont}</p>

      <button onClick={handleClickPlus} onBlur={handleBlur} >
        <SmallPlus className="stepper_icon"/>
      </button>
    </Container>
  )
}