import { ArrowRight } from "../../../assets/Icons/General/ArrowRight";
import { ContainerSkinCare, ContainerFacepacks } from "./style";

export interface BannerSmallProps {
  variant: 'skincare' | 'facepacks'
}

export function BannerSmall({ variant }: BannerSmallProps) {
  return (
    <>
      {
        variant === 'skincare' &&
        <ContainerSkinCare>
          <div>
            <h1>Skincare Essentials</h1>
            <button>
              <ArrowRight className="arrow" />
            </button>
          </div>
        </ContainerSkinCare>
      }
      {
        variant === 'facepacks' &&
        <ContainerFacepacks>
          <div>
            <h1>Facepacks & Peels</h1>
            <button>
              <ArrowRight className="arrow" />
            </button>
          </div>
        </ContainerFacepacks>
      }
    </>
  )
}
