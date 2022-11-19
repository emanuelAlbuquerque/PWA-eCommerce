import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

export const Container = styled.div`
  width: 100%;

  background-color: ${Theme.Colors.tranparent};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  .button_small{
    width: calc(100% - 80%);
  }

  .button_large{
    width: calc(100% - 20%);
  }
`