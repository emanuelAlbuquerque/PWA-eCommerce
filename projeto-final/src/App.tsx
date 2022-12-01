import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CategoryPage } from "./Pages/CategoryPage/CategoryPage"
import { CheckoutPage } from "./Pages/CheckoutPage/CheckoutPage"
import { Home } from "./Pages/Home/Home"
import { MyCart } from "./Pages/MyCart/MyCart"
import { ProductPage } from "./Pages/ProductPage/ProductPage"

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoryPage" element={<CategoryPage />} />
        <Route path="/product/:idProduto" element={<ProductPage />} />
        <Route path="/myCarty" element={<MyCart />} />
        <Route path="/checkoutPage" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
