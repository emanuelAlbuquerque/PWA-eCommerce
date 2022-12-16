import { AppBar } from "../AppBar/AppBar";
import { ContainerInfosProdutos, ContainerModalBag, InfosProdutos, ContainerItens } from "./style";
import { ArrowLeft } from "../../assets/Icons/General/ArrowLeft";
import { DefaultCard } from "../CardVerticais/Default/DefaultCard";
import { TextField } from "../TextField/TextField";
import { ButtonPrimary } from "../Buttons/Primary/ButtonPrimary";
import {useEffect, useState} from "react";
import { NavLink, Link } from "react-router-dom";
import api from "../../services/api";
import { UserLogado } from "../../User/UserLogado";
import { Produto } from "../../types/ProdutosTypes";

export interface ModalBagProps{
  modalBagOn: boolean
  setModalBagOn: React.Dispatch<React.SetStateAction<boolean>>

  
}

export interface modalBagItensProps{
  _id: string
  produtos: [
    {
      produto: Produto
      quantidade: number
      _id: string
    }
  ]
}

export function ModalBag({ modalBagOn, setModalBagOn }: ModalBagProps) {
  const [itens, setItens] = useState<modalBagItensProps[]>([])
  const [precoTotal, setPrecoTotal] = useState<number>(0)
  const [taxa, setTaxa] = useState<number>(0)
  const handleOnClickBagOff = () => {
    setModalBagOn(false)
  } 
 
  const pegaDados = async () => {
    const res = await api.get(`/listarCarrinhoUsuario/${UserLogado.email}`)

    setItens(res.data)
  }
  
  const pegaTotal = () => {
    let total = precoTotal
    itens[0]?.produtos.forEach((item) => {
      total += item.produto.preco * item.quantidade
    }) 
    setPrecoTotal(total)
  }
  
  
  useEffect(() => {
    pegaDados()
  }, []) 
  
  useEffect(() => {
    pegaTotal()
  }, [itens])


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
          {itens[0]?.produtos.map((item) => (
              <DefaultCard
                id={item._id}
                key={item._id}
                nomeProduto={item.produto.nome}
                descricaoProduto={item.produto.descricao}
                precoProduto={item.produto.preco}
                img={`../../${item.produto.img}`}
                quantidadeProduto={item.quantidade}
                className="card"
                setItens = {setItens}
                setPrecoTotal={setPrecoTotal}
                precoTotal={precoTotal}
              />
            ))
          }
        </ContainerItens>
        <ContainerInfosProdutos>
          <InfosProdutos>
            <p>Subtotal:</p>
            <p>{precoTotal && `$${(precoTotal).toFixed(2)}`}</p>
          </InfosProdutos>
          <InfosProdutos>
            <p>Tax:</p>
            <p>${(taxa).toFixed(2)}</p>
          </InfosProdutos>
          <InfosProdutos>
            <h2>Total:</h2>
            <h2>{precoTotal && `$${(precoTotal - taxa).toFixed(2)}`}</h2>
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