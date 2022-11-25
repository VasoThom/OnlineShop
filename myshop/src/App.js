import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Shop from "./views/Shop";
import Header from "./components/Header";
import { BasketProvider } from "./context/BasketContext";

function App() {
  return (
    <div className="App">
      <BasketProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </BasketProvider>
    </div>
  );
}

export default App;
