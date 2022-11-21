import { ReactNode, useState } from "react"
import { ChevronLeft } from "../../assets/Icons/General/ChevronLeft"
import { Container, ContainerInput } from "./style"

export interface SearchProps{
  onClickButtonVoltar?: () => void
  iconOne?: ReactNode
  iconTwo?: ReactNode
  onClickIconOne?: () => void
  onClickIconTwo?: () => void
}

export function Search({ iconOne, iconTwo, onClickButtonVoltar, onClickIconOne, onClickIconTwo}: SearchProps){

  const [value, setValue] = useState<string>()

  return(
    <Container>
      <button onClick={onClickButtonVoltar}>
        <ChevronLeft />
      </button>
      <ContainerInput>
        <input 
          type="text"
          placeholder="Search" 
          value={value}
          onChange={(text) => setValue(text.target.value)}
        />
        {iconOne || iconTwo && 
          <div>
            <button>
              {iconOne}
            </button>
            <button>
              {iconTwo}
            </button>
          </div>
        }
        
      </ContainerInput>
    </Container>
  )
}