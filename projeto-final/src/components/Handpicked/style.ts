import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Container = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  background-color: ${Theme.Colors.primary};

    .imagens{
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .title{
      h2{
        width: 100%;
        color: ${Theme.Colors.bright};
  
        font-size: ${Theme.Typography.TitleRegular.size};
        font-weight: ${Theme.Typography.TitleRegular.weight};
        margin-bottom: 1rem;
  
        @media screen and (min-width: 1024px) {
          font-size: ${Theme.Typography.DisplayMedium.size};
          font-weight: ${Theme.Typography.DisplayMedium.weight};
        }
      }
    }
  
`