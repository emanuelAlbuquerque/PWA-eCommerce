import styled from "styled-components";
import { Theme } from "../../styles/Theme";

interface OrderSumaryContainerProps{
  variant: 'detail' | 'default' | 'mobile'
}


export const OrderSumaryContainer = styled.div<OrderSumaryContainerProps>`
    width: 100%;
    ${({variant}) => variant !== 'mobile' && `max-width: 415px;`}

    h2{
      color: ${Theme.Colors.highEmphasis};

      font-size: ${({ variant }) => variant !== 'mobile' 
        ? `${Theme.Typography.DisplaySmall.size}` 
        : `${Theme.Typography.TitleRegular.size}`
      };

      font-weight: ${({ variant }) => variant !== 'mobile'
        ? `${Theme.Typography.DisplaySmall.weight}`
        : `${Theme.Typography.TitleRegular.weight}`
      };

      ${({variant}) => {
        if(variant !== 'mobile'){
          return`
            margin-bottom: 2rem;
            border-bottom: 1px solid ${Theme.Colors.lightText};
          `
        }else{
          return`
            margin-bottom: .5rem;
            border-bottom: none;
          `
        }
      }}
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
          font-size: ${({ variant }) => variant !== 'mobile'
            ? `${Theme.Typography.BodyMedium.size}`
            : `${Theme.Typography.TitleSmall.size}`
          };
          font-weight: ${({ variant }) => variant !== 'mobile'
            ? `${Theme.Typography.BodyMedium.weight}`
            : `${Theme.Typography.TitleSmall.weight}`
          };
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
          font-weight: ${({ variant }) => variant !== 'mobile'
            ? `${Theme.Typography.LinkRegular.weight}`
            : `${Theme.Typography.TitleRegular.weight}`
          };
          font-size: ${({ variant }) => variant !== 'mobile'
            ? `${Theme.Typography.LinkRegular.size}`
            : `${Theme.Typography.TitleRegular.size}`
          };
        }
      }
    }
`