import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CategoryPage } from "./Pages/CategoryPage/CategoryPage"
import { Home } from "./Pages/Home/Home"
import { ProductPage } from "./Pages/ProductPage/ProductPage"

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoryPage" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
