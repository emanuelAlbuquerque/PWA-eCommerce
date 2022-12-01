import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Tabs } from "../../components/Tabs/Tabs";
import { TabsItem } from "../../components/Tabs/TabsItem/TabsItem";
import bolsa from '../../assets/img/bolsaRosa.png'
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
import OpcoesProduto from '../../Util/OpcoesProducts.json'
import { useState } from "react";


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

  const { idProduto } = useParams() //Pega o id do produto

  const navigate = useNavigate()

  const AppBarHandleClick = () => {
    navigate('/categoryPage')
  }

  const sideNavigateClick = () => {
    navigate('/')
  }

  const produto: ProdutoPros[] = OpcoesProduto.filter((opcao) => opcao.id === idProduto)
  const getPublicacoesStorage = () => JSON.parse(localStorage.getItem('bag') as string) ?? [];

  const handleClickSaveLocalStorage = (quantidade: number, nome: string, descricao: string, preco: number, id: string, img: string
  ) => {
    localStorage.setItem('bag', JSON.stringify(
      [
        ...getPublicacoesStorage(),
        {
          "id": id,
          "quantidade": quantidade,
          "nome": nome,
          "descricao": descricao,
          "preco": preco,
          "img": img
        },
      ]
    ))
}

  return (
    <>
      <Header />
      <BarraNavegacao>
        <AppBar
          iconeEsquerda={<ChevronLeft />}
          variant="Search"
          onClickIconeEsqueda={AppBarHandleClick}
        />
      </BarraNavegacao>
  
      {produto.map((item) => (
        <main key={item.id}>
          <ContainerInfosProdutos>
            <ImagemProduto>
              <div className="imagensProdutos">
                <div className="imgDesktop">
                  <img src={item.img} alt="" className="imgProduto" />
                </div>
                <div className="imgMobile">
                  <img src={item.img} alt="" className="imgProduto" />
                  <img src={item.img} alt="" className="imgProduto" />
                  <img src={item.img} alt="" className="imgProduto" />
                  <img src={item.img} alt="" className="imgProduto" />
                  <img src={item.img} alt="" className="imgProduto" />
                  <img src={item.img} alt="" className="imgProduto" />
                </div>
              </div>
              <div className="sliderProduto">
                <img src={item.img} alt="" />
                <img src={item.img} alt="" />
                <img src={item.img} alt="" />
                <img src={item.img} alt="" />
              </div>
            </ImagemProduto>

            <InfosProdutos>
              <NomeProduto>
                <h1>{item.nome}</h1>
                <h2>{item.descricao}</h2>
              </NomeProduto>
              <RatingsProduto>
                <Ratings defaultValue={item.defaultRatings} />
                <p>({item.ratings}) Ratings</p>
              </RatingsProduto>
              <PrecoProduto>
                <h2>${item.preco}</h2>
                <h3>${item.precoTotal}</h3>
                <p>{item.desconto}%OFF</p>
              </PrecoProduto>

              <hr />

              <RatingsMobile ratings={item.defaultRatings} totalRatings={item.ratings}/>

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
                  onClick={() => {
                    handleClickSaveLocalStorage(count, item.nome, item.descricao, item.preco, item.id, item.img)
                  }}
                />
                <ButtonOutline variant="default" icon={<Hearth />} text="Add To Wishlist" />
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
            <ButtonDuo iconButtonSmall={<Hearth />} iconButtonLarge={<Bag />} textButtonLarge="Add to bag" />
          </ContainerButtonMobile>
        </main>
      ))}
      <FooterWeb />
    </>
  )
}