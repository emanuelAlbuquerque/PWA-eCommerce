import { ReactNode, useState } from "react"
import { ChevronBottom } from "../../assets/Icons/General/ChevronBottom"
import { ChevronUp } from "../../assets/Icons/General/ChevronUp"
import { Button } from "./style"

export interface AccordianProps{
  children?: ReactNode
  label?: string
}

export function Accordian({children, label}: AccordianProps){

  const [expandOn, setExpandOn] = useState(false)

    const expand = () => {
        setExpandOn(!expandOn)
  }

  return(
    <>
      <Button onClick={expand}>
        <p>{label}</p>
        {expandOn ? <ChevronUp /> : <ChevronBottom />}
      </Button>
      {expandOn && children}
    </>
  )
}