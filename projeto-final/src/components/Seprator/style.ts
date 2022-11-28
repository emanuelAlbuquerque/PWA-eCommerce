import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Container = styled.div`
  width: 100%;
  height: 8px;

  background-color: ${Theme.Colors.grey};

  display: none;

  @media screen and (max-width: 425px){
    display: block;
  }
`