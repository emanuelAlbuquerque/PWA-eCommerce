import { AppBar } from "../AppBar/AppBar";
import { ContainerInfosProdutos, ContainerModalBag, InfosProdutos, ContainerItens } from "./style";
import { ArrowLeft } from "../../assets/Icons/General/ArrowLeft";
import { DefaultCard } from "../CardVerticais/Default/DefaultCard";
import { TextField } from "../TextField/TextField";
import { ButtonPrimary } from "../Buttons/Primary/ButtonPrimary";
import {useEffect, useState} from "react";
import { NavLink, Link } from "react-router-dom";

export interface ModalBagProps{
  modalBagOn: boolean
  setModalBagOn: React.Dispatch<React.SetStateAction<boolean>>
}

interface BagItensProps{
  quantidade: number, 
  nome: string, 
  descricao: string, 
  preco: number, 
  id: string
  img: string
}

export function ModalBag({modalBagOn, setModalBagOn}: ModalBagProps){
  const getPublicacoesStorage = () => JSON.parse(localStorage.getItem('bag') as string) ?? [];
  
  const [itens, setItens] = useState<BagItensProps[]>(getPublicacoesStorage())
  const [precoTotal, setPrecoTotal] = useState<number>(0)
  const handleOnClickBagOff = () => {
    setModalBagOn(false)
  } 
  
  useEffect(() => {
    let total = precoTotal

    itens.map((item) => {
      total += item.preco * item.quantidade
    })

    setPrecoTotal(total)
  }, [])

  return(
    <ContainerModalBag modalBagOn={modalBagOn}>
      <div className="modalBag">
        <AppBar
          text="Back"
          iconeEsquerda={<ArrowLeft />}
          variant="Search"
          className="modalBag_titulo"
          onClickIconeEsqueda={handleOnClickBagOff}
        />

        <ContainerItens>
          {itens.map((item, key) => (
            <DefaultCard
              key={key}
              nomeProduto={item.nome}
              descricaoProduto={item.descricao}
              precoProduto={item.preco}
              img={item.img}
              quantidadeProduto={item.quantidade}
              className="card" 
              setPrecoTotal={setPrecoTotal}
              precoTotal={precoTotal}
            />
          ))}
        </ContainerItens>
        <ContainerInfosProdutos>
          <InfosProdutos>
            <p>Subtotal:</p>
            <p>{precoTotal && `$${(precoTotal).toFixed(2)}`}</p>
          </InfosProdutos>
          <InfosProdutos>
            <p>Tax:</p>
            <p>$2.00</p>
          </InfosProdutos>
          <InfosProdutos>
            <h2>Total:</h2>
            <h2>$111.38</h2>
          </InfosProdutos>
        </ContainerInfosProdutos>

        <div className="input_code">
          <TextField />
        </div>

        <div className="buttonModalBag">
          <Link to="/myCarty">
            <ButtonPrimary variant="default" text="Place Order" />
          </Link>
        </div>

        <NavLink to="/categoryPage" className="continue">Continue Shopping</NavLink>
      </div>
    </ContainerModalBag>
  )
}