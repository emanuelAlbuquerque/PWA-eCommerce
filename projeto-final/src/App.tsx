import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CategoryPage } from "./Pages/CategoryPage/CategoryPage"
import { Home } from "./Pages/Home/Home"

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/categoryPage' element={<CategoryPage />} />
        <Route />
      </Routes>
    </BrowserRouter>
  )
}

export default App
