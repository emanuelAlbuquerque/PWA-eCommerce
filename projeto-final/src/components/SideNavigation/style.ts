import styled from "styled-components";
import { Theme } from "../../styles/Theme";

interface ContainerProps{
  click: boolean
}


export const Container = styled.button<ContainerProps>`

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: .8rem 0;
  width: 100%;

  font-size: ${Theme.Typography.BodyMedium.size};
  font-weight: ${Theme.Typography.DisplayLarge.weight};
  color: ${(props) => props.click ? Theme.Colors.primary : Theme.Colors.dark};

  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);;
  cursor: pointer;
  background-color: transparent;

  .side-navigation__icon path{
    stroke: ${(props) => props.click ? Theme.Colors.primary : Theme.Colors.dark};
  }

`