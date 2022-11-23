import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

interface ContainerProps{
  background: string
}

export const Container = styled.div<ContainerProps>`
  width: 156px;
  height: 150px;
  padding: 10px;
  border-radius: 8px;

  background-image: ${(props) => `url(${(props.background)})`};
  background-position: center;

  @media screen and (min-width: 1024px) {
    width: 235px;
    height: 235px;
    

    background-repeat: no-repeat;
    background-size: cover;
  }

  @media screen and (min-width: 1440px) {
    width: 330px;
    height: 330px;
  
    background-repeat: no-repeat;
    background-size: cover;
  }


  p{
    display: flex;
    align-items: end;
    width: 100%;
    height: 100%;

    color: ${Theme.Colors.highEmphasis};

    font-size: ${Theme.Typography.TitleMedium.size};
    font-weight: ${Theme.Typography.TitleMedium.weight};

    @media screen and (min-width: 1240px) {
      font-size: ${Theme.Typography.card.size};
      font-weight: ${Theme.Typography.card.weight};
    }
  }
`

export const ContainerStorybook = styled.div`
  display: flex;
  gap: 10px;
`