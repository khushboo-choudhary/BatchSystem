import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ThemeContext } from "./Context/theme";
import PricingRoutes from "./Component/PricingRoutes";
import Home from "./Component/Home";
// import Download from "./Component/Download";

function App() {
  const [{ themename }] = React.useContext(ThemeContext);
  return (
    <div id="top" className={`${themename} app`}>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<PricingRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
