import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Container = styled.div`
  width: 100%;
  height: 48px;
  padding: 0 1rem;

  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${Theme.Colors.grey};

  input{
    color: ${Theme.Colors.lowEmphasis};
    background-color: ${Theme.Colors.tranparent};

    width: 100%;
    height: 100%;
    padding-right: .3rem;
    
    outline: none;
    border: none;
  }

  button{
    background-color: ${Theme.Colors.tranparent};
    color: ${Theme.Colors.primary};
    border: none;

    height: 100%;

    cursor: pointer;

    font-size: ${Theme.Typography.TitleRegular.size};
    font-weight: ${Theme.Typography.TitleRegular.weight};
  }
`