import { ArrowRight } from "../../../assets/Icons/General/ArrowRight"
import { ButtonPrimary } from "../../Buttons/Primary/ButtonPrimary"
import { ContainerFunk, ContainerSpring, ContainerMakeup, ContainerDefault } from "./style"

export interface BannerWideProps{
  variant: 'funk' | 'spring' | 'makeup' | 'default'
  background?: string
}

export function BannerWide({variant, background}: BannerWideProps){
  return(
    <>
      {
        variant === 'default' && 
        <ContainerDefault background={background}>
          
        </ContainerDefault>
      }
      {
        variant === 'funk' && 
        <ContainerFunk>
          <div>
            <h1>Carry your Funk</h1>
            <p>Trendy handbags collection for your party animal</p>
            <div>
              <ButtonPrimary variant="default" text="See more" icon={<ArrowRight className="arrow"/>}/>
            </div>
          </div>
        </ContainerFunk>
      }
      {
        variant === 'spring' && 
        <ContainerSpring>
          <div>
            <h1>Spring Summer Collection</h1>
            <p>UPTO 20% OFF</p>
          </div>
        </ContainerSpring>
      }
      {
        variant === 'makeup' && 
        <ContainerMakeup>
          <div>
            <p>LIFESTYLE</p>
            <h1>Makeup Accessories from Top Brands</h1>
            <button>
              <ArrowRight className="arrow"/>
            </button>
          </div>
        </ContainerMakeup>
      }
    </>
  )
}