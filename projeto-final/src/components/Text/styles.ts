import styled from "styled-components";
import { Theme } from "../../styles/Theme";

interface TextTagProps{
  variant: string
  color:string
}

export const TextTag = styled.p<TextTagProps>`
  color: ${props => props.color};
  ${(props) => {
    switch (props.variant) {
      case "DisplayLarge":
        return `
          font-weight: ${Theme.Typography.DisplayLarge.weight};
          font-size: ${Theme.Typography.DisplayLarge.size};
        `;
      case "DisplayMedium":
        return `
          font-weight: ${Theme.Typography.DisplayMedium.weight};
          font-size: ${Theme.Typography.DisplayMedium.size};
        `;
      case "DisplaySmall":
        return `
          font-weight: ${Theme.Typography.DisplaySmall.weight};
          font-size: ${Theme.Typography.DisplaySmall.size};
        `;
      case "TitleMedium":
        return `
          font-weight: ${Theme.Typography.TitleMedium.weight};
          font-size: ${Theme.Typography.DisplayMedium.size};
        `;
      case "TitleRegular":
        return `
          font-weight: ${Theme.Typography.TitleRegular.weight};
          font-size: ${Theme.Typography.TitleRegular.size};
        `;
      case "BodyMedium":
        return `
          font-weight: ${Theme.Typography.BodyMedium.weight};
          font-size: ${Theme.Typography.BodyMedium.size};
        `;
      case "BodyRegular":
        return `
          font-weight: ${Theme.Typography.BodyRegular.weight};
          font-size: ${Theme.Typography.BodyRegular.size};
        `;
      case "LabelLarge":
        return `
          font-weight: ${Theme.Typography.LabelLarge.weight};
          font-size: ${Theme.Typography.LabelLarge.size};
        `;
      case "LabelMedium":
        return `
          font-weight: ${Theme.Typography.LabelMedium.weight};
          font-size: ${Theme.Typography.LabelMedium.size};
        `;
      case "LabelSmall":
        return `
          font-weight: ${Theme.Typography.LabelSmall.weight};
          font-size: ${Theme.Typography.LabelSmall.size};
        `;
      case "Link":
        return `
          font-weight: ${Theme.Typography.Link.weight};
          font-size: ${Theme.Typography.Link.size};
        `;
    }
  }}
`