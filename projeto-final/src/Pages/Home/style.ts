import styled from "styled-components";
import { Theme } from "../../styles/Theme";


export const Hero = styled.div`
  padding: 1rem;
  display: none;

  @media screen and (min-width: 1024px){
    display: block;
  }
`

export const NewArrivals = styled.div`
  padding: 1rem 0 1rem 1rem;

  .container_button{
    margin: 1rem 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 1rem;

    h2{
      font-size: ${Theme.Typography.TitleRegular.size};
      font-weight: ${Theme.Typography.TitleRegular.weight};
    }

    button{
      background-color: ${Theme.Colors.tranparent};
      border: none;

      cursor: pointer;

      color: ${Theme.Colors.primary};

      font-size: ${Theme.Typography.LabelMedium.size};
      font-weight: ${Theme.Typography.LabelMedium.weight};

      display: flex;
      align-items: center;
      gap: 10px;
    }

      @media screen and (min-width: 1024px){

        h2{
          font-size: ${Theme.Typography.DisplayMedium.size};
          font-weight: ${Theme.Typography.DisplayMedium.weight};
        }

        button{
          font-size: ${Theme.Typography.TitleRegular.size};
          font-weight: ${Theme.Typography.TitleRegular.weight}; 
        }
      }
    }
  

  .produtos{
      display: flex;
      align-items: center;
      gap: 1rem;

      overflow-x: scroll;

      @media screen and (min-width: 1024px) {
        gap: 2rem;
      }

      &::-webkit-scrollbar {
        background-color: ${Theme.Colors.bright};
        width: 14px;
        border-radius: 8px;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background-color: ${Theme.Colors.bright};
        border: 4px solid ${Theme.Colors.bright};
        width: 7px;
      }
      
  }
`

export const Brands = styled.div`
  padding: 1rem;

  .container_buttonBrands{
    margin: 2rem 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 1rem;

    h2{
      font-size: ${Theme.Typography.TitleRegular.size};
      font-weight: ${Theme.Typography.TitleRegular.weight};
    }

    button{
      background-color: ${Theme.Colors.tranparent};
      border: none;

      cursor: pointer;

      color: ${Theme.Colors.primary};

      font-size: ${Theme.Typography.LabelMedium.size};
      font-weight: ${Theme.Typography.LabelMedium.weight};

      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  .brands_container{
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1024px){
    .container_buttonBrands{
      h2{
        font-size: ${Theme.Typography.DisplayMedium.size};
        font-weight: ${Theme.Typography.DisplayMedium.weight};
      }

      button{
        display: none;
      }
    }
  }

`

export const AssesblyWideContainer = styled.div`

    margin-bottom: 1rem;

  h2{
      padding-left: 1rem ;
      margin: .8rem 0;
      font-size: ${Theme.Typography.TitleRegular.size};
      font-weight: ${Theme.Typography.TitleRegular.weight};
    }

  @media screen and (min-width: 1024px){
    display: none;
  }
`

export const Espacamento = styled.div`
  br{
    @media screen and (min-width: 1024px){
      display: none;
    }
  }
`

export const BannerHybridContainer = styled.div`
  h2{
      padding-left: 1rem ;
      margin: .8rem 0;
      font-size: ${Theme.Typography.TitleRegular.size};
      font-weight: ${Theme.Typography.TitleRegular.weight};
      
      @media screen and (min-width: 1024px){
        display: none;
      }
    }

`


export const ContainerCategory = styled.div`


  overflow-x: scroll;

  padding: 1rem 0rem 1rem 1rem;

  h2{
      font-size: ${Theme.Typography.TitleRegular.size};
      font-weight: ${Theme.Typography.TitleRegular.weight};
      margin: 1rem 0 .5rem 0;
    }

    div{
      display: flex;
      gap: 10px;
    }

    @media screen and (min-width: 1024px){
      display: none;
    }
`