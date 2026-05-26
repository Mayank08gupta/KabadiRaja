import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AdminPanel from "./components/AdminPanel.jsx";
import RatesPage from "./components/RatesPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/rates" element={<RatesPage />} />
        <Route path="/admin-secret-scrapgo" element={<AdminPanel />} />
   
      </Routes>
    </BrowserRouter>
  </StrictMode>
);