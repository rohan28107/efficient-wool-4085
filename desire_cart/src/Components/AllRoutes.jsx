import React from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MenPage from "../Pages/MenPage";
import WomenPage from "../Pages/WomenPage";
import ProductDetails from "./ProductDetails";

const AllRoutes = () => {
    return <div>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/menpage" element={<MenPage />}></Route>
            <Route path="/womenpage" element={<WomenPage />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            {/* <Route path="/menpage/:id" element={<ProductDetails />}></Route>
            <Route path="/womenpage/:id" element={<ProductDetails />}></Route> */}
        </Routes>
    </div>
}

export default AllRoutes;