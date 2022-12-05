import React from "react"
import { Container } from "./style"

export interface ChipsProps{
  text: string
  onClick?: () => void
}

export function Chips({ text, onClick}: ChipsProps){

  const handleIsActive = (e: React.MouseEvent<HTMLButtonElement>) => {
    const pai = e.currentTarget.parentElement?.parentElement?.children

    if(pai){
      Array.from(pai).forEach((filho) => {
        if(filho.children[0].classList.contains('active')){
          filho.children[0].classList.remove('active')
          filho.children[0].classList.add('disable')
        }
      })
    }

    e.currentTarget.parentElement?.children[0].classList.remove('disable')
    e.currentTarget.parentElement?.children[0].classList.add('active')

    if(onClick){
      onClick()
    }
  }

  return(
    <Container>
      <button onClick={handleIsActive} className="disable">
        {text}
      </button>
    </Container>
  )
}