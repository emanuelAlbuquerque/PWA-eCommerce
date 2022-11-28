import styled from "styled-components";
import { Theme } from "../../styles/Theme";

interface ContainerProps{
  click: boolean
}


export const Container = styled.button<ContainerProps>`

  display: none;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
  width: 100%;

  font-size: ${Theme.Typography.BodyMedium.size};
  font-weight: ${Theme.Typography.DisplayLarge.weight};
  color: ${(props) => props.click ? Theme.Colors.primary : Theme.Colors.dark};

  border: none;
  cursor: pointer;
  background-color: ${Theme.Colors.bright};

  .side-navigation__icon path{
    stroke: ${(props) => props.click ? Theme.Colors.primary : Theme.Colors.dark};
  }

  @media screen and (max-width: 425px){
    display: flex;
  }

`