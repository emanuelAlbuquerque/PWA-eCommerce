import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Container = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;

  button{
    width: calc(100% - 90%);
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    background-color: ${Theme.Colors.bright};
    border: none;
    
  }
    
`

export const ContainerInput = styled.div`
    width: calc(100% - 10%);
    height: 100%;
    padding: 0 .5rem;

    background-color: ${Theme.Colors.grey};
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    input{
      background-color: ${Theme.Colors.tranparent};
      width: 100%;
      border: none;
      outline: none;
      color: ${Theme.Colors.lowEmphasis};


    }

    div{
      width: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      button{
        background-color: ${Theme.Colors.tranparent};
        border: none;
        width: calc(100% / 2);
      }
    }
`