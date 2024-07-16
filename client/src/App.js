

import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Box } from "@mui/material";
import DataProvider from "./context/DataProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailView from "./components/details/DetailView";
import Cart from "./components/cart/Cart";
import { navData } from "./constants/data"; // Import navData
import Side from "./components/productPages/Side.jsx"

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        {/* <NavBar /> */}

        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView />} />
            <Route path="/cart" element={<Cart />} />
            {navData.map((data) => (
              <Route
                key={data.text}
                path={`/${data.text.toLowerCase()}`}
                element={<Side text={data.text} />}
              />
            ))}
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;

