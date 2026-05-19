import GlobalProvider from "./context/GlobalProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllRocks from "./pages/AllRocks";
import RockDetail from "./pages/RockDetail";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import AppLayout from "./layouts/AppLayout";
import './App.css'

export default function App() {
  return (
    <GlobalProvider>
      <Router>

        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/rocks" element={<AllRocks />} />
            <Route path="/rocks/:id" element={<RockDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Route>
        </Routes>
      </Router>
    </GlobalProvider>
  )
}
