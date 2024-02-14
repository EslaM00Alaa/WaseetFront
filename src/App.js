import NavBar from "./components/header/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Sale from "./pages/sale/Sale";
import Buy from "./pages/buy/buy";
import Ask from "./pages/ask/Ask";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/ask" element={<Ask />} />
      </Routes>
    </div>
  );
}

export default App;
