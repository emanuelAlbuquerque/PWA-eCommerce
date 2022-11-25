import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Container = styled.div`
  width: 100px;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${Theme.Colors.light};

  border-radius: 1rem;

  img{
    width: 80%;
    height: 80%;
  }

  @media screen and (min-width: 1024px){
    width: 138px;
    height: 138px;

     img{
      width: auto;
      height: auto;
    }
  }
`