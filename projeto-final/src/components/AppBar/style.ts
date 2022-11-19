import styled from "styled-components";
import { Theme } from "../../styles/Theme";

interface ContainerProps{
  variant: string;
}

export const Container = styled.div <ContainerProps>`

  width: 100%;
  padding: 1rem;
  background-color: ${Theme.Colors.bright};

  display: flex;
  justify-content: space-between;
  align-items: center;

  
  div{
    display: flex;
    align-items: center;
    gap: 1.5rem;

    button{
      border: none;
      cursor: pointer;
      background: ${Theme.Colors.tranparent};

      display: flex;
      align-items: center;
    }

    p{
      color: ${Theme.Colors.primary};

      font-size: ${Theme.Typography.TitleRegular.size};
      font-weight: ${Theme.Typography.TitleRegular.weight};
      
      ${(props) => {
        switch (props.variant) {
          case 'PageTitle': 
            return`
              font-size: ${Theme.Typography.TitleRegular.size};
              font-weight: ${Theme.Typography.TitleRegular.weight};
            `
          case 'Search':
            return`
              font-size: ${Theme.Typography.DisplaySmall.size};
              font-weight: ${Theme.Typography.DisplaySmall.weight};
            `
        }
      }}
    }

    .icon{
      fill: ${Theme.Colors.primary}
    }
  }

` 