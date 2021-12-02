import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";

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
      <Route path="shop/hats" element={<HatsPage />} />
      <Route path="shop/jackets" element={<JacketsPage />} />
      <Route path="shop/sneakers" element={<SneakersPage />} />
      <Route path="shop/womens" element={<WomensPage />} />
      <Route path="shop/mens" element={<MensPage />} />
    </Routes>
  );
}

export default App;
