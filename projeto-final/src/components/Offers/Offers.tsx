import { CodigoCupom, Container, DescricaoCupom } from "./style"

export interface OffersProps{
  descricaoCupom: string
  codigo: string
}

export function Offers({codigo, descricaoCupom}: OffersProps){
  return(
    <Container>
      <DescricaoCupom>
        <p>{descricaoCupom}</p>
        <a href="">Terms & Conditions</a>
      </DescricaoCupom>
      <CodigoCupom>
        <p>Use Code</p>
        <h2>{codigo}</h2>
      </CodigoCupom>
    </Container>
  )
}