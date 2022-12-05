import React, { ReactNode } from "react";
import { LocationIcon } from "../../assets/Icons/General/Location";
import { Plus } from "../../assets/Icons/General/Plus";
import { LinkButton } from "../Buttons/LinksButtons/LinksButton";
import { ButtonPrimary } from "../Buttons/Primary/ButtonPrimary";
import { Container } from "./style";

export interface ModalAdressProps{
  children: ReactNode
  onClick: (e: React.MouseEvent<HTMLElement>) => void
  ocClickAddAddress: () => void
}

export function ModalAdress({ children, onClick, ocClickAddAddress }: ModalAdressProps){
  return(
    <Container>
      <div className="containerModal">
        <div className="titleModal">
          <h1 onClick={onClick}>Select Delivery Address</h1>
          <LinkButton variant="default" icon={<Plus />} text="Add New Adress" onClick={ocClickAddAddress}/>
        </div>
        <div className="enderecos">
          {children}
        </div>
        <ButtonPrimary variant="default" text="Delliver Here" icon={<LocationIcon />} />
      </div>
    </Container>
  )
}