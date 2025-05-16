import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mens from "pages/catagory/Mens";
import Womens from "pages/catagory/Womens";
import Home from "pages/home";
import Login from "pages/Auth/Login";
import Register from "pages/Auth/Register";
import Layout from "components/Layout";
import Footwear from "pages/catagory/Footwear";
import Bags from "pages/catagory/Bags";
import BeautyProducts from "pages/catagory/BeautyProduct";
import ProductView from "pages/components/ProductView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="category/mens" element={<Mens />} />
          <Route path="category/womens" element={<Womens />} />
          <Route path="category/footwear" element={<Footwear />} />
          <Route path="category/bags" element={<Bags />} />
          <Route path="category/beauty-products" element={<BeautyProducts />} />
          <Route path="product-view/:productId" element={<ProductView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
