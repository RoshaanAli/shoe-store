import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";

const CustomRoutes = () => {
  return (
    <>
      <Routes >
        <Route path="/" element={<HomeScreen />} />
        {/* <Route path="about" element={<ProductDetailScreen />} /> */}
      </Routes>
    </>
  );
};

export default CustomRoutes;
