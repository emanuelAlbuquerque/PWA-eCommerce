import { BannerWide } from "../../components/Banners/Wide/BannerWide";
import { Header } from "../../components/Header/Header";
import bannerCategoryPage from '../../assets/img/bannerCategoryPage.png'
import { Espacamento, Hero } from "../Home/style";
import { ContainerButtonFilterMobile, ContainerFiltro, ContainerLista, ContainerListaProdutos, ContainerModalSort, ContainerTitulo, ModeloPagina, ModeloPaginaButtons, ModeloPaginaInputs, Produtos, TotalProdutos } from "./style";
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
import {useState} from "react";
import { Cross } from "../../assets/Icons/General/Cross";

export function CategoryPage(){

  const [modalSortOn, setModalSortOn] = useState(false)

  return(
    <>
      <Header />
      <AppBar text="Handbags" iconeEsquerda={<ChevronLeft />} variant="Search"/>

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
          <FiltrosWeb text="Size" />
          <FiltrosWeb text="Color">
            <CheckBox label="Blue" name="Blue"/>
            <CheckBox label="Maroon Red" name="Maroon Red"/>
            <CheckBox label="Crimson Red" name="Crimson Red"/>
            <CheckBox label="Seinna Pink" name="Seinna Pink"/>
            <CheckBox label="Teal" name="Teal"/>
            <CheckBox label="Aquamarine" name="Aquamarine"/>
            <CheckBox label="Off-White" name="Off-White"/>
            <CheckBox label="Muave Orange" name="Muave Orange"/>
          </FiltrosWeb>
          <FiltrosWeb text="Brand" />
          <FiltrosWeb text="Price Range" />
          <FiltrosWeb text="DIscount" />
          <FiltrosWeb text="Availability" />
        </ContainerFiltro>

        <ContainerLista>
          <ModeloPagina>
            <ModeloPaginaButtons>
              <button> <GridIcon /> </button>
              <button> <IconSort /></button>
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
          <Produtos>
            {OpcoesProducts.map((produto) => (
              <Products
                className="prosutos_item"
                key={produto.id}
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
            <RadioButton name="sort" value="latest" label="Latest Products" />
            <RadioButton name="sort" value="lowToHigh" label="Price- Low to High" />
            <RadioButton name="sort" value="highToLow" label="Price- High to Low" />
            <RadioButton name="sort" value="popularity" label="Popularity" />
            <RadioButton name="sort" value="customerRatings" label="Customer Ratings" />
          </div>
        </ContainerModalSort>
    </>
  )
}