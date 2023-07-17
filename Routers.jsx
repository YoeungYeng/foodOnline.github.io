import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AllFood from "../page/AllFood";
import Cart from "../page/Cart";
import CheckOut from "../page/CheckOut";
import Contact from "../page/Contact";
import FoodDetail from "../page/FoodDetail";
import Home from "../page/Home";
import Login from "../page/Login";
import Register from "../page/Register";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFood />} />
      <Route path="/foods/:id" element={<FoodDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;
