import styled from "styled-components"
import { Theme } from "../../styles/Theme"

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem;

  
  display: none;
  justify-content: space-between;
  align-items: center;

  background-color: ${Theme.Colors.bright};


  @media screen and (min-width: 1024px){
    display: flex;
  }
`

export const ContainerNavBar = styled.div`
  display:  flex;
  align-items: center;
`

export const ContainerPesquisa = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 480px;
  
  
  .container_input_pesquisa{
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 400px;
    padding: .5rem;
    background-color: ${Theme.Colors.grey};
    border-radius: 4px;
    .input_pesquisa{
      width: 100%;
      border: none;
      background-color: ${Theme.Colors.tranparent};
      outline: none;
      margin-left: 1rem;
      color: ${Theme.Colors.lowEmphasis};
      font-weight: ${Theme.Typography.TitleMedium.weight};
      font-size: ${Theme.Typography.TitleMedium.size};
    }
  }

  .container_icons{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 100px;
    margin-left: 1rem;

    .icons{
      border: none;
      background: none;
      cursor: pointer;
    }
  }
`