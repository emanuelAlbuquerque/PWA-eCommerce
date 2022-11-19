import { ReactNode, useState } from "react";
import { Theme } from "../../../styles/Theme";
import { Container } from "./style";

export interface NavigationItemProps{
  className?: string
  id?: string
  theme?: string
  icon?: ReactNode
  text?: string
  active?: 'active' | 'disable'
}


export function buttonActive(e: React.MouseEvent<HTMLElement, MouseEvent>) {
  const paiElement = e.currentTarget.parentElement?.children

  if(paiElement){
    Array.from(paiElement).forEach((filho) => {//Tranforma a coleção em array, e reseta as classes.
        filho.children[0].classList.remove('active')
        filho.children[0].classList.add('disable')
      })
  }
  
  e.currentTarget.children[0].classList.add('active')

  navegaClick(e)
}

function navegaClick(e: React.MouseEvent<HTMLElement, MouseEvent>){
    if(e.currentTarget.classList.contains('home')){
      console.log('pagina home')
    }
    if(e.currentTarget.classList.contains('profile')){
      console.log('pagina profile')
    }
    if(e.currentTarget.classList.contains('bag')){
      console.log('pagina bag')
    }
    if(e.currentTarget.classList.contains('categories')){
      console.log('pagina categories')
    }
}

export function NavigationItem({ className, icon, text, id, theme, active = 'disable' }: NavigationItemProps){
  return(
    <Container onClick={buttonActive} className={className} id={id} theme={theme}>
      <div className={active}>
        {icon} 
        <p>{text}</p>
      </div>
    </Container>
  )
}