import React from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MenPage from "../Pages/MenPage";
import WomenPage from "../Pages/WomenPage";
import MensProductDetails from "./MensProductDetails";
import WomensProductDetails from "./WomensProductDetails";
import AllProducts from "../Pages/AllProducts";
import AllProductsDetails from "./AllProductsDetails";
import Cart from "./Cart";


const AllRoutes = () => {
    return <div>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/allproducts" element={<AllProducts />}></Route>
            <Route path="/mensproducts" element={<MenPage />}></Route>
            <Route path="/womensproducts" element={<WomenPage />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/allproducts/:id" element={<AllProductsDetails />}></Route>
            <Route path="/mensproducts/:id" element={<MensProductDetails />}></Route>
            <Route path="/womensproducts/:id" element={<WomensProductDetails />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
        </Routes>
    </div>
}

export default AllRoutes;