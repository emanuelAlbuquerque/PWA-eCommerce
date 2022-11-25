import { HomeBanner } from "../../components/Banners/HomeBanner/HomeBanner";
import { BannerWide } from "../../components/Banners/Wide/BannerWide";
import { CardSmall } from "../../components/CardsHorizontais/CardSmall/CardSmall";
import { Header } from "../../components/Header/Header";
import { AssesblyWideContainer, BannerHybridContainer, Brands, ContainerCategory, Espacamento, Hero, NewArrivals } from "./style";
import bolsaRosa from '../../assets/img/bolsaRosa.png'
import { Handpicked } from "../../components/Handpicked/Handpicked";
import { Brand } from "../../components/Brand/Brand";

import Biba from '../../assets/Icons/Marcas/Biba.svg'
import Chanel from '../../assets/Icons/Marcas/Chanel.svg'
import DG from '../../assets/Icons/Marcas/D&G.svg'
import HM from '../../assets/Icons/Marcas/H&M.svg'
import Prada from '../../assets/Icons/Marcas/Prada.svg'
import zara from '../../assets/Icons/Marcas/zara.svg'
import { FooterWeb } from "../../components/FooterWeb/FooterWeb";
import { BannerHybrid } from "../../components/AssemblyBanner/Hybrid/Hybrid";
import { BannerSmall } from "../../components/Banners/Small/BannerSmall";
import { TextTypes } from "../../components/Text/Text";
import { ChevronRight } from "../../assets/Icons/General/ChevronRight";
import { AppBar } from "../../components/AppBar/AppBar";
import { Menu } from "../../assets/Icons/General/Menu";
import { AddToHomeScreen } from "../../assets/Icons/General/AddToHomeScreen";
import { SearchIcon } from "../../assets/Icons/General/SearchIcon";
import { NotificationIcon } from "../../assets/Icons/General/Notification";
import { AssemblyWide } from "../../components/AssemblyBanner/AssemblyWide/AssemblyWide";
import { Accordian } from "../../components/Accordian/Accordian";
import { FooterMobile } from "../../components/FooterMobile/FooterMobile";
import { BottomNavigation } from "../../components/BottomNavigation/BottomNavigation";
import { Category } from "../../components/Category/Category";
import { Handbags } from "../../assets/Icons/Product/Handbags";
import { BarraNavegacao, ContainerModalBag } from "../CategoryPage/style";
import { useState } from "react";
import { ArrowLeft } from "../../assets/Icons/General/ArrowLeft";
import { DefaultCard } from "../../components/CardVerticais/Default/DefaultCard";
import { ContainerButtonFilterMobile, ContainerFiltro, ContainerInfosProdutos, ContainerLista, ContainerListaProdutos, ContainerModalSort, ContainerTitulo, InfosProdutos, ModeloPagina, ModeloPaginaButtons, ModeloPaginaInputs, Produtos, TotalProdutos } from "../CategoryPage/style";
import bolsa from '../../assets/img/bolsa.png'
import { TextField } from "../../components/TextField/TextField";
import { ButtonPrimary } from "../../components/Buttons/Primary/ButtonPrimary";

export function Home(){

  const [modalBagOn, setModalBagOn] = useState(false)

  const handleOnClickBagOff = () => {
    setModalBagOn(false)
  } 

  return(
    <>
      <Header setModalBagOn={setModalBagOn} />

      <BarraNavegacao>
        <AppBar 
          variant="Search" 
          iconeEsquerda={<Menu />} 
          iconeOne={<AddToHomeScreen />} 
          iconeTwo={<SearchIcon />} 
          iconeTree={<NotificationIcon />} 
          text="Home" 
        />
      </BarraNavegacao>

      <HomeBanner text='We are currently experiencing local customs clearance delays. For the latest updates, please check your order status here' />

      <Hero>
        <BannerWide variant="funk" />
      </Hero>

      <AssemblyWide 
        bannerWideOn={<BannerWide variant="funk" />} 
        bannerWideTree={<BannerWide variant="makeup" />} 
        bannerWideTwo={<BannerWide variant="spring" />}
      />


      <ContainerCategory>
        <h2>
          Top Categories
        </h2>
        <div>
          <Category icon={<Handbags />} text="Skincare" />
          <Category icon={<Handbags />} text="Skincare" />
          <Category icon={<Handbags />} text="Skincare" />
          <Category icon={<Handbags />} text="Skincare" />
          <Category icon={<Handbags />} text="Skincare" />
          <Category icon={<Handbags />} text="Skincare" />
          <Category icon={<Handbags />} text="Skincare" />
          <Category icon={<Handbags />} text="Skincare" />
          <Category icon={<Handbags />} text="Skincare" />
        </div>
      </ContainerCategory>


      <NewArrivals>
        <div className="container_button">
          <h2>
            New Arrivals
          </h2>
          <button onClick={(e) => {
            if(e.currentTarget.parentElement?.nextSibling){
              e.currentTarget.parentElement?.nextSibling.scrollBy(100, 0)
            }
          }}>
            View All
            <ChevronRight />
          </button>
        </div>
        <div className="produtos">
          <CardSmall
            background={bolsaRosa}
            nameProduct="Grande"
            descriptionProducts="Blossom Pouch"
            precoComDesconto="$39.49"
          />
          <CardSmall
            background={bolsaRosa}
            nameProduct="Grande"
            descriptionProducts="Blossom Pouch"
            precoComDesconto="$39.49"
          />
          <CardSmall
            background={bolsaRosa}
            nameProduct="Grande"
            descriptionProducts="Blossom Pouch"
            precoComDesconto="$39.49"
          />
          <CardSmall
            background={bolsaRosa}
            nameProduct="Grande"
            descriptionProducts="Blossom Pouch"
            precoComDesconto="$39.49"
          />
          <CardSmall
            background={bolsaRosa}
            nameProduct="Grande"
            descriptionProducts="Blossom Pouch"
            precoComDesconto="$39.49"
          />
        </div>
      </NewArrivals>

      <Handpicked />

      <Brands>
        <div className="container_buttonBrands">
          <h2>
            New Arrivals
          </h2>
          <button>
            View All
            <ChevronRight />
          </button>
        </div>
        <div className="brands_container">
          <Brand icone={Biba}/>
          <Brand icone={Chanel}/>
          <Brand icone={DG}/>
          <Brand icone={HM}/>
          <Brand icone={Prada}/>
          <Brand icone={zara}/>
        </div>
      </Brands>

      <BannerHybridContainer>
        <h2>
          Makeup & Skincare
        </h2>
        <BannerHybrid 
          bannerWide={<BannerWide variant="makeup" />} 
          bannerSmallOne={<BannerSmall variant="skincare" />} 
          bannerSmallTwo={<BannerSmall variant="facepacks" />} 
        />
      </BannerHybridContainer>

      <AssesblyWideContainer>
        <h2>
          Trending Deals
        </h2>
        <AssemblyWide
          bannerWideOn={<BannerWide variant="spring" />}
          bannerWideTree={<BannerWide variant="makeup" />}
          bannerWideTwo={<BannerWide variant="funk" />}
        />
      </AssesblyWideContainer>

      <FooterWeb />
      <Accordian>
        <FooterMobile />
      </Accordian>

        <Espacamento >
          <br />
          <br />
          <br />
          <br />
        </Espacamento>
          

      <BottomNavigation />


      <ContainerModalBag modalBagOn={modalBagOn}>
        <div className="modalBag">
          <AppBar
            text="Back"
            iconeEsquerda={<ArrowLeft />}
            variant="Search"
            className="modalBag_titulo"
            onClickIconeEsqueda={handleOnClickBagOff}
          />

          <DefaultCard
            nomeProduto="Prada"
            descricaoProduto="Leather Coach Bag"
            precoProduto="54.69"
            quantidadeProduto="1"
            img={bolsa}
            className="card"
          />
          <DefaultCard
            nomeProduto="Prada"
            descricaoProduto="Leather Coach Bag"
            precoProduto="54.69"
            quantidadeProduto="1"
            img={bolsa}
            className="card"
          />

          <ContainerInfosProdutos>
            <InfosProdutos>
              <p>Subtotal:</p>
              <p>$109.38</p>
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
            <ButtonPrimary variant="default" text="Place Order" />
          </div>

          <a href="" className="continue">Continue Shopping</a>
        </div>
      </ContainerModalBag>
    </>
  )
}