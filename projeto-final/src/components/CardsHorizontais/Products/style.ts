import styled from "styled-components";
import { Theme } from "../../../styles/Theme";
import { NameProdutos, PrecoProdutos } from "../../Card/style";

interface ContainerProps{
  background: string
}

export const Container = styled.div`
  width: 100%;
  max-width: 155px;

  .icon_bag path{
    stroke: ${Theme.Colors.primary};
    fill: none;
  }

  @media screen and (min-width: 1024px){
    max-width: 285px;
  }
`

export const Background = styled.div<ContainerProps>`
  width: 100%;
  max-width: 155px;
  height: 155px;
  padding: .5rem;
  border-radius: 8px;
  background-image: ${(props) => `url(${(props.background)})`};
  
  div{
    display: flex;
    justify-content: end;

    p{
      background-color: ${Theme.Colors.highLight};
      color: ${Theme.Colors.bright};
      padding: .4rem;
      border-radius: 4px;
      font-size: ${Theme.Typography.LinkSmall.size};
      font-weight: ${Theme.Typography.LinkSmall.weight};

       @media screen and (min-width: 1024px){
        font-size: ${Theme.Typography.TitleSmall.size};
        font-weight: ${Theme.Typography.TitleSmall.weight};
       }
    }
  }

  @media screen and (min-width: 1024px){
    max-width: 285px;
    height: 285px;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    div{
      p{
        padding: .7rem 1.5rem;
      }
    }
  }
`

interface ProdutosDetalhesProps{
  curtidas: boolean
}


export const ProdutosDetalhes = styled.div<ProdutosDetalhesProps>`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  button{
    background-color: ${Theme.Colors.tranparent};
    border: none;

    cursor: pointer;

    .icon_curtida{
      fill: ${(props) => props.curtidas ? `${Theme.Colors.lightRed}` : 'none'}
    }

    .icon_curtida path{
      stroke: ${(props) => props.curtidas ? `${Theme.Colors.lightRed}` : `${Theme.Colors.dark}`}
    }

  }
`

export const NomeProdutos = styled(NameProdutos)`
  h2{
    margin: 4px 0;

    @media screen and (min-width: 1024px){
      margin: 10px 0;

      font-size: ${Theme.Typography.LabelMedium.size};
      font-weight: ${Theme.Typography.LabelMedium.weight};
    }
  }

  h1{
    @media screen and (min-width: 1024px){
      font-size: ${Theme.Typography.BodyMedium.size};
      font-weight: ${Theme.Typography.BodyMedium.weight};
    }
  }

`

export const PrecoProducts = styled(PrecoProdutos)`
  gap: 0;
  justify-content: space-between;
  margin-bottom: 10px;

  @media screen and (min-width: 1024px){
    justify-content: initial;
    gap: 1rem;

    h2{
      font-size: ${Theme.Typography.BodyMedium.size};
      font-weight: ${Theme.Typography.BodyMedium.weight};
    }

    h3{
      font-size: ${Theme.Typography.LabelLarge.size};
      font-weight: ${Theme.Typography.LabelLarge.weight};
    }

    p{
      font-size: ${Theme.Typography.BodyRegular.size};
      font-weight: ${Theme.Typography.BodyRegular.weight};
    }
  }
`


export const Avaliacao = styled.div`
  display: none;
  gap: 10px;
  margin: 8px 0;

  p{
    color: ${Theme.Colors.primary};
    font-size: ${Theme.Typography.TitleSmall.size};
    font-weight: ${Theme.Typography.TitleSmall.weight};
  }

  @media screen and (min-width: 1024px){
    display: flex;
  }
`