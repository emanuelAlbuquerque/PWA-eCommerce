import styled from "styled-components";
import { Theme } from "../../../styles/Theme";


export const Container = styled.div`
  width: 100%;

  background-color: ${Theme.Colors.light};

  padding: 1rem 0;

  text-align: center;

  display: none;

  p{
    color: ${Theme.Colors.highEmphasis};
    font-size: ${Theme.Typography.LabelLarge.size};
    font-weight: ${Theme.Typography.LabelLarge.weight};
  }

  @media screen and (min-width: 1024px){
    display: block;
  }
`