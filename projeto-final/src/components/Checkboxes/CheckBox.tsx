import React, {  ForwardedRef, useState  } from 'react'
import { Container } from './style'
import acept from '../../assets/img/acept.svg'

export interface CheckBoxProps{
  name?: string
  checked?: boolean
  hover?:  boolean 
  disabled?: boolean
  setFiltroColor: React.Dispatch<React.SetStateAction<string[]>>
  filtroColor: string[]
}

export const CheckBox = React.forwardRef((props: CheckBoxProps, ref: ForwardedRef<HTMLInputElement>) => {
  const defaultChecked = props.checked ? props.checked : false;
  const [isChecked, setChecked] = useState(defaultChecked)

  console.log(ref)

  const defaultColors = props.filtroColor

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    if (isChecked){
      const tiraCor = defaultColors.filter((cor) => e.target.value !== cor)
      props.setFiltroColor(tiraCor)
    }else{
      defaultColors.push(e.target.value)
      props.setFiltroColor(defaultColors)
    }
    
    setChecked(!isChecked)
  }
  return(
    <Container url={acept} hover={props.hover}>
      <input
        type="checkbox"
        name={props.name}
        id={props.name}
        value={props.name}
        checked={isChecked}
        onChange={handleChange}
        ref={ref}
        {...props}
        />
        <label htmlFor={props.name}>
          {props.name}
        </label> 
    </Container>

  )
})