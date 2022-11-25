import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;

  button{
    width: 60px;
    height: 60px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(23, 73, 77, .05);

    border: none;

    border-radius: 4px;

  }

  p{
    color: ${Theme.Colors.highEmphasis};
    font-size: ${Theme.Typography.LabelMedium.size};
    font-weight: ${Theme.Typography.LabelMedium.weight}
  }

`