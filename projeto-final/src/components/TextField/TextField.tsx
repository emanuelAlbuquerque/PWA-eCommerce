import { useState } from "react"
import { Container } from "./style"

interface TextFieldProps{
  className?: string;
}

export function TextField({className}: TextFieldProps){

  const [value, setValue] = useState('')

  return(
    <Container className={className}>
      <input 
        type="text" 
        placeholder="Enter valid pincode"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button>
        CHECK
      </button>
    </Container>
  )
}