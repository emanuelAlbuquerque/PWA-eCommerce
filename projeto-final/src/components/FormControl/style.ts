import styled from "styled-components";
import { Theme } from "../../styles/Theme";

interface ContainerProps {
  text: string
  disable: boolean
  error: boolean
  variant: "action" | "icons" | "default" | "active"
}

export const Conteiner = styled.div<ContainerProps>`

  p{
    color: ${({ error }) => error ? `${Theme.Colors.error}` : `${Theme.Colors.lightText}`};
    font-size: ${Theme.Typography.Link.size};
    font-weight: ${Theme.Typography.Link.weight};
  }

  .mensagemError{
    margin-top: .3rem;
    color: ${Theme.Colors.error};
    font-size: ${Theme.Typography.Link.size};
    font-weight: ${Theme.Typography.Link.weight};
  }

  .containerInput{
    width: 100%;
    height: 56px;
    background-color: ${Theme.Colors.grey};

    ${({ disable }) => disable
    ? `background-color: ${Theme.Colors.lightText};`
    : `background-color: ${Theme.Colors.grey};`}

    padding: 0 1rem;
    display: flex;
    align-items: center;

    ${({ error }) => error && `border: 1px solid ${Theme.Colors.error};`}



    ${({ error, text, variant }) => {
    if (variant !== 'active') {
      if (text.length > 0) {
        return `
            border: 1px solid ${error ? `${Theme.Colors.error}` : `${Theme.Colors.primary}`};
          `
      }
    }
  }}
    

    ${({ variant, error }) => variant !== 'active' && `
      &:focus-within{
        border: 1px solid ${error ? `${Theme.Colors.error}` : `${Theme.Colors.primary}`};
      }

      &:focus-within .input label{
        color: ${error ? `${Theme.Colors.error}` : `${Theme.Colors.primary}`};
        top: -7px;
          
        font-size: ${Theme.Typography.LabelMedium.size};
        font-weight: ${Theme.Typography.LabelMedium.weight};
      }

      &:focus-within .input input{
        margin-top: 1rem;
      }`
  }


    .iconLeft{
      margin-right: 1rem
    }
    .iconsRight{
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-left: 1rem;
    }
    .input{
      display: flex;
      flex-direction: column;

      width: 100%;

      position: relative;


      input{
        background-color: ${Theme.Colors.tranparent};
        outline: none;
        border: none;
        color: ${Theme.Colors.highEmphasis};
        font-size: ${Theme.Typography.BodyMedium.size};
        font-weight: ${Theme.Typography.BodyMedium.weight};
        transition: all .2s;

        ${({ text, variant }) => {
    if (variant !== 'active') {
      if (text.length > 0) {
        return `
                margin-top: 1rem;
              `
      }
    }
  }}
      }

      label{
        position: absolute;
        pointer-events: none;

        ${({ text, error, variant }) => {
    if (variant !== 'active') {
      if (text.length > 0) {
        return `
              color: ${error ? `${Theme.Colors.error}` : `${Theme.Colors.primary}`};
              font-size: ${Theme.Typography.LabelMedium.size};
              font-weight: ${Theme.Typography.LabelMedium.weight};
              top: -7px;
              `
      } else {
        return `
                top: 0;
                left: 0;
                color: ${Theme.Colors.lowEmphasis};
                font-size: ${Theme.Typography.BodyMedium.size};
                font-weight: ${Theme.Typography.BodyMedium.weight};
              `
      }
    }
  }}

        transition: all .2s;
      }
    }

    button{
      background-color: ${Theme.Colors.tranparent};
      font-size: ${Theme.Typography.TitleRegular.size};
      font-weight: ${Theme.Typography.TitleRegular.weight};
      border: none;
      cursor: pointer;
      color: ${Theme.Colors.primary};
      text-transform: uppercase;

      ${({ disable }) => disable && `opacity: 0.6;`}
      
    }
  }
`