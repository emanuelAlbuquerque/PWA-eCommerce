import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const OrderSumaryContainer = styled.div`
    width: 100%;
    max-width: 415px;

    h2{
      color: ${Theme.Colors.highEmphasis};
      font-size: ${Theme.Typography.DisplaySmall.size};
      font-weight: ${Theme.Typography.DisplaySmall.weight};
      margin-bottom: 2rem;
      border-bottom: 1px solid ${Theme.Colors.lightText};
      padding: .5rem 0;
    }

    .Buttons{
      display: flex;
      gap: 1rem;
      margin: 2rem 0;
    }

    .ContainerInfosPrecos{
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .preco, .precoTotal{
        display: flex;
        justify-content: space-between;
      }

      .preco{
        h3, p{
          color: ${Theme.Colors.lowEmphasis};
          font-size: ${Theme.Typography.BodyMedium.size};
          font-weight: ${Theme.Typography.BodyMedium.weight};
        }
        h3{
          color: ${Theme.Colors.lowEmphasis};
        }
        p{
          color: ${Theme.Colors.highEmphasis};
        }
      }

      .precoTotal{
        h3, p{
          color: ${Theme.Colors.highEmphasis};
          font-size: ${Theme.Typography.LinkRegular.size};
          font-weight: ${Theme.Typography.LinkRegular.weight};
        }
      }
    }
`