import { AddToHomeScreen } from './assets/Icons/General/AddToHomeScreen'
import { ArrowLeft } from './assets/Icons/General/ArrowLeft'
import { ArrowRight } from './assets/Icons/General/ArrowRight'
import { AutoFill } from './assets/Icons/General/AutoFill'
import { BookOpen } from './assets/Icons/General/BookOpen'
import { ChevronBottom } from './assets/Icons/General/ChevronBottom'
import { ChevronLeft } from './assets/Icons/General/ChevronLeft'
import { ChevronRight } from './assets/Icons/General/ChevronRight'
import { ChevronRightSmall } from './assets/Icons/General/ChevronRightSmall'
import { ChevronUp } from './assets/Icons/General/ChevronUp'
import { CoinsHand } from './assets/Icons/General/CoinsHand'
import { CreditCard } from './assets/Icons/General/CreditCard'
import { Cross } from './assets/Icons/General/Cross'
import { CrossSmall } from './assets/Icons/General/CrossSmall'
import { Delete } from './assets/Icons/General/Delete'
import { DeleteSmall } from './assets/Icons/General/DeleteSmall'
import { Download } from './assets/Icons/General/Download'
import { Edit } from './assets/Icons/General/Edit'
import { Ellipses } from './assets/Icons/General/Ellipses'
import { Eye } from './assets/Icons/General/Eye'
import { Filter } from './assets/Icons/General/Filter'
import { LocationIcon } from './assets/Icons/General/Location'
import { LogOut } from './assets/Icons/General/LogOut'
import { Menu } from './assets/Icons/General/Menu'
import { Microphone } from './assets/Icons/General/Microphone'
import { NotificationIcon } from './assets/Icons/General/Notification'
import { Orders } from './assets/Icons/General/Orders'
import { Placeholder } from './assets/Icons/General/Placeholder'
import { Plus } from './assets/Icons/General/Plus'
import { Profile } from './assets/Icons/General/Profile'
import { ProfileFill } from './assets/Icons/General/ProfileFill'
import { Review } from './assets/Icons/General/Review'
import { SearchIcon } from './assets/Icons/General/SearchIcon'
import { SmallMinus } from './assets/Icons/General/SmallMinus'
import { SmallPlus } from './assets/Icons/General/SmallPlus'
import { Sort } from './assets/Icons/General/Sort'
import { Star } from './assets/Icons/General/Star'
import { ViewSmilar } from './assets/Icons/General/ViewSmilar'
import { Bag } from './assets/Icons/Navigation/Bag'
import { Categories } from './assets/Icons/Navigation/Categories'
import { Hearth } from './assets/Icons/Navigation/Heath'
import { Home } from './assets/Icons/Navigation/Home'
import { Handbags } from './assets/Icons/Product/Handbags'
import { Jewellery } from './assets/Icons/Product/Jewellery'
import { SkinCare } from './assets/Icons/Product/SkinCare'
import { Watch } from './assets/Icons/Product/Watch'
import { Theme } from './styles/Theme'
import { ButtonPrimary } from './components/Buttons/Primary/ButtonPrimary'
import { TextTypes } from './components/Text/Text'
import { HeaderIcon } from './assets/Icons/General/HeaderIcon'
import { Header } from './components/Header/Header'
import { FooterWeb } from './components/FooterWeb/FooterWeb'
import { FooterMobile } from './components/FooterMobile/FooterMobile'
import { AppBar } from './components/AppBar/AppBar'
import { BottomNavigation } from './components/BottomNavigation/BottomNavigation'
import { ButtonDuo } from './components/AssemblyButtons/Duo/ButtonDuo'
import { ButtonDetailed } from './components/AssemblyButtons/Detailed/ButtonDetailed'
import { ButtonTwoCTA } from './components/AssemblyButtons/TwoCTA/ButtonTwoCTA'
import { ButtonSingle } from './components/AssemblyButtons/Single/ButtonSingle'
import { useState } from 'react'
import { Accordian } from './components/Accordian/Accordian'
import { CheckBox } from './components/Checkboxes/CheckBox'
import { RadioButton } from './components/RadioButton/RadioButton'
import { SideNavigation } from './components/SideNavigation/SideNavigation'
import { HorizontalMenu } from './components/HorizontalMenu/HorizontalMenu'
import { Stepper } from './components/Stepper/Stepper'
import { Ratings } from './components/Ratings/Ratings'
import { Search } from './components/Search/Search'
import { Card } from './components/Card/Card'
import exBag from './assets/img/exBag.png'
import { TextField } from './components/TextField/TextField'
import { OrderCardMobile } from './components/OrderCardMobile/OrderCardMobile'
import { BannerSquare } from './components/Banners/Square/BannerSquare'

import imgOculos from './assets/img/img-oculos.png'
import imgPerfume from './assets/img/img-perfume.png'
import imgRelogio from './assets/img/img-relogio.png'
import imgBolsa from './assets/img/img-bolsa.png'

import bolsaRosa from './assets/img/bolsaRosa.png'

import { Handpicked } from './components/Handpicked/Handpicked'
import { Products } from './components/CardsHorizontais/Products/Products'
import { DefaultCard } from './components/CardVerticais/Default/DefaultCard'
import { BannerWide } from './components/Banners/Wide/BannerWide'

import bannerDefault from './assets/img/bannerDefault.png'
import { BannerSmall } from './components/Banners/Small/BannerSmall'

function App() {

  const [teste, setTeste] = useState(false)
  return (
    <div className="">
      <SkinCare color={Theme.Colors.highLight}/>
      <Jewellery color={Theme.Colors.highLight} />
      <Watch color={Theme.Colors.highLight} />
      <Handbags color={Theme.Colors.highLight} />
      <Home color={Theme.Colors.highLight}/>
      <Hearth color={Theme.Colors.highLight} />
      <Categories color={Theme.Colors.highLight}/>
      <Bag color={Theme.Colors.highLight} />
      <ProfileFill />
      <Placeholder />
      <SearchIcon />
      <NotificationIcon />
      <Menu />
      <LocationIcon />
      <Profile />
      <AddToHomeScreen />
      <ChevronBottom />
      <ChevronRight />
      <ChevronLeft />
      <ArrowRight />
      <ArrowLeft />
      <ChevronRightSmall />
      <ChevronUp />
      <Filter />
      <Sort />
      <Star />
      <Microphone />
      <Cross />
      <Plus />
      <SmallPlus />
      <SmallMinus />
      <Edit />
      <Orders />
      <LogOut />
      <Ellipses />
      <Delete />
      <Download />
      <AutoFill />
      <CrossSmall />
      <ViewSmilar />
      <CoinsHand />
      <CreditCard />
      <BookOpen />
      <Review />
      <DeleteSmall />
      <Eye />
      <ButtonPrimary variant='default' icon={<Placeholder />} text='label' />

      <TextTypes variant={'DisplayLarge'}>
        testando
      </TextTypes>

      <FooterWeb />
      

      <Accordian>
        <FooterMobile />
      </Accordian>

      <AppBar variant='PageTitle'>
        <div>
          <button>
            <Placeholder />
          </button>
          <p>Search</p>
        </div>
        <div>
          <button><Placeholder /></button>
          <button><Placeholder /></button> 
          <button><Placeholder /></button>
        </div>
      </AppBar>

      <BottomNavigation />
      <BottomNavigation theme='dark'/>

      <br />
      <br />

      <ButtonSingle icon={<Bag />} text="Add to Bag" />

      <br />
      <br />

      <ButtonDuo iconButtonLarge={<Placeholder />} iconButtonSmall={<Placeholder />} textButtonLarge="Label" />

      <br />
      <br />

      <ButtonDetailed title="Title" heading="Heading" textButton='Place Order'/>

      <br />
      <br />

      <ButtonTwoCTA
        iconButtonPrimary={<Placeholder />}
        iconButtonSecondary={<Placeholder />}
        textButtonPrimary='label'
        textButtonSecondary="label"
      />

      <Accordian />

      <CheckBox label='Aperte aqui' name='aperte' checked />
      <CheckBox label='Aperte aqui' name='mundo' disabled />
      <CheckBox label='Aperte aqui' name='ola'  />

      <RadioButton value='ola' label='tudo' name='olaww' id='1'/>
      <RadioButton value='olasdc' label='tudo' name='olaww' id='2'/>
      <RadioButton value='olacssdc' label='tudo' name='olaww' disabled/>
      
      <SideNavigation text='Label' id='1de'/>
      <SideNavigation text='Label' id='1di'/>
      <SideNavigation text='Label' selected/>

      <br />
      <br />


      <HorizontalMenu text='ola mundo' icon={<Placeholder />} />
      <HorizontalMenu text='ola mundo' icon={<Placeholder />} checked/>

      <br />
      <br />

      <Stepper />

      <br />
      <br />

      <Ratings defaultValue={-10}/>

      <br />
      <br />

      <Search iconOne={<Placeholder />}/>

      <br />
      <br />

      <Card 
        descriptionProducts='Leather Coach Bag' 
        nameProduct='PRADA'
        precoComDesconto='$54.69' 
        procoTotal='$69.99' 
        totalDesconsto='20% OFF' 
        img={exBag}
      />

      <br />
      <br />

      <TextField />

      <br />
      <br />

      <OrderCardMobile date='September 5, 2020' idProduto='874522648' precoProduto='218.50'/>

      <br />
      <br />

      <BannerSquare background={imgOculos} text='Sunglasses'/>
      <br />
      <BannerSquare background={imgPerfume} text='Sunglasses'/>
      <br />
      <BannerSquare background={imgRelogio} text='Sunglasses'/>
      <br />
      <BannerSquare background={imgBolsa} text='Sunglasses'/>

      <br />
      <br />

      <Handpicked />

      <br />
      <br />

      <Products
        background={bolsaRosa}
        defaultRatings={4}
        ratings={43}
        nameProduct="Grande"
        descriptionProducts="Blossom Pouch"
        precoComDesconto="39.49"
        procoTotal="78.66"
        totalDesconsto="50" />
      <Products 
        background={bolsaRosa}
        defaultRatings={4}
        ratings={43}
        nameProduct="Grande"
        descriptionProducts="Blossom Pouch"
        precoComDesconto="39.49"
        procoTotal="78.66"
        totalDesconsto="50" buttonOn/>

        <br />
        <br />

        <DefaultCard />

        <br />
        <br />

        <BannerWide variant='funk' />
        <BannerWide variant='spring' />
        <BannerWide variant='makeup' />
        <BannerWide variant='default' background={bannerDefault}/>

        <br />
        <br />

        <BannerSmall variant='skincare'/>
    </div>
  )
}

export default App
