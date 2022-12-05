import styled from "styled-components";
import { Theme } from "../../styles/Theme";


export const Container = styled.div`
  width: 100%;
  height: 100%; 

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  cursor: pointer;

  p{
    color: ${Theme.Colors.highEmphasis};
    font-size: ${Theme.Typography.BodyMedium.size};
    font-weight: ${Theme.Typography.BodyMedium.weight};
  }

`

interface ContainerInputPorps{
  isChecked: boolean
}

export const ContainerInput = styled.div<ContainerInputPorps>`

    width: 170px; 
    height: 150px;
    padding: .8rem;

    background-color: ${({ isChecked }) => isChecked ? `rgba(99, 149, 153, .2)` : `${Theme.Colors.bright}`};

    border: 1px solid ${Theme.Colors.lightText};
    border-radius: 12px;

    cursor: pointer;

  .containerInput{
    height: 100%; 
    width: 100%;

    label{
      width: 100%; 
      height: 100%;
    }
  }

  .inputRadio{
    position: absolute;
    top: 0;
    right: 0;
  }
` 