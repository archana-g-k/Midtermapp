import HomePage from "./pages/HomePage";
import ElectronicsPage from "./pages/ElectronicsPage";
import JeweleryPage from "./pages/JeweleryPage";
import MenClothingPage from "./pages/MenClothingPage";
import WomenClothingPage from "./pages/WomenClothingPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import WishListPage from "./pages/WishListPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all" element={<HomePage />} />
        <Route path="/electronics" element={<ElectronicsPage />} />
        <Route path="/jewelery" element={<JeweleryPage />} />
        <Route path="/menclothing" element={<MenClothingPage />} />
        <Route path="/womenclothing" element={<WomenClothingPage />} />
        <Route path="/product/detail/:id" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
