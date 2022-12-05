import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, .2);

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  align-items: flex-end;

  .containerModal{
    background-color: ${Theme.Colors.bright};
    border-radius: 2rem 2rem 0 0;
    width: 100%;
    padding: 1rem;

    .titleModal{
      display: flex;
      align-items: center;
      justify-content: space-between;

      border-bottom: 1px solid ${Theme.Colors.lightText};

      h1{
        color: ${Theme.Colors.lowEmphasis};
        font-size: ${Theme.Typography.TitleRegular.size};
        font-weight: ${Theme.Typography.TitleRegular.weight};
      }
    }

    .enderecos{
      margin: 1.5rem 0;

      height: 200px;
      overflow-y: scroll;
    }
  }
`