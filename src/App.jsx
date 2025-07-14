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
import Sample from "pages/Sample";
import { WEB_URL } from "api/urls";
import Cart from "pages/components/Cart";
import { Provider } from "react-redux";
import { store } from "store";
import { Toast } from "components/Toast";
import Address from "pages/components/Stepper/Address";
import { Popup } from "components/Popup";
import OrderPage from "pages/components/OrderPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={WEB_URL.USER.LOGIN} element={<Login />} />
            <Route path={WEB_URL.USER.REGISTER} element={<Register />} />
            <Route path={WEB_URL.PRODUCT.MEN} element={<Mens />} />
            <Route path={WEB_URL.PRODUCT.WOMEN} element={<Womens />} />
            <Route path={WEB_URL.PRODUCT.FOOTWEAR} element={<Footwear />} />
            <Route path={WEB_URL.PRODUCT.BAG} element={<Bags />} />
            <Route path={WEB_URL.PRODUCT.BEAUTY} element={<BeautyProducts />} />
            <Route path={WEB_URL.PRODUCT.VIEW} element={<ProductView />} />
            <Route path={WEB_URL.CART} element={<Cart />} />
            <Route path="sample" element={<Sample />} />
            <Route path="sample/:id" element={<Sample />} />
            <Route path={WEB_URL.ORDER.PLACE_ORDER} element={<OrderPage />} />
          </Route>
        </Routes>
        <Toast />
        <Popup />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
