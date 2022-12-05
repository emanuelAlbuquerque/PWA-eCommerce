import { ReactNode, useEffect } from 'react'
import { ChangeEvent, SetStateAction, useState } from 'react'
import { Container } from './style'

export interface RadioButtonProps {
  name: string
  id?:string
  label: string | ReactNode
  checked?: boolean
  hover?: boolean
  value: string
  disabled?: boolean

  classNameInput?: string
  className?: string

  selectRadioBtn: string
  setSelectRadioBtn: React.Dispatch<SetStateAction<string>>

  onClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void
}

export function RadioButton(
  { 
    label, 
    name, 
    checked, 
    value, 
    id, 
    selectRadioBtn, 
    setSelectRadioBtn, 
    classNameInput, 
    className, 
    onClick,
    ...props 
  }: RadioButtonProps) {

  useEffect(() => {
    const defaultChecked = checked ? value : '';

    setSelectRadioBtn(defaultChecked)
  }, [checked])

  
  const isRadioSelected = (valor: string): boolean => selectRadioBtn === valor
  const handleRadioClick = (e: ChangeEvent<HTMLInputElement>): void => setSelectRadioBtn(e.currentTarget.value)

  return (
      <Container hover className={className}>
        <input
          type="radio"
          name={name}
          value={value}
          id={id}
          checked={isRadioSelected(value)}
          onClick={onClick}
          onChange={handleRadioClick}
          className={classNameInput}
          {...props}
        />
        <label htmlFor={id}>
          {label}
        </label> 
      </Container>
  )
}