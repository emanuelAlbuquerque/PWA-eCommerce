import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Tabs } from "../../components/Tabs/Tabs";
import { TabsItem } from "../../components/Tabs/TabsItem/TabsItem";
import { Ratings } from "../../components/Ratings/Ratings";
import { TextField } from "../../components/TextField/TextField";
import { Stepper } from "../../components/Stepper/Stepper";
import { ButtonPrimary } from "../../components/Buttons/Primary/ButtonPrimary";
import { ButtonOutline } from "../../components/Buttons/Outline/ButtonOutline";
import { Offers } from "../../components/Offers/Offers";
import { ContainerInfosProdutos, ImagemProduto, InfosProdutos, NomeProduto, PrecoProduto, RatingsProduto, ValidaCode, QuantidadeProduto, ContainerCodigosDesconto, ContainerButton, ContainerDetalhesProdutos, ContainerCode, TextDetalhesProduto, ContainerButtonMobile } from "./style";
import { Bag } from "../../assets/Icons/Navigation/Bag";
import { Hearth } from "../../assets/Icons/Navigation/Heath";
import { FooterWeb } from "../../components/FooterWeb/FooterWeb";
import { BarraNavegacao } from "../CategoryPage/style";
import { AppBar } from "../../components/AppBar/AppBar";
import { ChevronLeft } from "../../assets/Icons/General/ChevronLeft";
import { Seprator } from "../../components/Seprator/Seprator";
import { Accordian } from "../../components/Accordian/Accordian";
import { SideNavigation } from "../../components/SideNavigation/SideNavigation";
import { ReferAndEarn } from "../../components/ReferAndEarn/ReferAndEarn";
import { RatingsMobile } from "../../components/RatingsMobile/RatingsMobile";
import { ButtonDuo } from "../../components/AssemblyButtons/Duo/ButtonDuo";
import { Espacamento } from "../Home/style"
import {useEffect, useLayoutEffect, useState} from "react";
import { ModalBag } from "../../components/ModalBag/ModalBag";

import api from "../../services/api";
import { Produto } from "../../types/ProdutosTypes";
import { UserLogado } from "../../User/UserLogado";


interface ProdutoPros{
  id: string,
  nome: string,
  descricao: string,
  img: string,
  preco: number,
  precoTotal: number,
  desconto: number,
  ratings: number,
  defaultRatings: number,
  quantidadeVendas: number
}

export function ProductPage() {
  const [count, setCount] = useState(1)
  const [modalBagOn, setModalBagOn] = useState(false)
  const navigate = useNavigate()
  const [produto, setProduto] = useState<Produto>()
  const { idProduto } = useParams() //Pega o id do produto
  const [itemCarrinho, setItemCarrinho] = useState(false)

  
  useLayoutEffect(() => {
    api.get(`/produto/${idProduto}`).then((res) => {
      setProduto(res.data)
    }).catch((err) => {
      console.log('Produto não encontrado')
    })
  }, [])

  async function adicionaCarrinho(){
    const res = await api.put(`/adicionarProdutosCarrinho/${UserLogado.email}`, {
      "produto": produto?._id,
      "quantidade": count
    })

    alert('Item adicionado com sucesso')
  }

  async function adicionaFavoritos(){
    const res = await api.put(`/adicionarProdutosFavorito/${UserLogado.email}`, {
      "produto": produto?._id,
    })

    alert('Item adicionado com sucesso')
  }

  const AppBarHandleClick = () => {
    navigate('/categoryPage')
  }

  const sideNavigateClick = () => {
    navigate('/')
  }

  return (
    <>
      <Header setModalBagOn={setModalBagOn} />
      <BarraNavegacao>
        <AppBar
          iconeEsquerda={<ChevronLeft />}
          variant="Search"
          onClickIconeEsqueda={AppBarHandleClick} 
          text={""}        
        />
      </BarraNavegacao>
  
      {produto && 
        <>
          <main key={produto._id}>
            <ContainerInfosProdutos>
              <ImagemProduto>
                <div className="imagensProdutos">
                  <div className="imgDesktop">
                    <img src={`../../${produto.img}`} alt="" className="imgProduto" />
                  </div>
                  <div className="imgMobile">
                    <img src={`../../${produto.img}`} alt="" className="imgProduto" />
                    <img src={`../../${produto.img}`} alt="" className="imgProduto" />
                    <img src={`../../${produto.img}`} alt="" className="imgProduto" />
                    <img src={`../../${produto.img}`} alt="" className="imgProduto" />
                    <img src={`../../${produto.img}`} alt="" className="imgProduto" />
                    <img src={`../../${produto.img}`} alt="" className="imgProduto" />
                  </div>
                </div>
                <div className="sliderProduto">
                  <img src={`../../${produto.img}`} alt="" />
                  <img src={`../../${produto.img}`} alt="" />
                  <img src={`../../${produto.img}`} alt="" />
                  <img src={`../../${produto.img}`} alt="" />
                </div>
              </ImagemProduto>

              <InfosProdutos>
                <NomeProduto>
                  <h1>{produto.nome}</h1>
                  <h2>{produto.descricao}</h2>
                </NomeProduto>
                <RatingsProduto>
                  <Ratings defaultValue={produto.defaultRatings} />
                  <p>({produto.ratings}) Ratings</p>
                </RatingsProduto>
                <PrecoProduto>
                  <h2>${produto.preco}</h2>
                  <h3>${produto.precoTotal}</h3>
                  <p>{produto.desconto}%OFF</p>
                </PrecoProduto>

                <hr />

                <RatingsMobile ratings={produto.defaultRatings} totalRatings={produto.ratings}/>

                <ContainerCode>
                  <ValidaCode>
                    <div className="enviaCode">
                      <h2>Delivery Details</h2>
                      <p>Check estimated delivery date/pickup option.</p>
                    </div>
                    <TextField className="informaCode" />
                  </ValidaCode>

                  <QuantidadeProduto>
                    <p>Quantity:</p>
                    <Stepper count={count} setCount={setCount}/>
                  </QuantidadeProduto>
  
                  <ContainerCodigosDesconto>
                    <Offers descricaoCupom="Get upto 30% Off on order value above $100" codigo="ORDER100" />
                    <Offers descricaoCupom="Get upto 30% Off on order value above $100" codigo="ORDER100" />
                    <Offers descricaoCupom="Get upto 30% Off on order value above $100" codigo="ORDER100" />
                  </ContainerCodigosDesconto>
                </ContainerCode>

                <ContainerButton>
                  <ButtonPrimary 
                    variant="default" 
                    icon={<Bag />} 
                    text="Add to Bag" 
                    onClick={adicionaCarrinho}
                  />
                  <ButtonOutline
                    variant="default"
                    icon={<Hearth />}
                    text="Add To Wishlist"
                    onClick={adicionaFavoritos}
                  />
                </ContainerButton>

              </InfosProdutos>
            </ContainerInfosProdutos>

            <ContainerDetalhesProdutos>
              <Tabs>
                <TabsItem text="Product Description" active />
                <TabsItem text="Related Products" />
                <TabsItem text="Ratings and Reviews" />
              </Tabs>

              <div className="detalhes">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus scelerisque laoreet tortor cras molestie tincidunt malesuada malesuada. Neque, mauris duis dui id morbi magna. Cras lacus, viverra auctor in turpis est quisque eget tristique
                </p>

                <p>
                  Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et pharetra platea pretium nec feugiat tincidunt quam leo tristique. Nulla enim consectetur sit et tempus, faucibus leo ac cras. Purus ut non eu mus volutpat.
                </p>

                <p>
                  Eget est vel sagittis amet sit eu eu ullamcorper tellus. Leo mauris, faucibus vulputate adipiscing elementum tristique dictumst augue pellentesque. Justo, sed nunc, pretium turpis scelerisque. Enim urna etiam morbi vestibulum ac dictumst. Ac ut elementum molestie sit felis imperdiet.
                </p>
              </div>
            </ContainerDetalhesProdutos>

            <Seprator />

            <Accordian label="Product Description">
              <TextDetalhesProduto>
                Experience comfortable and easy travelling like never before with this coach bag. It features a zip closure, removable straps and multiple organization compartments to keep your valuables safe. Crafted from premium material, it is durable and lasts long.
              </TextDetalhesProduto>
            </Accordian>

            <Seprator />

            <SideNavigation text="Ratings & Reviews" onClick={sideNavigateClick} />

            <Seprator />

            <ReferAndEarn />

            <Espacamento >
              <br />
              <br />
              <br />
              <br />
            </Espacamento>

            <ContainerButtonMobile>
              <ButtonDuo 
                iconButtonSmall={<Hearth />}
                iconButtonLarge={<Bag />}
                textButtonLarge="Add to bag"
                onClickButtonLarge={adicionaCarrinho}
                onClickButtonSmall={adicionaFavoritos}
              />
                
            </ContainerButtonMobile>
          </main>
          <FooterWeb />
        </>
      }
      <ModalBag modalBagOn={modalBagOn} setModalBagOn={setModalBagOn} />
    </>
  )
}