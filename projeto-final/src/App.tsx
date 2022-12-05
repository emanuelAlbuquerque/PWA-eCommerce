import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AddNewAddress } from "./Pages/AddNewAdress/AddNewAdress"
import { BagMobile } from "./Pages/BagMobile/BagMobile"
import { BagVazia } from "./Pages/BagVazia/BagVazia"
import { CategoryPage } from "./Pages/CategoryPage/CategoryPage"
import { CheckoutPage } from "./Pages/CheckoutPage/CheckoutPage"
import { Home } from "./Pages/Home/Home"
import { MyCart } from "./Pages/MyCart/MyCart"
import { OrderSummaryPage } from "./Pages/OrderSummary/OrderSummary"
import { PaymentsPage } from "./Pages/PaymentsPage/PaymentsPage"
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
        <Route path="/bagMobile" element={<BagMobile />} />
        <Route path="/bagVazia" element={<BagVazia />} />
        <Route path="/orderSummary" element={<OrderSummaryPage />} />
        <Route path="/addNewAddress" element={<AddNewAddress />} />
        <Route path="/payments" element={<PaymentsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
