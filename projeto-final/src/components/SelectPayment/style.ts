import styled from "styled-components";
import { Theme } from "../../styles/Theme";


interface ContainerInputPorps {
  isActive: boolean
}

export const Container = styled.div<ContainerInputPorps>`
    width: 100%;
    padding: .8rem;

    cursor: pointer;

    border-radius: 12px;

    background-color: ${({ isActive }) => isActive ? `rgba(99, 149, 153, .2)` : `${Theme.Colors.bright}`};

    &:not(:last-child){
      margin-bottom: 1rem;
    }

  .containerInput{
    height: 100%; 
    width: 100%;

    label{
      width: 100%; 
      height: 100%;
    }
  }
  .inputRadio{
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%); 
  }
`

export const ContainerSelect = styled.div`
  width: 100%;
  height: 100%; 

  cursor: pointer;

  .selectNome{
    display: flex;
    align-items: center;
    gap: .5rem;
    div{
      width: 70px;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${Theme.Colors.bright};
      border: 1px solid ${Theme.Colors.lightText};
      border-radius: 8px;
    }
  
    p{
      color: ${Theme.Colors.highEmphasis};
      font-size: ${Theme.Typography.BodyMedium.size};
      font-weight: ${Theme.Typography.BodyMedium.weight};
    }
  }

`

export const InsereDadosPagamentos = styled.div`
  margin-top: .5rem;

  .inputText{
    width: 100%;
    max-width: 290px;
    padding: .5rem; 

    border: 1px solid ${Theme.Colors.primary};
    border-radius: 4px;

    outline: none;

    color: ${Theme.Colors.lightText};
    font-size: ${Theme.Typography.BodyRegular.size};
    font-weight: ${Theme.Typography.BodyRegular.weight};
  }

  p{
    color: ${Theme.Colors.textGray};
    font-size: ${Theme.Typography.Link.size};
    font-weight: ${Theme.Typography.Link.weight};
    margin: .5rem 0;
  }
`