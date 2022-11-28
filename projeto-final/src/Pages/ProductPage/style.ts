import styled from "styled-components";
import { PrecoProdutos } from "../../components/Card/style";
import { Theme } from "../../styles/Theme";

export const ContainerInfosProdutos = styled.section`
  display: flex;
  
  padding: 1rem;

  @media screen and (max-width: 425px){
    display: block;
    padding: 0;
  }
`

export const ImagemProduto = styled.div`
   width: 50%;

   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1rem;


   .imagensProdutos{
      width: 100%;
      display: flex;
      justify-content: center;

      .imgDesktop{
        width: 100%;
        max-width: 550px;

        .imgProduto{
          width: 100%;
          height: 100%;
          border-radius: 16px;
        }
      }

      .imgMobile{
        width: 100%;
        max-width: 328px;
        align-items: center;
        gap: 1rem;
        display: none;

        .imgProduto{
          width: 100%;
          height: 100%;
          border-radius: 16px;
        }
      }
   }
    
    .sliderProduto{
      display: flex;
      gap: 1rem;
      
      img{
        width: 75px;
        height: 75px;
        border-radius: 1rem;
      }
   }

   @media screen and (max-width: 425px){
    width: 100%;
    padding: 0 0 1rem 1rem;
    
    .imagensProdutos{
      overflow-x: scroll;
      justify-content: start;

      .imgProduto{
        flex-shrink: 0;
      }
      
      .imgDesktop{
        display: none;
      }

      .imgMobile{
        display: flex;
      }
   }

    .sliderProduto{
     display: none;
    }
  }
`

export const InfosProdutos = styled.div`
  width: 50%;

  display: flex; 
  flex-direction: column;
  gap: 2rem;


  @media screen and (max-width: 425px){
    width: 100%;
    gap: 0;

    hr{
      display: none;
    }
  }
`


export const NomeProduto = styled.div`
  h1{
    color: ${Theme.Colors.highEmphasis};
    font-size: ${Theme.Typography.DisplayMedium.size};
    font-weight: ${Theme.Typography.DisplayMedium.weight};
  }

  h2{
    color: ${Theme.Colors.lowEmphasis};
    font-size: ${Theme.Typography.DisplaySmall.size};
    font-weight: ${Theme.Typography.DisplaySmall.weight};
  }

   @media screen and (max-width: 425px){

      padding-left: 1rem;

      h1{
        font-size: ${Theme.Typography.BodyMedium.size};
        font-weight: ${Theme.Typography.BodyMedium.weight};
        margin-bottom: 10px;
      }

      h2{
        color: ${Theme.Colors.lowEmphasis};
        font-size: ${Theme.Typography.TitleMedium.size};
        font-weight: ${Theme.Typography.TitleMedium.weight};
      }
   }
`

  
export const RatingsProduto = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  p{
    font-size: ${Theme.Typography.BodyRegular.size};
    font-weight: ${Theme.Typography.BodyRegular.weight};
    color: ${Theme.Colors.lightText};
  }

  @media screen and (max-width: 425px){
    display: none;
  }
` 

export const PrecoProduto = styled(PrecoProdutos)`

  h2{
    font-size: ${Theme.Typography.DisplayLarge.size};
    font-weight: ${Theme.Typography.DisplayLarge.weight};
  }

  h3{
    font-size: ${Theme.Typography.DisplayMedium.size};
    font-weight: ${Theme.Typography.DisplayMedium.weight};
  }
  p{
    font-size: ${Theme.Typography.DisplaySmall.size};
    font-weight: ${Theme.Typography.DisplaySmall.weight};
  }

  @media screen and (max-width: 425px){
    padding: 0 1rem;
    margin: .5rem 0 0;
    h2{
      font-size: ${Theme.Typography.DisplaySmall.size};
      font-weight: ${Theme.Typography.DisplaySmall.weight};
    }

    h3, p{
      font-size: ${Theme.Typography.TitleMedium.size};
      font-weight: ${Theme.Typography.TitleMedium.weight};
    }
  }
`

export const ContainerCode = styled.div`
  display: flex;
  flex-direction: column;

  
   @media screen and (max-width: 425px){
      flex-direction: column-reverse;
   }

`

export const ValidaCode = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .enviaCode{
    width: 40%;
    h2{
      font-size: ${Theme.Typography.DisplaySmall.size};
      font-weight: ${Theme.Typography.DisplaySmall.weight};
      color: ${Theme.Colors.highEmphasis};
      margin-bottom: .5rem;
    }

    p{
      font-size: ${Theme.Typography.BodyMedium.size};
      font-weight: ${Theme.Typography.BodyMedium.weight};
      color: ${Theme.Colors.lowEmphasis}
    }
  }
  .informaCode{
    width: 60%;
  }

  @media screen and (max-width: 425px){
     flex-direction: column;
     padding: 1rem;

     .enviaCode{
        width: 100%;

        h2{
          font-size: ${Theme.Typography.TitleRegular.size};
          font-weight: ${Theme.Typography.TitleRegular.weight};
        }

        p{
          font-size: ${Theme.Typography.TitleSmall.size};
          font-weight: ${Theme.Typography.TitleSmall.weight};
        }
     }

     .informaCode{
        width: 100%;
     }
   }
`

export const QuantidadeProduto = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;

  p{
    &:first-child{
      font-size: ${Theme.Typography.DisplaySmall.size};
      font-weight: ${Theme.Typography.DisplaySmall.weight};
      color: ${Theme.Colors.highEmphasis};
    }
  }

  @media screen and (max-width: 425px){
     display: none;
   }

`

export const ContainerCodigosDesconto = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 100%;

  overflow-x: scroll;

  
  &::-webkit-scrollbar {
    background-color: ${Theme.Colors.bright};
    width: 14px;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #DCDFE3;
    border: 6px solid ${Theme.Colors.bright};
  }

  @media screen and (max-width: 425px){
    padding: 0 0 0rem 1rem;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  align-items: center; 
  gap: 10px;

  button{
    width: 50%;
  }

  @media screen and (max-width: 425px){
    display: none;
  }
`

export const ContainerDetalhesProdutos = styled.div`
  padding: 1rem;

  .detalhes{
    margin: 1rem 0 6rem 0;
    p{
      margin-bottom: 1rem;
      color: ${Theme.Colors.lowEmphasis};
      font-size: ${Theme.Typography.BodyMedium.size};
      font-weight: ${Theme.Typography.BodyMedium.weight};
    }
  }

  @media screen and (max-width: 425px){
    display: none;
  }
`

export const TextDetalhesProduto = styled.p`
  padding: 0rem 1rem 1rem;
  color: ${Theme.Colors.lowEmphasis};
  font-size: ${Theme.Typography.BodyMedium.size};
  font-weight: ${Theme.Typography.BodyMedium.weight};
`

export const ContainerButtonMobile = styled.div`
  position: fixed;
  bottom: 0;

  display: none;

  background-color: ${Theme.Colors.bright};

  width: 100%;

  padding: 1rem;

  @media screen and (max-width: 425px){
    display: block;
  }
`
