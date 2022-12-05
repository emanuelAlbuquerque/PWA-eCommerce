import { Edit } from "../../assets/Icons/General/Edit";
import { ButtonPrimary } from "../Buttons/Primary/ButtonPrimary";
import { Container } from "./style";


export interface AdressProps{
  nameEstado: string
  numeroCasa: number
  nomeRua: string
  nomeCidade: string

  onClick: () => void
}


export function Adress({ nameEstado, nomeCidade,nomeRua, numeroCasa, onClick}: AdressProps){
  return(
    <Container>
      <div className="endereco">
        <h1>{nomeCidade}</h1>
        <p>{`${numeroCasa} ${nomeRua}, ${nameEstado}`}</p>
      </div>
      <div className="buttonEdit">
        <ButtonPrimary variant="default" icon={<Edit />} onClick={onClick}/>
      </div>
    </Container>
  )
}