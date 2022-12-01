import { ReactNode, SetStateAction, useState } from "react";
import { Conteiner } from "./style";

export interface FormControlProps{
  showIconLeft?: boolean
  iconLeft?: ReactNode

  showIcon1?: boolean
  icon1?: ReactNode
  showIcon2?: boolean
  icon2?: ReactNode

  disable?: boolean
  error?: boolean

  variant: "action" | "icons" | "default"
  mensagem?: string

  value?: string
  setValue?: React.Dispatch<SetStateAction<string>>
}


export function FormControl(
  {
    icon1, 
    icon2, 
    iconLeft, 
    showIcon1, 
    showIcon2,
    showIconLeft, 
    disable = false,
    error = false,
    variant,
    mensagem,
    value = '',
    setValue
  }: FormControlProps){

  return(
    <Conteiner text={value} disable={disable} error={error}>
      <div className="containerInput">
        {(showIconLeft && variant === 'icons') &&
          <div className="iconLeft">
            {iconLeft}
          </div>
        }
        <div className="input">
          <input 
            type="text" 
            placeholder="" 
            value={value} 
            onChange={(e) => {setValue && setValue(e.target.value)} }
            disabled={disable} 
          />
          <label htmlFor="">Name: </label>
        </div>

        {((showIcon1 || showIcon2) && variant === 'icons') &&
          <div className="iconsRight">
            <div>
              {showIcon1 && icon1}
            </div>
            <div>
              {showIcon2 && icon2}
            </div>
          </div>
        }

        {variant === 'action' &&
          <button>
            Action
          </button>
        }
      </div> 

      {mensagem &&
        <p>{mensagem}</p> 
      }
    </Conteiner>
  )
}