import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const ContainerTitulo = styled.h1`
  padding: 1rem;

  color: ${Theme.Colors.primary};
  font-size: ${Theme.Typography.DisplayMedium.size};
  font-weight: ${Theme.Typography.DisplayMedium.weight};

  @media screen and (max-width: 425px){
    display: none;
  }
`

export const BarraNavegacao = styled.div`
  display: block;

  @media screen and (min-width: 1024px){
    display: none;
  }
`

export const ContainerListaProdutos = styled.main`
  display: flex;
  gap: 1rem;

  padding: 1rem;

  width: 100%;
`

export const ContainerFiltro = styled.div`
  width: 20%;

  @media screen and (max-width: 425px){
    display: none;
  }
`


export const ContainerLista = styled.div`
  width: 80%;

  @media screen and (max-width: 425px){
    width: 100%;
  }
`

export const ModeloPagina = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 425px){
    display: none;
  }
`

export const ModeloPaginaButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  button{
    border: none;
    cursor: pointer;
    
    display: flex;
    justify-content: center;
    align-items: center;

    height: 24px;
    width: 24px;
  }

  .active{
    background-color: ${Theme.Colors.primary};

    .icon{
      fill: ${Theme.Colors.bright}
    }
  }

  .disable{
    background-color: ${Theme.Colors.tranparent};

    .icon{
      fill: #B6B6B6;
    }
  }

  p{
    font-size: ${Theme.Typography.BodyMedium.size};
    font-weight: ${Theme.Typography.BodyMedium.weight};

    color: ${Theme.Colors.highEmphasis};
  }
`

export const ModeloPaginaInputs = styled.div`
  label{
    font-size: ${Theme.Typography.BodyMedium.size};
    font-weight: ${Theme.Typography.BodyMedium.weight};

    color: ${Theme.Colors.highEmphasis};
  }

  input, select{
    border: none;
    background-color: ${Theme.Colors.lightGray};
    outline: none;
    border-radius: 4px;
    padding: .8rem;

    color: ${Theme.Colors.lowEmphasis};
    font-size: ${Theme.Typography.BodyMedium.size};
    font-weight: ${Theme.Typography.BodyMedium.weight};
  }

  input{
    width: 56px;
    text-align: center;
  }

  select{
    padding-right: 3rem;
  }
`

interface ProdutosProps{
  modelPage: boolean
}

export const Produtos = styled.div<ProdutosProps>`
  height: auto;
  margin-top: 1rem;

  ${(props) => props.modelPage ? 'display: grid;' : 'display: block;'}
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1rem;



  @media screen and (max-width: 425px){
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;

    .produtos_item{
      margin: 0;
      justify-self: center;
    }
  }
`

export const TotalProdutos = styled.p`
  display: none;

  color: ${Theme.Colors.lowEmphasis};
  font-size: ${Theme.Typography.TitleRegular.size};
  font-weight: ${Theme.Typography.TitleRegular.weight};

  padding: 1rem 1rem 0rem 1rem;

  @media screen and (max-width: 425px){
    display: block;
  }
`


export const ContainerButtonFilterMobile = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: ${Theme.Colors.bright};

  display: none;
  align-items: center;

  position: fixed;
  bottom: 0;

  button{
    width: 50%;
    border: none;
    background-color: ${Theme.Colors.tranparent};
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 425px){
    display: flex;
  }
`

interface ContainerModalSortProps{
  modalOn: boolean
}

export const ContainerModalSort = styled.div<ContainerModalSortProps>`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, .2);

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  align-items: flex-end;
  ${props => props.modalOn === true ? 'display: flex;' : 'display: none;'}


  .modalSort{
    background-color: ${Theme.Colors.bright};
    border-radius: 2rem 2rem 0 0;
    width: 100%;
    padding: 1rem ;

    .fechaModal{
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid ${Theme.Colors.lightText};
      padding-bottom: 1rem;
     
      button{
        background-color: ${Theme.Colors.tranparent};
        border: none;
      }
      h2{
        color: ${Theme.Colors.lowEmphasis};
        font-size: ${Theme.Typography.TitleRegular.size};
        font-weight: ${Theme.Typography.TitleRegular.weight};
      }
    }

    div{
      margin: 1rem 0 ;
    }
  }
`