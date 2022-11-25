import { BannerWide } from "../../components/Banners/Wide/BannerWide";
import { Header } from "../../components/Header/Header";
import bannerCategoryPage from '../../assets/img/bannerCategoryPage.png'
import { Espacamento, Hero } from "../Home/style";
import { BarraNavegacao, ContainerButtonFilterMobile, ContainerFiltro, ContainerInfosProdutos, ContainerLista, ContainerListaProdutos, ContainerModalBag, ContainerModalSort, ContainerTitulo, InfosProdutos, ModeloPagina, ModeloPaginaButtons, ModeloPaginaInputs, Produtos, TotalProdutos } from "./style";
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
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "../../assets/Icons/General/ArrowLeft";
import { DefaultCard } from "../../components/CardVerticais/Default/DefaultCard";
import bolsa from '../../assets/img/bolsa.png'
import { TextField } from "../../components/TextField/TextField";
import { ButtonPrimary } from "../../components/Buttons/Primary/ButtonPrimary";

export function CategoryPage(){

  const [modalSortOn, setModalSortOn] = useState(false)
  const [modalBagOn, setModalBagOn] = useState(false)
  const navigate = useNavigate()

  const AppBarHandleClick = () => {
    navigate('/')
  }

  const handleOnClickBagOff = () => {
    setModalBagOn(false)
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
              <ButtonPrimary variant="default" text="Place Order"/>
            </div>

             <a href="" className="continue">Continue Shopping</a>
          </div>
        </ContainerModalBag>
    </>
  )
}