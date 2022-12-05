import styled from "styled-components";
import { OrderSumaryContainer } from "../../components/Order/style";
import { Theme } from "../../styles/Theme";

export const Main = styled.main`
`

export const ContainerItens = styled.section`
  padding: 1rem;
  background-color: ${Theme.Colors.accent};

  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 450px;
  
  
  .itens{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 320px;
    overflow-y: scroll;
    
  }

  .inputCode{
    background-color: ${Theme.Colors.bright};
    border-radius: 0;
  }
`

export const OrderDetails = styled.div`
  padding: 1rem;
`


export const ContainerOrderDetails = styled.div`
  margin-bottom: 3rem;
`