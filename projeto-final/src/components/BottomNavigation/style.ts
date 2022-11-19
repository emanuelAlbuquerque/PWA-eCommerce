import styled from "styled-components";
import { Theme } from "../../styles/Theme";

interface NavProps{
  theme: string
}

export const Nav = styled.nav<NavProps>`
  background-color: ${(props) => props.theme === 'light' ? Theme.Colors.bright : Theme.Colors.primary};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`