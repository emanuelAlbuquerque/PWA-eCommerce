import styled from "styled-components";
import { Theme } from "../../styles/Theme";


export const Footer = styled.footer`
    background-color: ${Theme.Colors.primary};

    hr{
      background-color: ${Theme.Colors.primaryTint};
    }
`

export const FooterNavegacao = styled.div`
  padding: 2rem;
    ul{
      
        &:not(:last-child){
            margin-bottom: 1.5rem;
        }

        &:not(:first-child){
          display: flex;
          flex-wrap: wrap;

          li{
            margin-right: 10px;
          }
        }

        li{
          color: ${Theme.Colors.bright};

          &:first-child{
            width: 100%;
          }
          
          &:not(:last-child){
            margin-bottom: 1rem;
          }

          a{
            font-size: ${Theme.Typography.BodyMedium.size};
            font-weight: ${Theme.Typography.BodyMedium.weight};
            color: ${Theme.Colors.lightText};
          } 
        }
    }
`

export const FooterRedesSociais = styled.div`
    padding: 2rem;
    .redes_sociais{
        ul{
            display: flex;
            
            li{
                &:not(:last-child){
                    margin-right: 2rem;
                }
                width: 38px;
                height: 38px;

                display: flex;
                justify-content: center;
                align-items: center;

                border-radius: 50%;

                background-color: ${Theme.Colors.primaryTint}
            }
        }
    }

    .footer_localizacao{
        margin-top: 2rem;

        .localizacao{
            color: ${Theme.Colors.bright};
            font-size: ${Theme.Typography.TitleMedium.size};
            font-weight: ${Theme.Typography.TitleMedium.weight};

            display: flex;
            align-items: center;
            gap: 10px;

                .icon{
                    stroke: ${Theme.Colors.bright}
                }
            }
        }

        .footer_copyright{
            margin-top: .5rem;

            color: ${Theme.Colors.lightText};
            font-size: ${Theme.Typography.TitleMedium.size};
            font-weight: ${Theme.Typography.TitleMedium.weight};
        }
`

export const Button = styled.button`
  padding: 1rem;
  width: 100%;

  outline: none;
  border: none;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${Theme.Colors.bright};

  p{
    font-size: ${Theme.Typography.TitleMedium.size};
    font-weight: ${Theme.Typography.TitleMedium.weight};

    color: ${Theme.Colors.lowEmphasis};
  }
`