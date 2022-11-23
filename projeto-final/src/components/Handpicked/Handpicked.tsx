import imgOculos from '../../assets/img/img-oculos.png'
import imgPerfume from '../../assets/img/img-perfume.png'
import imgRelogio from '../../assets/img/img-relogio.png'
import imgBolsa from '../../assets/img/img-bolsa.png'
import { BannerSquare } from '../Banners/Square/BannerSquare'
import { Container } from './style'

export function Handpicked(){
  return(
    <Container>
      
        <div className='title'>
          <h2>Handpicked Collections</h2>
        </div>
        <div className='imagens'>
          <BannerSquare background={imgOculos} text='Sunglasses' />
          <BannerSquare background={imgPerfume} text='Personal Care ' />
          <BannerSquare background={imgRelogio} text='Wrist Watches' />
          <BannerSquare background={imgBolsa} text='Handbags' />
        </div>
      
    </Container>
  )
}