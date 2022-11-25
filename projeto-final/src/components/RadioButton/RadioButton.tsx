import { ChangeEvent, useState } from 'react'
import { Container } from './style'

export interface RadioButtonProps {
  name: string
  id?:string
  label?: string
  checked?: boolean
  hover?: boolean
  value: string
  disabled?: boolean
}

export function RadioButton({ label, name, checked, value, id,  ...props }: RadioButtonProps) {
  const defaultChecked = checked ? value : '';

  const [selectRadioBtn, setSelectRadioBtn] = useState(defaultChecked)
  
  const isRadioSelected = (valor: string): boolean => selectRadioBtn === valor
  const handleRadioClick = (e: ChangeEvent<HTMLInputElement>): void => setSelectRadioBtn(e.currentTarget.value)

  return (
      <Container hover>
        <input
          type="radio"
          name={name}
          value={value}
          id={id}
          checked={isRadioSelected(value)}
          onChange={handleRadioClick}
          {...props}
        />
        <label htmlFor={id}>
          {label}
        </label> 
      </Container>
  )
}