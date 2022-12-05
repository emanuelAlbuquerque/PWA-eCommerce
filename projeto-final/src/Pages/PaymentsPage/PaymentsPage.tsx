import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "../../assets/Icons/General/ChevronLeft";
import { Adress } from "../../components/Adress/Adress";
import { AppBar } from "../../components/AppBar/AppBar";
import { Main, Title } from "../AddNewAdress/style";

export function PaymentsPage(){
  const navigate = useNavigate()

  const [modalAdressOn, setModalAdressOn] = useState(false)

  const fechaModalAdress = (e: React.MouseEvent<HTMLElement>) => {
    setModalAdressOn(false)
  }
  
  return(
    <>
      <AppBar
        variant="Search"
        text="Order Summary"
        iconeEsquerda={<ChevronLeft />}
        onClickIconeEsqueda={() => navigate('/bagMobile')}
      />

      <Main>
        <div className="container">
          <Title>
            Deliver To
          </Title>
          <Adress
            nameEstado="Pernambuco"
            nomeCidade="Limoeiro"
            nomeRua="José Epfânio"
            numeroCasa={417}
            onClick={() => setModalAdressOn(true)}
          />
        </div>
      </Main>
    </>
  )
}