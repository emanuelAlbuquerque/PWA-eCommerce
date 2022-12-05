import styled from 'styled-components'
import { Theme } from '../../styles/Theme'

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;

  background-color: ${Theme.Colors.accent};

  display: flex;
  justify-content: space-between;
  align-items: center;

  .endereco{
    h1{
      margin-bottom: .5rem;
      font-size: ${Theme.Typography.TitleRegular.size};
      font-weight: ${Theme.Typography.TitleRegular.weight};
      color: ${Theme.Colors.highEmphasis}
    }
    p{
      font-size: ${Theme.Typography.TitleMedium.size};
      font-weight: ${Theme.Typography.TitleMedium.weight};
      color: ${Theme.Colors.lowEmphasis}
    }
  }

  .buttonEdit{
    width: 40px;
    height: 45px;
  }
`