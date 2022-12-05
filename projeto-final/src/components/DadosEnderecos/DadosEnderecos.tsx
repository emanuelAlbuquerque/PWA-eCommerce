import { Container } from "./style";

export function DadosEnderecos(){
  return(
    <Container>
      <div className="dadosEndereco">
        <div className="cidade">
          <div>
            <h2>Vincent Lobo</h2>
            <p>Home</p>
          </div>
          <button>Edit</button>
        </div>
        <div className="endereco">
          <p>3068  Woodlawn Drive</p>
          <p>Milwaukee</p>
          <p>414-672-5388</p>
        </div>
      </div>
    </Container>
  )
}