import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Main = styled.main`
  display: flex;
  gap: 2rem;
  width: 100%;

`

export const ContainerInputs = styled.div`
  width: 60%;
  padding-left: 1rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  .NewAdress{
    color: ${Theme.Colors.dark};
    font-size: ${Theme.Typography.BodyMedium.size};
    font-weight: ${Theme.Typography.BodyMedium.weight};
  }
`

export const Inputs = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  
  .inputsLefts{
    width: 40%;
  }

  .inputsRights{
    width: 60%; 

    .inputNumber{
      display: flex;
      gap: 1rem;
      width: 100%;

     .inputDDD{
      width: 15%;
     }

     .inputEnterNumber{
      width: 85%;
     }
    }
  }
`

export const Input = styled.div`
  margin-bottom: 1.5rem;

  p{
    color: ${Theme. Colors.highEmphasis};
    font-size: ${Theme.Typography.BodyMedium.size};
    font-weight: ${Theme.Typography.BodyMedium.weight};
    margin-bottom: .5rem;
  }
`

export const ContainerSummary = styled.div`
  width: 40%;

  display: flex;
  flex-direction: column;
  align-items: end;

  .ContainerInfosPrecos{
    padding-right: 1rem;
  }
`

export const Summary = styled.div`
  width: 100%;
  max-width: 415px;
  margin-bottom: 2rem;

  .title{
    color: ${Theme.Colors.highEmphasis};
    font-size: ${Theme.Typography.DisplaySmall.size};
    font-weight: ${Theme.Typography.DisplaySmall.weight};
    margin-bottom: 2rem;
    border-bottom: 1px solid ${Theme.Colors.lightText};
    padding: .5rem 0;
  }

  .products{
    display: flex;
    flex-direction: column;
    gap: 2rem;

    margin-right: 1rem;

    height: 250px; 
    overflow-y: scroll;

    &::-webkit-scrollbar {
        background-color: ${Theme.Colors.bright};
        width: 14px;
        border-radius: 8px;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background-color: ${Theme.Colors.lightGray};
        border: 4px solid ${Theme.Colors.bright};
        width: 7px;
      }
    .qtdPreco{
      justify-content: left;
    }
  }

`

export const ContainerMethodos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`


export const MethodUPI = styled.div`
  width: 100%;
  border: 1px solid ${Theme.Colors.primary};

  
  border-radius: 12px;
`

export const ContainerButtons = styled.div`
  width: 100%; 

  display: flex; 
  justify-content: space-between;
  align-items: center;

  margin-top: 2rem;

  .buttonBanck{
    border: none; 
    background-color: ${Theme.Colors.tranparent};
    cursor: pointer;

    color: ${Theme.Colors.primary};
    font-size: ${Theme.Typography.TitleRegular.size};
    font-weight: ${Theme.Typography.TitleRegular.weight};

    text-decoration: underline;
  }

  .buttonPrimary{
    width: 100%;
    max-width: 140px;
  }
`