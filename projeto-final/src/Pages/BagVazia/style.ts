import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  .containerCabecalho{
    height: 10vh;

    @media screen and (min-width: 1024px){
      .appBar{
        display: none;
      }
    }
  }
`

export const Main = styled.main`
  display: flex; 
  justify-content: center; 
  flex-direction: column;
  align-items: center;
  height: 90vh;
  padding: 0 1rem;

  .containerImg{
    display: flex; 
    justify-content: center; 
    flex-direction: column;
    align-items: center;
    height: 90%;
    text-align: center;
    h1{
      font-size: ${Theme.Typography.DisplaySmallLarge.size};
      font-weight: ${Theme.Typography.DisplaySmallLarge.weight};
      color: ${Theme.Colors.dark};
      margin: 1rem 0 .5rem 0;
    }
    p{
      font-size: ${Theme.Typography.TitleMedium.size};
      font-weight: ${Theme.Typography.TitleMedium.weight};
      color: ${Theme.Colors.dark}
    }
  }

  .containerButtons{
    width: 100%;
    height: 10%;
  }
`