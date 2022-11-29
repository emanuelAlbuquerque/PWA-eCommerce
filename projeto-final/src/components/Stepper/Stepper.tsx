import {SetStateAction, useState} from "react";
import { SmallMinus } from "../../assets/Icons/General/SmallMinus";
import { SmallPlus } from "../../assets/Icons/General/SmallPlus";
import { Container } from "./style";

export interface StepperProps{
  className?: string

  count: number
  setCount: React.Dispatch<SetStateAction<number>>

  aumentaPreco?: () => void
  diminuiPreco?: () => void
}

export function Stepper({ className, count, setCount, aumentaPreco, diminuiPreco}: StepperProps){


  const handleClickPlus = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.currentTarget.classList.add('active')
    setCount(count + 1)
    if (aumentaPreco){
      aumentaPreco()
    }
  }
  const handleClickMinius = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (count > 1) {
      e.currentTarget.classList.add('active')
      setCount(count - 1)
      if (diminuiPreco){
        diminuiPreco()
      }
    }
  }
  const handleBlur = (e: React.FocusEvent<HTMLButtonElement, Element>) => {
    e.currentTarget.classList.remove('active')
  }


  return(
    <Container className={className}>
      <button onClick={handleClickMinius} onBlur={handleBlur} >
        <SmallMinus className="stepper_icon"/>
      </button>

      <p>{count}</p>

      <button onClick={handleClickPlus} onBlur={handleBlur} >
        <SmallPlus className="stepper_icon"/>
      </button>
    </Container>
  )
}