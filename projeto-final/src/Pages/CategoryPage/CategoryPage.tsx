import { BannerWide } from "../../components/Banners/Wide/BannerWide";
import { Header } from "../../components/Header/Header";
import bannerCategoryPage from '../../assets/img/bannerCategoryPage.png'
import { Espacamento, Hero } from "../Home/style";
import { BarraNavegacao, ContainerButtonFilterMobile, ContainerFiltro, ContainerLista, ContainerListaProdutos, ContainerModalSort, ContainerTitulo, ModeloPagina, ModeloPaginaButtons, ModeloPaginaInputs, Produtos, TotalProdutos } from "./style";
import { FiltrosWeb } from "../../components/FiltrosWeb/FiltrosWeb";
import { CheckBox } from "../../components/Checkboxes/CheckBox";
import { GridIcon } from "../../assets/Icons/General/GridIcon";
import { IconSort } from "../../assets/Icons/General/IconSort";
import OpcoesProducts from '../../Util/OpcoesProducts.json'
import { Products } from "../../components/CardsHorizontais/Products/Products";
import { AppBar } from "../../components/AppBar/AppBar";
import { ChevronLeft } from "../../assets/Icons/General/ChevronLeft";
import { Filter } from "../../assets/Icons/General/Filter";
import { Sort } from "../../assets/Icons/General/Sort";
import { RadioButton } from "../../components/RadioButton/RadioButton";
import {useRef, useState} from "react";
import { Cross } from "../../assets/Icons/General/Cross";
import { useNavigate } from "react-router-dom";
import { ModalBag } from "../../components/ModalBag/ModalBag";
import FiltrosColor from '../../Util/FiltrosColor.json'

export function CategoryPage(){

  const [modalSortOn, setModalSortOn] = useState(false)
  const [modalBagOn, setModalBagOn] = useState(false)
  const [modelPage, setModelPage] = useState(true)

  const [selectInputRadio, setSelectInputRadio] = useState('')
  const [isChecked, setChecked] = useState(false)

//  ----------------------------Filtros------------------------------------
  const [filtroColor, setFiltroColor] = useState<string[]>([])
  const [filtroSize, setFiltroSize] = useState<string[]>([])
// ---------------------------------------------------------------------------

// --------------------------------NAVEGAÇÂO----------------------------
  const navigate = useNavigate()
  const AppBarHandleClick = () => {
    navigate('/')
  }
//-----------------------------------------------------------------------

  const isActive = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const pai = e.currentTarget.parentElement?.children
    if (pai) {
      Array.from(pai).forEach((button) => {
        if (button.classList.contains('active')) {
          button.classList.remove('active')
          button.classList.add('disable')
        }
      })
    }
    e.currentTarget.classList.remove('disable')
    e.currentTarget.classList.add('active')
  }

  const handleClickLayoutBlock = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    isActive(e)
    setModelPage(false)
  }

  const handleClickLayoutGrid = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    isActive(e)
    setModelPage(true)
  }

  return(
    <>
      <Header setModalBagOn={setModalBagOn}/>

        <BarraNavegacao>
            <AppBar 
              text="Handbags" 
              iconeEsquerda={<ChevronLeft />} 
              variant="Search" 
              onClickIconeEsqueda={AppBarHandleClick}
            />
        </BarraNavegacao>
  

      <TotalProdutos>
        {OpcoesProducts.length} Products
      </TotalProdutos>

      <Hero>
        <BannerWide variant="default" background={bannerCategoryPage} />
      </Hero>


      <ContainerTitulo>
        Handbags
      </ContainerTitulo>

      <ContainerListaProdutos>

        <ContainerFiltro>
          <FiltrosWeb text="Size">
            <CheckBox
              name="Mercado"
              filtroSize={filtroSize}
              setFiltroSize={setFiltroSize}
              className="inputSize"
              isChecked={isChecked}
              setChecked={setChecked}
            />
          </FiltrosWeb>
          <FiltrosWeb text="Color">
            {FiltrosColor.map((filtro) => (
              <CheckBox 
                key={filtro.id} 
                name={filtro.name} 
                filtroColor={filtroColor} 
                setFiltroColor={setFiltroColor}
                className="inputColor"
                isChecked={isChecked}
                setChecked={setChecked}
              />
            ))}
          </FiltrosWeb>
          <FiltrosWeb text="Brand" />
          <FiltrosWeb text="Price Range" />
          <FiltrosWeb text="DIscount" />
          <FiltrosWeb text="Availability" />
        </ContainerFiltro>

        <ContainerLista>
          <ModeloPagina>

            <ModeloPaginaButtons>
              <button onClick={handleClickLayoutGrid} className="active"> <GridIcon /> </button>
              <button onClick={handleClickLayoutBlock} className="disable"> <IconSort /></button>
              <p>Showing 1 - 40 of 145 items</p>
            </ModeloPaginaButtons>

            <ModeloPaginaInputs>
              <label htmlFor="show">To Show: </label>
              <input type="text" name="show" id="show"/>
            </ModeloPaginaInputs>
            <ModeloPaginaInputs>
              <label htmlFor="sort">Sort By: </label>
              <select name="sort" id="sort">
                <option value="position">Position</option>
              </select>
            </ModeloPaginaInputs>
          </ModeloPagina>

          <Produtos modelPage={modelPage}>
            {OpcoesProducts.map((produto) => (
              <Products
                className="produtos_item"
                key={produto.id}
                id={produto.id}
                background={produto.img}
                defaultRatings={produto.defaultRatings}
                nameProduct={produto.nome}
                descriptionProducts={produto.descricao}
                ratings={produto.ratings}
                procoTotal={produto.precoTotal}
                precoComDesconto={produto.preco}
                totalDesconsto={produto.desconto}
                quantidadeVendas={produto.quantidadeVendas}
              />
            ))}
          </Produtos>

        </ContainerLista>
      </ContainerListaProdutos>

        <Espacamento>
          <br />
          <br />
        </Espacamento>

        <ContainerButtonFilterMobile>
          <button onClick={() => setModalSortOn(true)}>
            <Sort />
            <p>SORT</p>
          </button>
          <button>
            <Filter />
            <p>FILTER</p>
          </button>
        </ContainerButtonFilterMobile>

        <ContainerModalSort modalOn={modalSortOn}>
          <div className="modalSort">
            <div className="fechaModal">
              <h2>Sort By</h2>
              <button onClick={() => setModalSortOn(false)}>
                <Cross />
              </button>
            </div>
            <RadioButton name="sort" value="latest" label="Latest Products" selectRadioBtn={selectInputRadio} setSelectRadioBtn={setSelectInputRadio} onClick={() => {}} />
            <RadioButton name="sort" value="lowToHigh" label="Price- Low to High" selectRadioBtn={selectInputRadio} setSelectRadioBtn={setSelectInputRadio} onClick={() => { }} />
            <RadioButton name="sort" value="highToLow" label="Price- High to Low" selectRadioBtn={selectInputRadio} setSelectRadioBtn={setSelectInputRadio} onClick={() => { }} />
            <RadioButton name="sort" value="popularity" label="Popularity" selectRadioBtn={selectInputRadio} setSelectRadioBtn={setSelectInputRadio} onClick={() => { }} />
            <RadioButton name="sort" value="customerRatings" label="Customer Ratings" selectRadioBtn={selectInputRadio} setSelectRadioBtn={setSelectInputRadio} onClick={() => { }} />
          </div>
        </ContainerModalSort>

        <ModalBag modalBagOn={modalBagOn} setModalBagOn={setModalBagOn} />
    </>
  )
}