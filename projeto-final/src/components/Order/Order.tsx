import { useNavigate } from "react-router-dom";
import { ButtonOutline } from "../Buttons/Outline/ButtonOutline";
import { ButtonPrimary } from "../Buttons/Primary/ButtonPrimary";
import { OrderSumaryContainer } from "./style";


export interface OrderProps{
  title?: string
  subTotal: number
  discount: number
  deliveryFee: number
  onClickPlaceOrder?: () => void

  className?: string

  variant: 'detail' | 'default' | 'mobile'
}


export function Order({ deliveryFee, discount, subTotal, title, onClickPlaceOrder, className, variant }: OrderProps){

  const navigate = useNavigate()

  const handleOnClickPlaceOrder = () => {
    if (onClickPlaceOrder){
      onClickPlaceOrder()
    }
  }


  return(
    <OrderSumaryContainer className={className} variant={variant}>
      {title && 
        <h2>
          {title}
        </h2>
      }
      <div className="ContainerInfosPrecos">
        <div className="preco">
          <h3>Sub Total</h3>
          <p>${(subTotal).toFixed(2)}</p>
        </div>
        <div className="preco">
          <h3>Discount</h3>
          <p>-${(discount).toFixed(2)}</p>
        </div>
        <div className="preco">
          <h3>Delivery Fee</h3>
          <p>-${(deliveryFee).toFixed(2)}</p>
        </div>
        <div className="precoTotal">
          <h3>Grand Total</h3>
          <p>${(subTotal - discount - deliveryFee).toFixed(2)}</p>
        </div>
      </div>

      {variant === 'default' && 
        <div className="Buttons">
          <ButtonPrimary variant="default" text="Place Order" onClick={handleOnClickPlaceOrder}/>
          <ButtonOutline variant="default" text="Continue Shopping" onClick={() => navigate('/categoryPage')}/>
        </div>
      }

    </OrderSumaryContainer>
  )
}