import { CardHorizontalDesktop } from "../../components/CardHorizontalDesktop/CardHorizontalDesktop";
import { Header } from "../../components/Header/Header";
import { ContainerInfosProduto, ContainerInputCode, ContainerTable, MainContainer, OrderSumary, PageTitle } from "./style";
import bolsa from '../../assets/img/bolsaMarrom.png'
import { ButtonPrimary } from "../../components/Buttons/Primary/ButtonPrimary";
import { ButtonOutline } from "../../components/Buttons/Outline/ButtonOutline";
import { FiltrosWeb } from "../../components/FiltrosWeb/FiltrosWeb";
import { ChevronUp } from "../../assets/Icons/General/ChevronUp";
import { ChevronBottom } from "../../assets/Icons/General/ChevronBottom";
import { TextField } from "../../components/TextField/TextField";
import { FooterWeb } from "../../components/FooterWeb/FooterWeb";
import { Order } from "../../components/Order/Order";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ModalBag, modalBagItensProps } from "../../components/ModalBag/ModalBag";
import api from "../../services/api";
import { UserLogado } from "../../User/UserLogado";


export function MyCart() {

  const [modalBagOn, setModalBagOn] = useState(false)
  const navigate = useNavigate()
  const [precoTotal, setPrecoTotal] = useState<number>(0)
  const [itens, setItens] = useState<modalBagItensProps[]>([])

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


  const onClickRemoveItem = async (id: string) => {
    const remove = await api.put(`/removerProdutos/${UserLogado.email}/${id}`)

    pegaDados()
    pegaTotal()
    setPrecoTotal(0)

    alert('Item removido com sucesso')
  }

  const onClickMoveItem = async (idProduto: string, idItem: string) => {
    const moveItemFavoritos = await api.put(`/adicionarProdutosFavorito/${UserLogado.email}`, {
      "produto": idProduto
    })

    const remove = await api.put(`/removerProdutos/${UserLogado.email}/${idItem}`)

    pegaDados()
    pegaTotal()
    setPrecoTotal(0)

    alert('Item movido com sucesso')
  }

  
  
  useEffect(() => {
    pegaDados()
  }, [])

  useEffect(() => {
    pegaTotal()
  }, [itens])

  return ( 
      <>
        <Header setModalBagOn={setModalBagOn} />

        <PageTitle>
          My Cart
        </PageTitle>

        <MainContainer>
          <ContainerInfosProduto>
            <ContainerTable>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
            <tbody>
              
              {itens[0]?.produtos.map((item) => (
                <CardHorizontalDesktop 
                  key={item._id}
                  descricao={item.produto.descricao} 
                  name={item.produto.nome} 
                  preco={item.produto.preco} 
                  subtotal={item.produto.preco * item.quantidade} 
                  quantidade={item.quantidade} 
                  img={item.produto.img}
                  id={item._id}
                  setItens={setItens}
                  onClickRemoveItem={() => {
                    onClickRemoveItem(item._id)
                  }}
                  onClickMoveItem={() => {
                    onClickMoveItem(item.produto._id, item._id)
                  }}
                />
              ))}
                

              </tbody>
            </ContainerTable>

            <OrderSumary>
                <Order 
                  variant="default"
                  className="OrderItem" 
                  title={"Order Summary"} 
                  subTotal={precoTotal} 
                  discount={1} 
                  deliveryFee={0} 
                  onClickPlaceOrder={() => navigate('/checkoutPage')}
                />
            </OrderSumary>
          </ContainerInfosProduto>

          <ContainerInputCode>
            <FiltrosWeb 
              text="Apply Coupom Code" 
              iconActive={<ChevronUp />} 
              iconDisabe={<ChevronBottom />} 
              classNameText="ApplyCupom"
            >
              <div className="ContainerInput">
                <TextField />
              </div>
            </FiltrosWeb>
          </ContainerInputCode>
        </MainContainer>

        <FooterWeb />
        <ModalBag modalBagOn={modalBagOn} setModalBagOn={setModalBagOn} />
      </>
    );
}
