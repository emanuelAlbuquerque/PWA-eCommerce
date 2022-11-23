import styled from "styled-components";
import imgSkinCare from '../../../assets/img/imgSkinCareMobile.png'
import { Theme } from "../../../styles/Theme";

export const Container = styled.div`
  width: 155px;
  height: 100px;
  border-radius: 8px;
  background-position: center;
  background-repeat: no-repeat;
`

export const ContainerSkinCare = styled(Container)`
  background-image: url(${imgSkinCare});
  display: flex;
  align-items: center;
  justify-content: end;
  padding: .8rem;

  div{
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;

    h1{
      font-size: ${Theme.Typography.BodySmall.size};
      font-weight: ${Theme.Typography.BodySmall.weight};
      color: ${Theme.Colors.rosa};
      text-align: end;
    }

    button{
      border: none;
      width: 26px;
      height: 26px;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: ${Theme.Colors.bright};

      cursor: pointer;

      .arrow path{
        stroke: ${Theme.Colors.rosa}
      }
    }
  }
`