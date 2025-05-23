import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import Add from "./pages/Add/Add";
import Wishlist from "./pages/Wishlist/Wishlist";
import Detail from "./pages/Detail/Detail";
import NoPage from "./pages/NoPage/NoPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/add" element={<Add />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
