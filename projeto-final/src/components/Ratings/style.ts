import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Container = styled.div`
  display: flex;
  gap: 10px;

  button{
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;

    .on path{
      fill: ${Theme.Colors.highLight};
      stroke: ${Theme.Colors.highLight};
    }

    .of path{
      fill: ${Theme.Colors.lightText};
      stroke: ${Theme.Colors.lightText};
    } 
  }

`