import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import Starred from "./pages/Starred";
import AppLayout from "./components/Layout/AppLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="watchlist" element={<Watchlist />} />
          <Route path="starred" element={<Starred />} />
          {/* <Route path="products/:productId" element={<ProductDetail />} />
            <Route path="add" element={<AddProduct />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
