import { ArrowRight } from "../../../assets/Icons/General/ArrowRight";
import { ContainerSkinCare } from "./style";

export interface BannerSmallProps{
  variant: 'skincare' | 'facepacks'
}

export function BannerSmall({ variant }: BannerSmallProps){
  return(
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
    </>
  )
}