import {  useState  } from 'react'
import { Container } from './style'
import acept from '../../assets/img/acept.svg'

export interface CheckBoxProps{
  name?: string
  label?: string
  checked?: boolean
  hover?:  boolean 
  disabled?: boolean
}

export function CheckBox({ label, name, checked, hover, ...props }: CheckBoxProps){
  const defaultChecked = checked ? checked : false;
  const [isChecked, setChecked] = useState(defaultChecked)
  
  return(
    <Container url={acept} hover={hover}>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={isChecked}
        onChange={() => setChecked(!isChecked)}
        {...props}
        />
        <label htmlFor={name}>
          {label}
        </label>
    </Container>

  )
}