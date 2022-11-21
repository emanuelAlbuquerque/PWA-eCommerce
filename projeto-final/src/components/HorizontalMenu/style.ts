import styled from "styled-components";
import { Theme } from "../../styles/Theme";

interface ContainerProps{
  click: boolean
}

export const Container = styled.button<ContainerProps>`

  width: 100%;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border: none;
  cursor: pointer;

  background-color: ${(props) => props.click ? Theme.Colors.bright : Theme.Colors.grey};
  color: ${(props) => props.click ? Theme.Colors.dark : Theme.Colors.lowEmphasis};

  transition: all .2s;

`