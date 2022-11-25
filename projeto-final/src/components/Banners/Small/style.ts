import styled from "styled-components";
import imgSkinCare from '../../../assets/img/imgSkinCareMobile.png'
import imgBannerFacepacksMobile from '../../../assets/img/imgBannerFacepacksMobile.png'
import imgSkinCareDesktop from '../../../assets/img/imgSkinCareDesktop.png'
import imgBannerFacepacksDesktop from '../../../assets/img/imgBannerFacepacksDesktop.png'
import { Theme } from "../../../styles/Theme";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 8px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 1024px){
    width: 100%;
    height: 230px;
  }
`

export const ContainerSkinCare = styled(Container)`
  background-image: url(${imgSkinCare});
  display: flex;
  align-items: center;
  justify-content: end;
  padding: .8rem;
  
  @media screen and (min-width: 1024px){
    background-image: url(${imgSkinCareDesktop});
    padding: 2rem;
  }

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

      @media screen and (min-width: 1024px){
        font-size: ${Theme.Typography.DisplayLarge.size};
        font-weight: ${Theme.Typography.DisplayLarge.weight};
      }
    }

    button{
      border: none;
      width: 26px;
      height: 26px;
      border-radius: 50%;

      @media screen and (min-width: 1024px){
        width: 51px;
        height: 51px;
      }

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

export const ContainerFacepacks = styled(ContainerSkinCare)`
  background-image: url(${imgBannerFacepacksMobile});

  @media screen and (min-width: 1024px){
    background-image: url(${imgBannerFacepacksDesktop});
  }
  div{
    h1{
      color: ${Theme.Colors.primary};
    }

    button{
      background-color: rgba(23, 73, 77, .1);

      .arrow path{
        stroke: ${Theme.Colors.primary}
      }
    }
  }
`