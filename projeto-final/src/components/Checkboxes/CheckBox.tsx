import React, {  useEffect, useState  } from 'react'
import { Container } from './style'
import acept from '../../assets/img/acept.svg'

export interface CheckBoxProps{
  name?: string
  label?:string
  checked?: boolean
  hover?:  boolean 
  disabled?: boolean
  className?: string
  
  setFiltroColor?: React.Dispatch<React.SetStateAction<string[]>>
  filtroColor?: string[]
  setFiltroSize?: React.Dispatch<React.SetStateAction<string[]>>
  filtroSize?: string[]

  isChecked: boolean
  setChecked: React.Dispatch<React.SetStateAction<boolean>>
}

export function CheckBox(
  { 
    filtroColor, 
    setFiltroColor, 
    setFiltroSize,
    filtroSize,
    checked, 
    hover, 
    name, 
    className, 
    isChecked,
    setChecked,
    label,
    ...props
  }: CheckBoxProps){
    
    
    useEffect(() => {
      const defaultChecked = checked ? checked : false;

      setChecked(defaultChecked)
    }, [checked])


  const defaultColors = filtroColor
  const defaultSize = filtroSize

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.currentTarget.classList.contains('inputColor')){
      if (isChecked){
        if (defaultColors && setFiltroColor){
          const tiraCor = defaultColors.filter((cor) => e.target.value !== cor)
          setFiltroColor(tiraCor)
        }
      }else{
        if (defaultColors && setFiltroColor) {
          defaultColors.push(e.target.value)
          setFiltroColor(defaultColors)
        }
      }
    }
    if (e.currentTarget.classList.contains('inputSize')) {
      if (isChecked) {
        if (defaultSize && setFiltroSize) {
          const tiraSize = defaultSize.filter((size) => e.target.value !== size)
          setFiltroSize(tiraSize)
        }
      } else {
        if (defaultSize && setFiltroSize) {
          defaultSize.push(e.target.value)
          setFiltroSize(defaultSize)
        }
      }
    }
    
    
    setChecked(!isChecked)
  }
  return(
    <Container url={acept} hover={hover}>
      <input
        type="checkbox"
        name={name}
        id={name}
        value={name}
        checked={isChecked}
        onChange={handleChange}
        className={className}
        {...props}
      />
        <label htmlFor={name}>
          {label}
        </label>
    </Container>

  )
}