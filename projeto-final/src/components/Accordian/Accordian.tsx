import { ReactNode, useState } from "react"
import { ChevronBottom } from "../../assets/Icons/General/ChevronBottom"
import { ChevronUp } from "../../assets/Icons/General/ChevronUp"
import { Button } from "./style"

export interface AccordianProps{
  children?: ReactNode
}

export function Accordian({children}: AccordianProps){

  const [expandOn, setExpandOn] = useState(false)

    const expand = () => {
        setExpandOn(!expandOn)
  }

  return(
    <>
      <Button onClick={expand}>
        <p>More about CORA’L</p>
        {expandOn ? <ChevronUp /> : <ChevronBottom />}
      </Button>
      {expandOn && children}
    </>
  )
}