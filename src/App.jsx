import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PromoBanner } from "./components/PromoBanner";
import { PromoScreen } from "./components/PromoScreen";
function App() {
  return (
    <Routes>
      <Route path="" element={<PromoBanner />} />
      <Route path="promo" element={<PromoScreen />} />
    </Routes>
  );
}

export default App;
