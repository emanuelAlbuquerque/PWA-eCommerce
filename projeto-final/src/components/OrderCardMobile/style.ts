import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${Theme.Colors.grey};
  border-radius: 4px;

  padding: 1rem;
  width: 100%;
`

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  p{
    color: ${Theme.Colors.Faded};
    font-size: ${Theme.Typography.LabelMedium.size};
    font-weight: ${Theme.Typography.LabelMedium.weight};
  }

  h3{
    color: ${Theme.Colors.highEmphasis};
    font-size: ${Theme.Typography.BodyMedium.size};
    font-weight: ${Theme.Typography.BodyMedium.weight};
  }
`

export const Button = styled.button`
  background-color: ${Theme.Colors.tranparent};
  border: none;
  cursor: pointer;
  svg path{
    stroke: ${Theme.Colors.lowEmphasis};
  }
`