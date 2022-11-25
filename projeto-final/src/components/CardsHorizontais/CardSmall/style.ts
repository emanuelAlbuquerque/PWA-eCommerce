import styled from "styled-components";
import { Theme } from "../../../styles/Theme";
import { NameProdutos, PrecoProdutos } from "../../Card/style";

interface ContainerProps {
  background: string
}

export const Container = styled.div`
  width: 100%;
  max-width: 136px;

  flex-shrink: 0;

  @media screen and (min-width: 1024px){
    max-width: 285px;
  }
`

export const Background = styled.div<ContainerProps>`
  width: 100%;
  max-width: 136px;
  height: 136px;
  padding: .5rem;
  border-radius: 8px;
  background-image: ${(props) => `url(${(props.background)})`};

   @media screen and (min-width: 1024px){
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    max-width: 286px;
    height: 286px;
  }
`

interface ProdutosDetalhesProps {
  curtidas: boolean
}

export const ProdutosDetalhes = styled.div<ProdutosDetalhesProps>`
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  margin-top: 10px;

  button{
    background-color: ${Theme.Colors.tranparent};
    border: none;

    cursor: pointer;

    align-self: start;

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