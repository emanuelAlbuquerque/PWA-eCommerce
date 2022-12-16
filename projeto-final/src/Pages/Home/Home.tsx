import { HomeBanner } from "../../components/Banners/HomeBanner/HomeBanner";
import { BannerWide } from "../../components/Banners/Wide/BannerWide";
import { CardSmall } from "../../components/CardsHorizontais/CardSmall/CardSmall";
import { Header } from "../../components/Header/Header";
import { 
      AssesblyWideContainer, 
      BannerHybridContainer, 
      Brands, 
      ContainerCategory, 
      Espacamento, 
      Hero, 
      NewArrivals 
    } from "./style";
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
import { BarraNavegacao } from "../CategoryPage/style";
import { useState } from "react";
import { ModalBag } from "../../components/ModalBag/ModalBag";
import { SkinCare } from "../../assets/Icons/Product/SkinCare";
import { Jewellery } from "../../assets/Icons/Product/Jewellery";
import { useNavigate } from "react-router-dom";

export function Home(){

  const [modalBagOn, setModalBagOn] = useState(false)
  const navigate = useNavigate()

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
          <Category icon={<SkinCare />} text="Skincare" />
          <Category icon={<Jewellery />} text="Jewellery" />
          <Category icon={<Handbags />} text="Handbags" onClick={() => navigate('/categoryPage')}/>
          <Category icon={<Handbags />} text="Handbags" onClick={() => navigate('/categoryPage')}/>
          <Category icon={<Handbags />} text="Handbags" onClick={() => navigate('/categoryPage')}/>
          <Category icon={<Handbags />} text="Handbags" onClick={() => navigate('/categoryPage')}/>
          <Category icon={<Handbags />} text="Handbags" onClick={() => navigate('/categoryPage')}/>
          <Category icon={<Handbags />} text="Handbags" onClick={() => navigate('/categoryPage')}/>
        </div>
      </ContainerCategory>


      <NewArrivals>
        <div className="container_button">
          <h2>
            New Arrivals
          </h2>
          <button onClick={(e) => {
            if(e.currentTarget.parentElement?.nextSibling){
              
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
      <Accordian label="More about CORA’L">
        <FooterMobile />
      </Accordian>

      <Espacamento >
        <br />
        <br />
        <br />
        <br />
      </Espacamento>
          
      <ModalBag modalBagOn={modalBagOn} setModalBagOn={setModalBagOn} />
      <BottomNavigation />
    </>
  )
}