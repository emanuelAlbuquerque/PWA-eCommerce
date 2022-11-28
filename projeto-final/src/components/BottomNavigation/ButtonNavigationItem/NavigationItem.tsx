import { ReactNode } from "react";
import { Container } from "./style";

export interface NavigationItemProps{
  className?: string
  id?: string
  theme?: string
  icon?: ReactNode
  text?: string
  active?: 'active' | 'disable'
  onClick?: () => void
}


export function NavigationItem({ className, icon, text, id, theme, active = 'disable', onClick }: NavigationItemProps){


  function buttonActive(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    const paiElement = e.currentTarget.parentElement?.children

    if (paiElement) {
      Array.from(paiElement).forEach((filho) => {//Tranforma a coleção em array, e reseta as classes.
        filho.children[0].classList.remove('active')
        filho.children[0].classList.add('disable')
      })
    }

    e.currentTarget.children[0].classList.add('active')

    if(onClick){
      onClick()
    }
    // navegaClick(e)
  }

  return(
    <Container onClick={buttonActive} className={className} id={id} theme={theme}>
      <div className={active}>
        {icon} 
        <p>{text}</p>
      </div>
    </Container>
  )
}