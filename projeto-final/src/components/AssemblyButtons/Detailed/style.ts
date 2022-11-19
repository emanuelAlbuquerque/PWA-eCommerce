import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

export const Container = styled.div`
  width: 100%;
  
  background-color: ${Theme.Colors.tranparent};

  display: flex;
  align-items: center;
  gap: 10px;
  
  .buttonDetailed_header{
    background-color: ${Theme.Colors.tranparent};

    width: calc(100% - 70%);

    p{
      color: ${Theme.Colors.lowEmphasis};

      font-size: ${Theme.Typography.Link.size};
      font-weight: ${Theme.Typography.Link.weight};

      margin-bottom: 5px;
    }

    h3{
       color: ${Theme.Colors.highEmphasis};

      font-size: ${Theme.Typography.BodyMedium.size};
      font-weight: ${Theme.Typography.BodyMedium.weight};
    }
  }

  .buttonDetailed_icon{
    width: calc(100% - 30%);
  }
`