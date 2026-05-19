import GlobalProvider from "./context/GlobalProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllRocks from "./pages/AllRocks";
import RockDetail from "./pages/RockDetail";
import Wishlist from "./pages/Wishlist";
import Success from "./pages/Success";
import AppLayout from "./layouts/AppLayout";
import './App.css'
import Adopt from "./pages/Adopt";
import AdoptedRocks from "./pages/AdoptedRocks";

export default function App() {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/rocks" element={<AllRocks />} />
            <Route path="/rocks/:id" element={<RockDetail />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/adopt/:id" element={<Adopt />} />
            <Route path="/adopted/:id" element={<Success />} />
            <Route path="/adoptedrocks" element={<AdoptedRocks />} />
          </Route>
        </Routes>
      </Router>
    </GlobalProvider>
  )
}
