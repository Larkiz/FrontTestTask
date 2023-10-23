import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PromoBanner } from "./components/PromoBanner";
import { PromoScreen } from "./components/PromoScreen";
import { AccessScreen } from "./components/Access";
import { InactivityCheck } from "./utils/handlers/InactivityCheck";
import { ArrowNavigation } from "./utils/serviceComponents/ArrowNavigation";

function App() {
  return (
    <ArrowNavigation>
      <Routes>
        <Route path="" element={<PromoBanner />} />
        <Route
          path="promo"
          element={
            <InactivityCheck>
              <PromoScreen />
            </InactivityCheck>
          }
        />
        <Route
          path="access"
          element={
            <InactivityCheck>
              <AccessScreen />
            </InactivityCheck>
          }
        />
      </Routes>
    </ArrowNavigation>
  );
}

export default App;
