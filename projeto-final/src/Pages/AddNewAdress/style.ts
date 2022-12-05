import styled from "styled-components";
import { Theme } from "../../styles/Theme";
import setaSelect from '../../assets/img/setaSelect.png'

export const Main = styled.main`
  padding: 1rem;

  .buttonSave{
    margin-top: 2rem;
  }
`

export const Title = styled.h2`
  color: ${Theme.Colors.lowEmphasis};
  font-size: ${Theme.Typography.TitleRegular.size};
  font-weight: ${Theme.Typography.TitleRegular.weight};
  border-bottom: 1px solid ${Theme.Colors.lightText};
  margin-bottom: 1rem;
  padding-bottom: .5rem;
`

export const ConcactInnformation = styled.div`
    margin-bottom: 4rem;
`

export const Input = styled.div`
    margin-bottom: 1rem;
`

export const ContainerInputNumber = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;

    .inputDDD{
      width: 20%;
    }

    .inputNumber{
      width: calc(100% - 20% - 10px);
    }
`


export const DeliveryAddress = styled.div`
  margin-bottom: 3rem;
`

export const InputSelect = styled.select`
  width: 100%;
  height: 56px;

  border: none;

  padding: 0 1rem;
  display: flex;
  align-items: center;

  -webkit-appearance:none; 
  background: ${Theme.Colors.grey} url(${setaSelect}) 95.5% 50% no-repeat;

 
  color: ${Theme.Colors.lowEmphasis};
  font-size: ${Theme.Typography.BodyMedium.size};
  font-weight: ${Theme.Typography.BodyMedium.weight};

  outline: none;
`

export const ContainerChips = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`