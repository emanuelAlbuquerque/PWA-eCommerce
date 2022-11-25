import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Container = styled.button`
  width: 100%;
  padding: .5rem 0;

  outline: none;
  border: none;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${Theme.Colors.bright};

  border-bottom: 1px solid ${Theme.Colors.lightGray};

  margin-bottom: 1rem;

  p{
    font-size: ${Theme.Typography.BodyMedium.size};
    font-weight: ${Theme.Typography.BodyMedium.weight};

    color: ${Theme.Colors.lowEmphasis};
  }
`