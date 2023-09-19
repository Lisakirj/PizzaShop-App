import "./assets/scss/app.scss";

import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layouts/MainLayout";
import Main from "./pages/Main";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
