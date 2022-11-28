import styled from "styled-components"
import { Theme } from "../../styles/Theme"

interface ContainerModalBagProps{
  modalBagOn: boolean
}

export const ContainerModalBag = styled.div<ContainerModalBagProps>`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, .3);

  ${props => props.modalBagOn === true ? 'display: flex;' : 'display: none;'}

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  .modalBag{
    width: 395px;
    background-color: ${Theme.Colors.bright};

    position: absolute;
    top: 60px;
    right: 15px;

    .modalBag_titulo{
      padding: 1rem;
    }

    .card{
      padding: 1rem;
      border-bottom: 1px solid ${Theme.Colors.lightGray};
    }

    .input_code{
      width: 100%;
      padding: 1rem;
    }
    
    .buttonModalBag{
      padding: 1rem;
    }

    .continue{
      display: block;
      padding: 1rem 0 .5rem 0;
      text-decoration: underline;
      color: ${Theme.Colors.primary};
      font-size: ${Theme.Typography.BodyMedium.size};
      font-weight: ${Theme.Typography.BodyMedium.weight};
      text-align: center;
    }
  }
`
export const ContainerInfosProdutos = styled.div`
    padding: 1rem;
`

export const InfosProdutos = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  p{
    font-size: ${Theme.Typography.LabelLarge.size};
    font-weight: ${Theme.Typography.LabelLarge.weight};
    color: ${Theme.Colors.highEmphasis};
  }

  h2{
    font-size: ${Theme.Typography.BodyMedium.size};
    font-weight: ${Theme.Typography.BodyMedium.weight};
    color: ${Theme.Colors.highEmphasis};
  }
`