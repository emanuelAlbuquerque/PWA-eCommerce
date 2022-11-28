import { useLayoutEffect, useRef } from "react"
import { Container } from "./style"

export interface TabsItemProps{
  text: string
  onClick?: () => void
  active?: boolean
}

export function TabsItem({text, onClick, active}: TabsItemProps){
  const buttonRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const handleClick = () => {
    const pai = buttonRef.current.parentElement?.children
    if(pai){
      Array.from(pai).forEach((button) => {
        button.children[0].classList.remove('active')
      })
    }
    buttonRef.current.children[0].classList.add('active')


    if(onClick){
      onClick()
    }
  }


  

  return(
    <Container onClick={handleClick} ref={buttonRef}>
      <button className={active ? 'active' : ''}>
        {text}
      </button>
    </Container>
  )
}