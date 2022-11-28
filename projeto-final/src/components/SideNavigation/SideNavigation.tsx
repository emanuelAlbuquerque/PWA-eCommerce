import { ReactNode, useState } from "react"
import { ChevronRight } from "../../assets/Icons/General/ChevronRight"
import { Container } from "./style"


export interface SideNavigationProps {
  text: string
  selected?: boolean
  id?:string
  onClick?: () => void
}

export function SideNavigation({ text, onClick, selected, id}: SideNavigationProps) {
  const defaultSelect = selected ? true : false
  const [click, setClick] = useState(defaultSelect)

  function handleOnClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>):void {
    if(onClick){
      onClick()
    }
  }

  const handleOnBlur = () => {
    setClick(false)
  }

  return (
    <Container onClick={handleOnClick} click={click} onBlur={handleOnBlur} onFocus={() => setClick(!click)}>
      <p>{text}</p>
      <ChevronRight className="side-navigation__icon"/>
    </Container>
  )
}