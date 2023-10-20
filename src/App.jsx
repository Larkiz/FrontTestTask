import "./App.css";
import { PromoBanner } from "./components/PromoBanner";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="" element={<PromoBanner />} />
      <Route path="promo" element={123} />
    </Routes>
  );
}

export default App;
