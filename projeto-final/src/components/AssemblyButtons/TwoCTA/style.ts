import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

export const Container = styled.div`
  width: 100%;

  background-color: ${Theme.Colors.tranparent};

  display: flex;
  align-items: center;
  gap: 1rem;

  div{
    width: 50%;
  }
`