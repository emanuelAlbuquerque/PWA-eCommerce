import { useState } from "react"
import { Container } from "./style"

export function TextField(){

  const [value, setValue] = useState('')

  return(
    <Container>
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