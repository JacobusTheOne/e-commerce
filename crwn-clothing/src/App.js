import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import "./App.css";

function HatsPage() {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
}
function JacketsPage() {
  return (
    <div>
      <h1>JACKET PAGE</h1>
    </div>
  );
}
function SneakersPage() {
  return (
    <div>
      <h1>SNEAKERS PAGE</h1>
    </div>
  );
}
function WomensPage() {
  return (
    <div>
      <h1>WOMENS PAGE</h1>
    </div>
  );
}
function MensPage() {
  return (
    <div>
      <h1>MENS PAGE</h1>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
    </Routes>
  );
}

export default App;
