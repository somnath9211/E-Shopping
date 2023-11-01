import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/home/Home";
import Order from "../src/pages/order/Order";
import Cart from "../src/pages/cart/Cart";
import Dashboard from "../src/pages/admin/dashboard/Dashboard";
import NoPage from "../src/pages/nopage/NoPage";
import MyState from "./context/data/myState";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import AddProduct from "./pages/admin/pages/AddProduct";
import UpdateProduct from "./pages/admin/pages/UpdateProduct";

const App = () => {
  return (
    <div>
      <MyState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/productInfo/:id" element={<ProductInfo />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/updateproduct" element={<UpdateProduct />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </MyState>
    </div>
  );
};

export default App;
