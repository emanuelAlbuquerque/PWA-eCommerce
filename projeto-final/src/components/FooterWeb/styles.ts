import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Footer = styled.footer`
    width: 100%;
    background-color: ${Theme.Colors.primary};
    padding: 2rem;

    display: none;
    justify-content: space-between;

    margin: 2rem 0 0 0;

    
    @media (min-width: 1024px) {
        display: flex;
      }
`

export const FooterNavegacao = styled.div`
    display: flex;
    ul{
        &:not(:last-child){
            margin-right: 3rem;
        }
        
        li{
            &:not(:last-child){
                margin-bottom: 1rem;
            }

            &:first-child{
                color: ${Theme.Colors.bright}
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
    text-align: right;

    @media screen and (max-width: 720px) {
            text-align: inherit;
        }

    .redes_sociais{
        ul{
            display: flex;
            justify-content: end;

            @media screen and (max-width: 720px) {
                justify-content: inherit;

                margin-top: 2rem;
            }
            
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
            justify-content: end;
            gap: 10px;

             @media screen and (max-width: 720px) {
                justify-content: inherit;
            }

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