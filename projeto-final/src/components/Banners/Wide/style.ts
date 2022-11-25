import styled from "styled-components";
import imgBannerFunkMobile from '../../../assets/img/imgBannerFunkMobile.png'
import imgBannerSpringMobile from '../../../assets/img/imgBannerSpringMobile.png'
import imgBannerMeckupMobile from '../../../assets/img/imgBannerMeckupMobile.png'

import imgBannerFunkDesktop from '../../../assets/img/imgBannerFunkDesktop.png'
import imgBannerMeckupDesktop from '../../../assets/img/imgBannerMeckupDesktop.png'
import { Theme } from "../../../styles/Theme";

interface ContainerDefaultProps{
  background?: string
}

export const Container = styled.div`
  width: 100%;
  height: 120px;
  border-radius: 10px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 1024px){
    width: 100%;
    height: 400px
  }
`

export const ContainerDefault = styled(Container)<ContainerDefaultProps>`
  background-image: url(${(props) => props.background});
  `

export const ContainerFunk = styled(Container)`
  background-image: url(${imgBannerFunkMobile});
  
  @media screen and (min-width: 1024px){
    background-image: url(${imgBannerFunkDesktop});
  }
  display: flex;
  align-items: center;
  justify-content: end;

  div{
    width: 60%;
    background: rgba(222, 222, 222, 0.7);
    backdrop-filter: blur(2.5px);

    border-radius: 10px 0 0 10px;
    padding: .8rem 1rem .8rem .8rem ;

    @media screen and (min-width: 1024px){
      border-radius: 1rem 0 0 1rem;
      padding: 2.5rem 3rem 2.5rem 2.5rem ;
    }
    
    h1{
      font-size: ${Theme.Typography.TitleLarge.size};
      font-weight: ${Theme.Typography.TitleLarge.weight};
      color: ${Theme.Colors.primary};
      
      @media screen and (min-width: 1024px){
        font-size: ${Theme.Typography.DisplayUtraLarge.size};
        font-weight: ${Theme.Typography.DisplayUtraLarge.weight};
      }
    }

    p{
      font-size: ${Theme.Typography.LabelMedium.size};
      font-weight: ${Theme.Typography.LabelMedium.weight};
      color: ${Theme.Colors.primary};

      @media screen and (min-width: 1024px){
        margin: 1rem 0;
        font-size: ${Theme.Typography.DisplayRegular.size};
        font-weight: ${Theme.Typography.DisplayRegular.weight};
      }
    }

    div{
      width: 180px;
      padding: 0;
      border-radius: 4px;
      display: none;
      
      @media screen and (min-width: 1024px){
        display: block;
      }

      button{
        .arrow path{
          stroke: ${Theme.Colors.bright}
        }
      }
    }

  }
`

export const ContainerSpring = styled(Container)`
  background-image: url(${imgBannerSpringMobile});

  display: flex;
  align-items: center;

  div{
    width: 40%;
    margin-left: 1rem;

    h1{
      font-size: ${Theme.Typography.BodyLarge.size};
      font-weight: ${Theme.Typography.BodyLarge.weight};
      color: ${Theme.Colors.highDark};
      margin-bottom: 10px;
    }

    p{
      display: inline-block;
      padding: .5rem;
      border-radius: 8px;
      background-color: ${Theme.Colors.orangeLight};
      font-size: ${Theme.Typography.Link.size};
      font-weight: ${Theme.Typography.Link.weight};
      color: ${Theme.Colors.highDark};
    }
  }
`
export const ContainerMakeup = styled(Container)`
  background-image: url(${imgBannerMeckupMobile});
  
  @media screen and (min-width: 1024px){
    background-image: url(${imgBannerMeckupDesktop});
  }

  display: flex;
  align-items: center;

  div{
    width: 60%;
    margin-left: 1rem;
    
    h1{
      font-size: ${Theme.Typography.BodyLarge.size};
      font-weight: ${Theme.Typography.BodyLarge.weight};
      color: ${Theme.Colors.highDark};
      margin: 10px 0;
      
      @media screen and (min-width: 1024px){
        font-size: ${Theme.Typography.TitleUltraLarge.size};
        font-weight: ${Theme.Typography.TitleUltraLarge.weight};
      }
    }
    
    p{
      font-size: ${Theme.Typography.LinkMedium.size};
      font-weight: ${Theme.Typography.LinkMedium.weight};
      color: ${Theme.Colors.high};
      
      @media screen and (min-width: 1024px){
        font-size: ${Theme.Typography.BodyUltraLarge.size};
        font-weight: ${Theme.Typography.BodyUltraLarge.weight};
      }
    }

    button{
      border: none;
      width: 26px;
      height: 26px;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: rgba(151, 69, 31, .1);

      cursor: pointer;

      .arrow path{
        stroke: ${Theme.Colors.high}
      }

      @media screen and (min-width: 1024px){
        display:none;
      }
    }
  }
`