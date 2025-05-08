import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mens from "pages/catagory/Mens";
import Womens from "pages/catagory/Womens";
import Home from "pages/home";
import Login from "pages/Auth/Login";
import Register from "pages/Auth/Register";
import Layout from "components/Layout";

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
          {/* <Route path="product/:id" element={<Womens />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
